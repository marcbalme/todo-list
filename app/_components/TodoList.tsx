import prisma from "@/lib/prisma";
import { TodoItem } from "./TodoItem";

export const TodoList = async () => {
    const todos: Array<any> = await prisma.todo.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    if (!todos) {
        return <div>No todo</div>;
    }

    return (
        <ul className="mt-8">
            {todos.map((todo) => (
                <TodoItem key={todo.id} item={todo} />
            ))}
        </ul>
    );
};
