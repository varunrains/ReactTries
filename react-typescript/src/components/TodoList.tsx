import React from 'react';
import Todo from '../models/todo';
import classes from './TodoList.module.css';


const TodoList: React.FC<{ item: Todo, onRemoveTodo: (event: React.MouseEvent) => void }> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.item.text}</li>
        );
};

export default TodoList;