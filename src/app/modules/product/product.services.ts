import { Prisma, Product } from "@prisma/client";
import { prisma } from "../../../db/db";
import slugify from "slugify";
import { pagination } from "../../../helpers/pagination";


const insertIntoDB = async (payload: Product) => {

	const slug =  slugify(payload.name,{lower:true});
	const res = await prisma.product.create({
		data: {
			...payload,
			slug,
		},
	});

	return res;
};

const getAllFromDB = async (query: TQuery) => {
	const queryCopy = {...query}
	
	const excludedField = ["sortby", "orderBy", "page","limit"];
	excludedField.forEach(field=> delete queryCopy[field]);
 
	const {search, price, ...others} = queryCopy;
	const {limit, skip,page} = pagination(Number(query.page), Number(query.limit))
	const andConditions:Prisma.ProductWhereInput[] = []

	if (search) { 
		andConditions.push({
			OR: ["name"].map((value) => ({
				[value]: {
					contains: queryCopy.search,
					mode: "insensitive",
				},
			})),
		});
	}

	if (price) {
		const splitedValue = queryCopy.price.split(",");
		andConditions.push({
			OR: [
				{
					price: {
						gte: Number(splitedValue[0]),
						lte: Number(splitedValue[1]),
					},
				},
			],
		});
	};

	 // Handle other filters
    if (Object.keys(others).length > 0) {
        andConditions.push({
            OR: Object.keys(others).map((key) => ({
                [key]: {
                    in: decodeURIComponent(others[key]).split(","),
                },
            })),
        });
    }

	const whereConditions:Prisma.ProductWhereInput = {AND: andConditions}
	const total = await prisma.product.count({where:whereConditions});
	const totalPages = Math.ceil(total/limit)
	const result = await prisma.product.findMany({
		where: whereConditions,
		skip,
		take:limit,
		orderBy: query.orderBy ? {
			price:  query.orderBy as "asc" | "desc"
		}: {
			createdAt:"asc"
		}
	
	});
	const meta = {
		page,
		totalPages,
	}
	return {
		meta,
		result
	};
};

const getById = async (slug: string) => {
	const res = await prisma.product.findUniqueOrThrow({
		where:{
			slug:slug
		},
		include:{
			reviews:true
		}
	});
	return res;
};

const updateIntoDB = async (id: string, payload: Product) => {
	const res = await prisma.product.update({
		where: {
			id: id,
		},
		data: payload,
	});

	return res;
};

const deleteFromDB = async (id: string) => {
	const res = await prisma.product.delete({
		where: {
			id: id,
			
		},
	});

	return res;
};

const softDeleteFromDB = async (id: string) => {
	const res = await prisma.product.update({
		where: {
			id: id,
		},
		data: {
			isDeleted: true,
		},
	});

	return res;
};

export const productServices = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
	softDeleteFromDB,
};
