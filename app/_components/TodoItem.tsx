import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteItemForm } from "./DeleteItemForm";
import { CheckItemForm } from "./CheckItemForm";

export const TodoItem = ({ item }: any) => {
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
