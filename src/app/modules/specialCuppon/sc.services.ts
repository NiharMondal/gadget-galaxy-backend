import { SpecialCuppon } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: SpecialCuppon) => {
	const res = await prisma.specialCuppon.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.specialCuppon.findMany();
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.specialCuppon.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: SpecialCuppon) => {
	const res = await prisma.specialCuppon.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.specialCuppon.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const scServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
