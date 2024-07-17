import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../../config";
import { prisma } from "../../../db/db";
import exclude from "../../../helpers/excludeFields";

const getAllFromDB = async () => {
	const user = await prisma.user.findMany({
		select: {
			avatar: true,
			id: true,
			email: true,
			name: true,
			orders: true,
			role: true,
			updatedAt: true,
			address: true,
			createdAt: true,
		},
	});
	// const withoutPass = exclude(user, ["password",""])
	return user;
};

const getById = async (id: string) => {
	const singleUser = await prisma.user.findUniqueOrThrow({
		where: {
			id: id,
		},
	});
	const withoutPass = exclude(singleUser, ["password"]);
	return withoutPass;
};

const updateIntoDB = async (id: string, payload: User) => {
	const user = await prisma.user.update({
		where: {
			id: id,
		},
		data: payload,
	});

	const withoutPass = exclude(user, ["password"]);
	return withoutPass;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.user.delete({
		where: {
			id: id,
		},
	});

	return res;
};

export const userServices = {
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
