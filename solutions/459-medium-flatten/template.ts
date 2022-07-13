type Flatten<T extends any[]> = T extends [infer P, ...infer Q]
	? P extends any[]
		? [...Flatten<P>, ...Flatten<Q>]
		: [P, ...Flatten<Q>]
	: T;
