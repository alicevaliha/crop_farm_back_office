import React from "react";
import "./index.css"; // Importez votre fichier CSS
import Listinfo from "../../elements/list-info/ListInfo.js";

const Graphbox = () => {
  return (
    <div className="float-bloc-list">
        <div className="greet" >
            <div className="title">Informations sur vos plantes</div>
            <div className="subtitle">appuyez sur le X afin de supprimer votre plante</div>
        </div>
        <ul>
            <li>
                <Listinfo/>
            </li>
            <br></br>
            <li>
                <Listinfo/>
            </li>
            <br></br>
            <li>
                <Listinfo/>
            </li>
        </ul>
    </div>
  );
};

export default Graphbox;
