import React from "react";
import "./button.scss"

export const Button = (props) => {
    return(
        <button className="button" onClick={props.method}>{props.title}</button>
    )
}