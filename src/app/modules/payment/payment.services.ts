import { Payment } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: Payment) => {
	const res = await prisma.payment.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.payment.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.payment.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Payment) => {
	const res = await prisma.payment.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.payment.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const paymentServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
