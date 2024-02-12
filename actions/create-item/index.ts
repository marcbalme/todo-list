"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

import { CreateItem } from "./schema";
import { InputType, ReturnType } from "./types";
import { safeAction } from "@/lib/safe-action";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { title } = data;
    let todo;

    try {
        todo = await prisma.todo.create({
            data: {
                title,
            },
        });
    } catch (error) {
        return {
            error: "Failed to create.",
        };
    }

    revalidatePath("/");
    return { data: todo };
};

export const createItem = safeAction(CreateItem, handler);
