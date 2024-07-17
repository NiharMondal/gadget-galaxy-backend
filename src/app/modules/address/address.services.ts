import { Address } from "@prisma/client";
import { prisma } from "../../../db/db";


const insertIntoDB = async (payload: Address) => {
	const res = await prisma.address.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.address.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.address.findUniqueOrThrow({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Address) => {
	const res = await prisma.address.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.address.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const addressServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
