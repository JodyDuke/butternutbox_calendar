import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.styles}>{props.text}</button>
    )
}

export default Button