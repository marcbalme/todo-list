import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteItemForm } from "./DeleteItemForm";
import { CheckItemForm } from "./CheckItemForm";
import { Todo } from "@prisma/client";

export const TodoItem = ({ item }: Todo) => {
    return (
        <li>
            <Card>
                <CardHeader>
                    <CardTitle className={item.done && "line-through"}>
                        {item.title}
                    </CardTitle>
                </CardHeader>
                <CardFooter>
                    <CheckItemForm itemId={item.id} done={item.done} />
                    <DeleteItemForm itemId={item.id} />
                </CardFooter>
            </Card>
        </li>
    );
};
