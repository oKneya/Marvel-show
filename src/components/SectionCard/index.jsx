import React from "react";
import "./sectioncard.scss"

export const SectionCard = (props) => {
    return (
        <div className="div-section-card">
            <img src={`${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`}
            alt="" />
            <h3>{props.hero.name}</h3>
        </div>
    )
}