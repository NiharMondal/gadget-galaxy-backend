import { Brand } from "@prisma/client";
import { prisma } from "../../../db/db";

//create brand
const insertIntoDB = async (payload: Brand) => {
	const res = await prisma.brand.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.brand.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.brand.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Brand) => {
	const res = await prisma.brand.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.brand.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const brandServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
