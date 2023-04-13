import React, {useContext }from "react";
import { applicationContext } from "../../context";
import "./input.scss"

export const Input = () => {
    const { input, setInput } = useContext(applicationContext);
  console.log(input)

    return(
        <div className="div-input">
            <input type="text" placeholder="search" onChange={(e) => setInput(e.target.value)} id="search" value={input} />
        </div>
    )
}