"use client";

import { deleteListItemAction } from "@/actions/deleteListItemAction";
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import { useRouter } from "next/navigation";

export const DeleteItemForm = async ({ itemId }: { itemId: string }) => {
    const router = useRouter();
    const onSubmit = async () => {
        await deleteListItemAction(itemId);

        router.refresh();
    };
    return (
        <form onSubmit={onSubmit}>
            <Button type="submit" variant="destructive" size="icon">
                <Delete height={20} />
            </Button>
        </form>
    );
};
