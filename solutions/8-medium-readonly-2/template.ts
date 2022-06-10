type MyReadonly2<T, K = keyof T> = {
  readonly [k in keyof T as k extends K ? k : never] : T[k]
} & {
  [k in keyof T as k extends K ? never : k] : T[k]
}
