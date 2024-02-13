import { z } from "zod";

export const CheckItem = z.object({
    id: z.string(),
    done: z.boolean(),
});
