type MyOmit<T, K extends keyof T> = {
	[k in MyExclude<keyof T, K>]: T[k];
};
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
	completed: false,
};
