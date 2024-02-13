import { z } from "zod";

export const DeleteItem = z.object({
    id: z.string(),
});
