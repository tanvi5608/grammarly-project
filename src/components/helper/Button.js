import React from 'react';
import "./Button.css";

const Button = (props) => {
    let btnClass = props.classList ? "button " + props.classList : "button";
    return(
        <a href={props.link} className={btnClass}>
            {props.children}
        </a>
    )
}

export default Button;