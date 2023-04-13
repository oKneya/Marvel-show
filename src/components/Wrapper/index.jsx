import React, {useContext} from "react";
import "./wrapper.scss";
import {Section } from "../Section";
import {Input} from "../Input";
import Card from "../Card";
import { applicationContext } from "../../context";

export const Wrapper = (props) => {
  const { characters } = useContext(applicationContext);
  return (
    <div className="div-wrapper">
      <div className="content-div">
        <Input />
        <div className="card-wrapper">
          {characters?.map((element) => (
            <Card char={element} />
          ))}
        </div>
      </div>
      <Section />
    </div>
  );
};

