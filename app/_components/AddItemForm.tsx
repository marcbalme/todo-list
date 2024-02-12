"use client";

import { createItem } from "@/actions/create-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAction } from "@/hooks/use-action";
import { Todo } from "@prisma/client";
import { useRef } from "react";
import { toast } from "sonner";

export const AddItemForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { execute, isLoading } = useAction(createItem, {
        onSuccess: (data: Todo) => {
            toast.success(`item ${data.title} added!`);
            formRef.current?.reset();
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        execute({
            title,
        });
    };
    return (
        <form
            ref={formRef}
            action={onSubmit}
            className="flex items-center gap-4 w-full m-x-auto"
        >
            <Input name="title" type="text" placeholder="Add a new item" />
            <Button
                disabled={isLoading}
                type="submit"
                className="bg-primary text-white rounded-md px-3 py-2"
            >
                {isLoading ? "Adding..." : "Add"}
            </Button>
        </form>
    );
};
