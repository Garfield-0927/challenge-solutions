declare function PromiseAll<T extends unknown[]>(
	values: readonly [...T]
): Promise<
	T extends [...infer P]
		? {
				[k in keyof P]: P[k] extends Promise<infer Q> ? Q : P[k];
		  }
		: []
>;

const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest1 = PromiseAll([1, 2, 3] as const);

type TestType<T = []> = T extends [...infer P]
	? {
			[k in keyof P]: P[k] extends Promise<infer Q> ? Q : P[k];
	  }
	: [];

let a: TestType<Readonly<[1, 2, Promise<3>]>>;
