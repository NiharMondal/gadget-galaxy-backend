import { brandRoutes } from "../modules/brand/brand.route";
import { categoryRoutes } from "../modules/category/category.route";
import { userRoutes } from "../modules/user/user.route";
import { productRoutes } from "../modules/product/product.route";
import { orderRoutes } from "../modules/order/order.route";
import { subCategoryRoutes } from "../modules/subCategory/subCategory.route";
import { addressRoutes } from "../modules/address/address.route";
import { authRoutes } from "../modules/auth/auth.route";
import { profileRoutes } from "../modules/profile/profile.route";

export const routeArray = [
	{
		path: "/brand",
		route: brandRoutes,
	},
	{
		path: "/category",
		route: categoryRoutes,
	},
	{
		path: "/sub-category",
		route: subCategoryRoutes,
	},
	{
		path: "/user",
		route: userRoutes,
	},
	{
		path: "/address",
		route: addressRoutes,
	},
	{
		path: "/product",
		route: productRoutes,
	},
	{
		path: "/order",
		route: orderRoutes,
	},
	{
		path: "/auth",
		route: authRoutes,
	},
	{
		path: "/profile",
		route: profileRoutes,
	},
];
