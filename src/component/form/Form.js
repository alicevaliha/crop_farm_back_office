import React from "react";
import "./index.css"; // Importez votre fichier CSS
import Input from "../elements/input/Input.js";
import BtnprimaryComponent from "../elements/button/BtnPrimary.js";
const Form = ({type,objname}) => {
  return (
    <>
    <div className="float-bloc-list">
        <div className="greet" >
            <div className="title">Insérer une nouvelle {objname}</div>
            <div className="subtitle">Soyez inspirés donnez nous un nom!</div>
        </div>
        <Input type={type} placeholder="Nom"/>
        <BtnprimaryComponent holder="Créer"/>
    </div>
    
    </>
  );
};

export default Form;
