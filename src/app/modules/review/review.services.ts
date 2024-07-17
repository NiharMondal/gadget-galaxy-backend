import { Review } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: Review) => {
	const res = await prisma.review.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.review.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.review.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: Review) => {
	const res = await prisma.review.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.review.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const reviewServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
