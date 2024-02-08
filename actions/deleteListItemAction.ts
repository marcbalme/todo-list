"use server";

import prisma from "@/lib/prisma";

export const deleteListItemAction = async (id: string) => {
    await prisma.todo.delete({
        where: {
            id,
        },
    });
};
