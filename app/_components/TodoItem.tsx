import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const TodoItem = ({ item }: any) => {
    return (
        <li>
            <Card>
                <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </li>
    );
};
