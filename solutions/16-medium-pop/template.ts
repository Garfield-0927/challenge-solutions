type Pop<T extends any[]> = T extends [...infer prev, infer P] ? prev : never;
