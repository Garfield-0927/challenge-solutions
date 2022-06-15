type StrWithSpace = ' ' | '\n' | '\t'
type TrimLeft<T extends string> = T extends `${StrWithSpace}${infer P}` ? TrimLeft<P> : T