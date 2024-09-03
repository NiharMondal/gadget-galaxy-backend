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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const db_1 = require("../../../db/db");
const appError_1 = __importDefault(require("../../../utils/appError"));
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //hash password
    const hashPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.salt_round));
    //create user
    const user = yield db_1.prisma.user.create({
        data: Object.assign(Object.assign({}, payload), { password: hashPassword }),
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            avatar: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    return user;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
        },
    });
    const correctPass = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!correctPass) {
        throw new appError_1.default(400, "Invalid credentials");
    }
    const token = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const userToken = jsonwebtoken_1.default.sign(token, config_1.default.jwt_secret, {
        expiresIn: config_1.default.jwt_expires,
    });
    return {
        authToken: userToken,
        avatar: user.avatar,
    };
});
const forgotPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
        },
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
});
const changePassword = (_a) => __awaiter(void 0, [_a], void 0, function* ({ payload, user }) {
    //check new password and old password
    if (payload.oldPassword === payload.newPassword) {
        throw new appError_1.default(400, "New password can't be current password!");
    }
    const userDetails = yield db_1.prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            id: user.id,
        },
    });
    const matchPassword = yield bcrypt_1.default.compare(payload.oldPassword, userDetails.password);
    if (!matchPassword) {
        throw new appError_1.default(400, "Your current password doesn't match");
    }
    const hashedPass = yield bcrypt_1.default.hash(payload.newPassword, Number(config_1.default.salt_round));
    yield db_1.prisma.user.update({
        where: {
            id: user.id,
            email: user.email,
        },
        data: {
            password: hashedPass,
        },
    });
});
const resetPassword = (_b) => __awaiter(void 0, [_b], void 0, function* ({ user, payload }) {
    console.log(payload, user);
});
exports.authServices = { register, login, forgotPassword, changePassword, resetPassword };
