import React, { useContext } from "react";
import "./section.scss";
import {SectionCard} from "../SectionCard";
import { applicationContext } from "../../context";

export const Section = () =>{
    const {myTeam} = useContext(applicationContext);
    const unique = [...new Set(myTeam)]
    return(
        <div className="div-section">
            <h2>My Heroes</h2>
            {unique.map((element) => (
            <SectionCard hero={element} />
            ))}
        </div>
    );
};