import { SubCategory } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: SubCategory) => {
	const res = await prisma.subCategory.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.subCategory.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.subCategory.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: SubCategory) => {
	const res = await prisma.subCategory.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.subCategory.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const subCategoryServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
