type LengthOfString<
	S extends string,
	U extends any[] = []
> = S extends `${infer P}${infer Q}`
	? LengthOfString<Q, [P, ...U]>
	: U["length"];
