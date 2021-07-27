import React from 'react';
//This is required if you are using the CSS modules
import classes from './Card.module.css'

const Card = props => {
    return (<div className={`${classes.card} ${props.className}`}>{props.children}</div>);
}

export default Card;