"use server";

import prisma from "@/lib/prisma";

export const addListItemAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    await prisma.todo.create({
        data: {
            title,
        },
    });
};
