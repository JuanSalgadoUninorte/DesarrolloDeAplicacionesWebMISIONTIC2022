import React from "react";

export function TodoItem({ lista }) {
    const { id, task, completed } = lista;
    return <li>{task}</li>
}