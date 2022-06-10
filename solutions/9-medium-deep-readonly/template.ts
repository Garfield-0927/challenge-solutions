type DeepReadonly<T> = {
	readonly [k in keyof T]: T[k] extends string | number | boolean | Function
		? T[k]
		: DeepReadonly<T[k]>;
};
