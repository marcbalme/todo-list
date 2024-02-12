import { z } from "zod";
import { Todo } from "@prisma/client";

import { ActionState } from "@/lib/safe-action";

import { CreateItem } from "./schema";

export type InputType = z.infer<typeof CreateItem>;
export type ReturnType = ActionState<InputType, Todo>;
