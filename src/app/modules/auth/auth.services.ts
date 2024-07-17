import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

import exclude from "../../../helpers/excludeFields";
import { User } from "@prisma/client";
import config from "../../../config";
import { prisma } from "../../../db/db";
import AppError from "../../../utils/appError";

type TLoginPayload = {
	email: string;
	password: string;
};

type TChangePasswordPayload = {
	user: JwtPayload;
	payload: {
		password: string;
		newPassword: string;
	};
};
type TResetPasswordPaylod = {
	user: JwtPayload;
	payload: {
		password: string;
		confirmPassword: string;
	};
};

const register = async (payload: User) => {
	//hash password
	const hashPassword = await bcrypt.hash(
		payload.password,
		Number(config.salt_round)
	);

	//create user
	const user = await prisma.user.create({
		data: {
			...payload,
			password: hashPassword,
		},
	});

	const withoutPass = exclude(user, ["password"]);
	return withoutPass;
};

const login = async (payload: TLoginPayload) => {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			email: payload.email,
		},
	});
	const correctPass = await bcrypt.compare(payload.password, user.password);

	if (!correctPass) {
		throw new AppError(400, "Invalid credentials");
	}

	const token = {
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role,
	} as JwtPayload;

	const userToken = jwt.sign(token, config.jwt_secret as string, {
		expiresIn: config.jwt_expires,
	});

	return { userToken, avatar: user.avatar };
};

const forgotPassword = async (payload: { email: string }) => {
	await prisma.user.findUniqueOrThrow({
		where: {
			email: payload.email,
		},
		select: {
			id: true,
			name: true,
			email: true,
		},
	});
};
const changePassword = async ({ payload, user }: TChangePasswordPayload) => {
	//check new password and old password
	if (payload.password === payload.newPassword) {
		throw new AppError(400, "New password can't be current password!");
	}

	const userDetails = await prisma.user.findUniqueOrThrow({
		where: {
			email: user.email,
			id: user.id,
		},
	});

	const matchPassword = await bcrypt.compare(
		payload.password,
		userDetails.password
	);

	if (!matchPassword) {
		throw new AppError(400, "Your current password doesn't match");
	}

	const hashedPass = await bcrypt.hash(
		payload.newPassword,
		Number(config.salt_round)
	);

	await prisma.user.update({
		where: {
			id: user.id,
			email: user.email,
		},
		data: {
			password: hashedPass,
		},
	});
};

const resetPassword = async ({ user, payload }: TResetPasswordPaylod) => {
	console.log(payload, user);
};

export const authServices = {register, login, forgotPassword, changePassword,resetPassword };
