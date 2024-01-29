import React from "react";
import "./index.css"; // Importez votre fichier CSS
import BtnprimaryComponent from "../elements/button/BtnPrimary.js";
import SelectComponent from "../elements/input/Select.js";
const Form = () => {
  return (
    <>
    <div className="float-bloc-list-form">
        <div className="greet" >
            <div className="title">Ajouter une nouvelle plante à la catégorie</div>
            <div className="subtitle">Soyez inspirés donnez nous un nom!</div>
        </div>
        <SelectComponent name="plante" obj="plante"/>
        <BtnprimaryComponent/>
    </div>
    
    </>
  );
};

export default Form;
