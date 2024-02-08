"use client";

import { addListItemAction } from "@/actions/addListItemAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export const AddItemForm = () => {
    const router = useRouter();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        await addListItemAction(formData);

        router.refresh();
    };
    return (
        <form
            onSubmit={onSubmit}
            className="flex items-center gap-4 w-full m-x-auto"
        >
            <Input name="title" type="text" placeholder="Add a new item" />
            <Button
                type="submit"
                className="bg-primary text-white rounded-md px-3 py-2"
            >
                Add
            </Button>
        </form>
    );
};
