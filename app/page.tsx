import { AddItemForm } from "./_components/AddItemForm";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 max-w-screen-sm mx-auto">
            <AddItemForm />
        </main>
    );
}
