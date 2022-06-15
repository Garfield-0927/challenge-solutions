type TrimRight<T extends string> = T extends `${infer P}${StrWithSpace}` ? TrimRight<P> : T
