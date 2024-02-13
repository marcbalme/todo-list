import prisma from "@/lib/prisma";
import { TodoItem } from "./TodoItem";
import { Todo } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

const TodoList = async () => {
    const todos: Array<Todo> = await prisma.todo.findMany({
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

TodoList.Skeleton = function SkeletonTodoList(): JSX.Element {
    return (
        <div className="flex flex-col pt-8">
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
            <Skeleton className="h-14 w-full p-2 mb-4" />
        </div>
    );
};

TodoList.displayName = "TodoList";

export { TodoList };
