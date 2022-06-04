/**
 * Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */

type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}
