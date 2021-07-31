import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

//Props also has the inbuilt key values (children) which will become cumbersome,
//with built in and custom keys
//We can use the Generic type
//React.FC -- React Function component which is a coming from typed file.
//Created class can also be used to check the Type and also to initialize
const Todos = () => {
   const todosCtx =  useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {
            todosCtx.items.map(item => <TodoList item={item}
            key={item.id}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />)}
        </ul>
    );
};

//MOre descriptive

export default Todos;