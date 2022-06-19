type Replace<
	S extends string,
	From extends string,
	To extends string
> = From extends ""
	? S
	: S extends `${infer prev}${From}${infer post}`
	? `${prev}${To}${post}`
	: S;
