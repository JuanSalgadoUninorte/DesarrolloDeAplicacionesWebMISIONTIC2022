import React, { Fragment, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";
export function App(){
    const [listas, setListas] = useSatate([
        {id: 1, task: "Tarea ", completed: false},
    ]);
    const taskRef = useRef();
    const handleTaskAdd = () => {

    };
    
    return (
    <Fragment>
        <TodoList listas={listas} />
        <input type="text" ref={taskRef} placeholder="Nueva Tarea" />
        <button onClick={handleTaskAdd}>+</button>
        <button>-</button>
    </Fragment>
    );
}