import { Category } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: Category) => {
	const res = await prisma.category.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.category.findMany({
		include: {
			subCategory: true,
			products: true,
		},
	});
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.category.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Category) => {
	const res = await prisma.category.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.category.delete({
		where: {
			id: id,
		},
	});

	return res;
};

const catSubCatName = async () => {
	const res = await prisma.category.findMany({
		select: {
			name: true,
		},
	});

	return res;
};

export const categoryServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
	catSubCatName,
};
