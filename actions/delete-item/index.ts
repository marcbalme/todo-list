"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

import { DeleteItem } from "./schema";
import { InputType, ReturnType } from "./types";
import { safeAction } from "@/lib/safe-action";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { id } = data;

    if (!id) {
        return {
            error: "No id provided.",
        };
    }

    try {
        await prisma.todo.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        return {
            error: "Failed to delete.",
        };
    }

    revalidatePath("/");
    return {
        data: null,
    };
};

export const deleteItem = safeAction(DeleteItem, handler);
