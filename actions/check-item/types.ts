import { z } from "zod";

import { ActionState } from "@/lib/safe-action";

import { CheckItem } from "./schema";

export type InputType = z.infer<typeof CheckItem>;
export type ReturnType = ActionState<InputType, null>;
