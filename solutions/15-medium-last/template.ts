type Last<T extends any[]> = T extends [...infer Q, infer P] ? P : never;
