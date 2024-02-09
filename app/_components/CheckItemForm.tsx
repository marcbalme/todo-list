"use client";

import { checkItemAction } from "@/actions/checkItemAction";
import { Button } from "@/components/ui/button";
import { Ban, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export const CheckItemForm = ({ itemId, done }: any) => {
    const router = useRouter();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await checkItemAction(itemId, done);
        router.refresh();
    };

    return (
        <form onSubmit={onSubmit}>
            <Button
                type="submit"
                variant="outline"
                size="icon"
                className="mr-4"
            >
                {!done ? (
                    <Check height={20} color="#25782d" />
                ) : (
                    <Ban height={20} color="#eb0000" />
                )}
            </Button>
        </form>
    );
};
