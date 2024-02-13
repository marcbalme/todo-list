import { z } from "zod";

import { ActionState } from "@/lib/safe-action";

import { DeleteItem } from "./schema";

export type InputType = z.infer<typeof DeleteItem>;
export type ReturnType = ActionState<InputType, null>;
