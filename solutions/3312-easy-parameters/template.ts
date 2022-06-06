// Parameters<T> 获取一个函数的参数类型

type MyParameters<T extends (...args: any[]) => any> = T extends ( ...args: infer P ) => any ? P : unknown