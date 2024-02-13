"use client";

import { checkItem } from "@/actions/check-item";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { Ban, Check } from "lucide-react";
import { toast } from "sonner";

interface CheckItemFormProps {
    itemId: string;
    done: boolean;
}

export const CheckItemForm = ({ itemId, done }: CheckItemFormProps) => {
    const { execute, isLoading } = useAction(checkItem, {
        onSuccess: () => {
            toast.success("Status updated!");
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onSubmit = () => {
        execute({
            id: itemId,
            done,
        });
    };

    return (
        <form action={onSubmit}>
            <Button
                type="submit"
                variant="outline"
                size="icon"
                className="mr-4"
                disabled={isLoading}
            >
                {done ? (
                    <Check height={20} color="#25782d" />
                ) : (
                    <Ban height={20} color="#eb0000" />
                )}
            </Button>
        </form>
    );
};
