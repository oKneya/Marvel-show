import React, {useContext} from "react";
import "./card.scss";
import { Button } from "../Button";
import { applicationContext } from "../../context";

const Card = (props) => {
   const {showClickedChar, setMyTeam, myTeam} = useContext(applicationContext);
 return (
    <div className="div-card">
      <h4>{props.char.name}</h4>
      <img src={`${props.char.thumbnail.path}.${props.char.thumbnail.extension}`} alt="" />
      <div className="div-button">
         <Button title="Info" method={()=> showClickedChar(props.char)}/>
         <Button title="Add" method={() => {setMyTeam([...myTeam, props.char])}}/>
      </div>
    </div>
 )
}

export default Card;