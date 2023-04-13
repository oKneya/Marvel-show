import React, { useContext } from "react";
import Header from "../../components/Header";
import { applicationContext } from "../../context";
import "./singlepage.scss";

export const SinglePage = (props) => {
    return (
        <div className="div-single-page"> 
        <div className="headerr">
            <Header goBack = {props.goBack}/>
        </div>
        <img src={`${props.char.thumbnail.path}.${props.char.thumbnail.extension}`} alt=""/>
        <div className="text">
          <h2>{props.char.name}</h2>
         <p>{props.char.description}</p>
        </div>
        </div>
    )
}