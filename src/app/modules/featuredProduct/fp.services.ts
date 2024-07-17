import {  FeaturedProduct } from "@prisma/client";
import { prisma } from "../../../db/db";

const insertIntoDB = async (payload: FeaturedProduct) => {
	const res = await prisma.featuredProduct.create({
		data: payload,
	});

	return res;
};

const getAllFromDB = async () => {
	const res = await prisma.featuredProduct.findMany({
		
	});
	return res;
};

const getById = async (id: string) => {
	const res = await prisma.featuredProduct.findUnique({
		where: {
			id: id,
		},
	});

	return res;
};

const updateIntoDB = async (id: string, payload: FeaturedProduct) => {
	const res = await prisma.featuredProduct.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.featuredProduct.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const fpServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
