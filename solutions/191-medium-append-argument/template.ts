type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
	...args: infer P
) => infer Q
	? (...args: [...P, A]) => Q
	: never;
