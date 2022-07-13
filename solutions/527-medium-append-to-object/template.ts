type AppendToObject<T, U extends string, V> = {
  [k in (keyof T | U)]: k extends keyof T ? T[k] : V
};