import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../../db/db";
import exclude from "../../../helpers/excludeFields";

const profile = async (payload: JwtPayload) => {
	const aboutMe = await prisma.user.findUniqueOrThrow({
		where: {
			email: payload.email,
			id: payload.id,
		},
		include: {
			address: true,
			orders: true,
		},
	});

	const withoutPass = exclude(aboutMe, ["password"]);
	return withoutPass;
};

export const profileServices = { profile };
