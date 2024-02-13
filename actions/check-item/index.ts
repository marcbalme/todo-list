"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

import { CheckItem } from "./schema";
import { InputType, ReturnType } from "./types";
import { safeAction } from "@/lib/safe-action";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { id, done } = data;

    if (!id) {
        return {
            error: "No id provided.",
        };
    }

    try {
        await prisma.todo.update({
            where: {
                id,
            },
            data: {
                done: !done,
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

export const checkItem = safeAction(CheckItem, handler);
