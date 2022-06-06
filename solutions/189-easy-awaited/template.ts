/**
 * 在type中也可以实现的type递归
 */

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
	? P extends Promise<any>
		? MyAwaited<P>
		: P
	: never;
