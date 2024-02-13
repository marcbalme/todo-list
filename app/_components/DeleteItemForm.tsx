"use client";

import { deleteItem } from "@/actions/delete-item";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { Delete } from "lucide-react";
import { toast } from "sonner";

interface DeleteItemFormProps {
    itemId: string;
}

export const DeleteItemForm = ({ itemId }: DeleteItemFormProps) => {
    const { execute, isLoading } = useAction(deleteItem, {
        onSuccess: () => {
            toast.success("Item deleted!");
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onSubmit = () => {
        execute({
            id: itemId,
        });
    };

    return (
        <form action={onSubmit}>
            <Button
                type="submit"
                variant="destructive"
                size="icon"
                disabled={isLoading}
            >
                <Delete height={20} />
            </Button>
        </form>
    );
};
