import { OfferedProduct } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: OfferedProduct) => {
	const res = await prisma.offeredProduct.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.offeredProduct.findMany({});
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.offeredProduct.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: OfferedProduct) => {
	const res = await prisma.offeredProduct.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.offeredProduct.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const opServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
