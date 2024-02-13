import { Suspense } from "react";
import { AddItemForm } from "./_components/AddItemForm";
import { TodoList } from "./_components/TodoList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-6 max-w-screen-sm mx-auto">
            <AddItemForm />
            <Suspense fallback={<TodoList.Skeleton />}>
                <TodoList />
            </Suspense>
        </main>
    );
}
