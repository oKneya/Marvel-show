import React from "react";
import "./header.scss"

const Header = (props) => {;
    return (
        <div className="div-header">
            <h1 onClick={props.goBack}>Marvel Hero Alliance </h1>
        </div>
    )
}

export default Header