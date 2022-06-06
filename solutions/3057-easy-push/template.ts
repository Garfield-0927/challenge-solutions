type Push<T extends any[], U> = T extends [...infer P] ? [...P, U] : unknown
