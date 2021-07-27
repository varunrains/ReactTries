//The below import is not required this is just for practise
import React, { useState } from 'react';
import Card from '../UI/Card';
//For non-javascript files you need to provide the full file extension of the file.
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        //This will prevent from submitting the form to the server by default and which
        //will also prevent from reloading the page once the button is clicked
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'

            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age.'

            });
            return;
        }

        props.onAddUser({
            name: enteredUserName, age: enteredAge, id: Math.random().toString()
        });

        setEnteredAge('');
        setEnteredUserName('');
    }

    const userNameChangeHandler = event => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    };

    //htmlFor is used for screen readers to better access your rendered elements.
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username </label>
                <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User </Button>
            </form>
            </Card>
            </div>
        );

};

export default AddUser;