import { Equal } from "@type-challenges/utils";

export type Includes<T extends any[], U> = T extends [infer P, ...infer Q]
	? Equal<P, U> extends true
		? true
		: Includes<Q, U>
	: false;
