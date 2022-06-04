/**
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 * 
 * interface Todo {
 *   title: string;
 *   description: string;
 *   completed: boolean;
 * }
 *  
 * type TodoPreview = Pick<Todo, "title" | "completed">;
 * equals
 * type TodoPreview = {
 *  title: string
 *  completed: boolean
 * }
 * 
 * 1. 满足K是T的key：K继承于T的key，keyof关键字, extends 关键字
 * 2. 返回类型的key值在K中， in关键字
 */

type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}
