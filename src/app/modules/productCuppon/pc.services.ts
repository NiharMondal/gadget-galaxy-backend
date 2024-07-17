import {  ProductCuppon } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: ProductCuppon) => {
	const res = await prisma.productCuppon.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.productCuppon.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.productCuppon.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: ProductCuppon) => {
	const res = await prisma.productCuppon.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.productCuppon.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const pcServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
