type Chainable<T = {}> = {
	option<U extends string, V>(
		key: U extends keyof T ? never : U,
		value: V
	): Chainable<T & { [k in U]: V }>;
	get(): T;
};