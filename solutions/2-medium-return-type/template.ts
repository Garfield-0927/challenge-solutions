/**
 * Constructs a type consisting of the return type of function Type.
 *
 * type T0 = ReturnType<() => string>;
 * equals
 * type T0 = string
 *
 *
 * key: infer 关键字
 */
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
