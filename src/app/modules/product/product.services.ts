import { Product } from "@prisma/client";
import { prisma } from "../../../db/db";
import slugify from "slugify";

const insertIntoDB = async (payload: Product) => {
	const slug =  slugify(payload.name,{lower:true});
	const res = await prisma.product.create({
		data: {
			...payload,
			slug,
		},
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.product.findMany({
		where: {
			isDeleted: false,
		},
	});
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.product.findUniqueOrThrow({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Product) => {
	const res = await prisma.product.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.product.delete({
		where: {
			id: id,
		},
	});

	return res;
};

const softDeleteFromDB = async (id: string) => {
	const res = await prisma.product.update({
		where: {
			id: id,
		},
		data: {
			isDeleted: true,
		},
	});

	return res;
};

export const productServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
	softDeleteFromDB,
};
