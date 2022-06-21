type isNever<T> = [T] extends [never] ? true : false;

type Permutation<T, U = T> = isNever<T> extends true
	? []
	: T extends `${infer P}`
	? [P, ...Permutation<Exclude<U, P>>]
	: [];

let b: isNever<false>;
let a: Permutation<"A" | "B" | "C">;
let aa: Permutation<"B" | "C">;
