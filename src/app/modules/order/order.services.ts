import { Order, OrderedItem } from "@prisma/client";
import { prisma } from "../../../db/db";
import AppError from "../../../utils/appError";


type TPayload = {
	items: OrderedItem[];
} & Order;

const insertIntoDB = async (payload: TPayload) => {
	const { items, ...rest } = payload;

	try {
		const result = await prisma.$transaction(
			async (tx) => {
				for (const item of items) {
					const product = await tx.product.findUniqueOrThrow({
						where: {
							id: item.productId,
						},
					});

					if (!product) {
						throw new AppError(404, "Product not found!");
					}

					if (product.inStock < item.quantity) {
						throw new AppError(400, "Sorry, insuficient stock!");
					}

					await tx.product.updateMany({
						where: {
							id: item.productId,
						},
						data: {
							inStock: {
								decrement: item.quantity,
							},
						},
					});
				}

				const orders = await tx.order.create({
					data: {
						...rest,
						items: {
							create: items.map((item: OrderedItem) => ({
								...item,
							})),
						},
					},
				});
				return orders;
			},
			{
				maxWait: 10000,
				timeout: 10000,
			}
		);
		return result;
	} catch (error: any) {
		throw new AppError(500, error);
	}
};

const getAllFromDB = async () => {
	const res = await prisma.order.findMany({});
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.order.findUniqueOrThrow({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Order) => {
	const res = await prisma.order.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.order.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const orderServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
