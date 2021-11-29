import React from "react";
import { TodoItem } from "./TodoItem";
export function TodoList() {
    return(
        <ul>
            {listas.map((lista) => (
                <TodoItem key={lista.id} lista={lista} />
            ))}
        </ul>
    );
}