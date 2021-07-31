import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo = () => {
    //Need to assign the default value,other wise it will be a error.
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        //To handle null value we can use '?' like in C#
        //'?' try to get the value
        //'!' I am sure that there will be value always (not null)
        const enteredText = todoTextInputRef.current?.value;

        if (enteredText?.trim().length === 0) {
            //throw an error
            return;
        }

        todosCtx.addTodo((!!enteredText && enteredText) || '');
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label>Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button> Add todo </button>
            </form>
        );
};

export default NewTodo;