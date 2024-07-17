// Exclude keys from user
function exclude<User, Key extends keyof User>(
	user: User,
	keys: key[]
): Omit<User, Key> {
	return Object.fromEntries(
		Object.entries(user).filter(([key]) => !keys.includes(key))
	);
}

export default exclude;
