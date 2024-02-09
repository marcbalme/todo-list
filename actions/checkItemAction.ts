"use server";

import prisma from "@/lib/prisma";

export const checkItemAction = async (id: string, done: boolean) => {
    console.log("id", id);

    await prisma.todo.update({
        where: {
            id,
        },
        data: {
            done: !done,
        },
    });
};
