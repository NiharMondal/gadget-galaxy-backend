"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandServices = void 0;
const db_1 = require("../../../db/db");
//create brand
const insertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.prisma.brand.create({
        data: payload,
    });
    return res;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.prisma.brand.findMany();
    return res;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.prisma.brand.findUnique({
        where: {
            id: id,
        },
    });
    return res;
});
const updateIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.prisma.brand.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return res;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.prisma.brand.delete({
        where: {
            id: id,
        },
    });
    return res;
});
exports.brandServices = {
    insertIntoDB,
    getAllFromDB,
    getById,
    updateIntoDB,
    deleteFromDB,
};
