import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Delete } from "lucide-react";
import { DeleteItemForm } from "./DeleteItemForm";

export const TodoItem = ({ item }: any) => {
    return (
        <li>
            <Card>
                <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                    <DeleteItemForm itemId={item.id} />
                </CardFooter>
            </Card>
        </li>
    );
};
