import React from "react";
import "./index.css"; // Importez votre fichier CSS
import DeleteButton from "../../elements/button/Deletebutton.js"
import LessPlant from "../../elements/list-info/LessPlant.js";

const ListPlante = () => {
  return (
    <div className="float-bloc-list">
        <div className="greet" >
            <div className="title">Informations sur vos plantes</div>
            <div className="subtitle">Une info</div>
        </div>
        <ul>
            <li>
                <LessPlant/>
            </li>
            <br></br>
            <li>
                <LessPlant/>
            </li>
            <br></br>
            <li>
                <LessPlant/>
            </li>
        </ul>
    </div>
  );
};

export default ListPlante;
