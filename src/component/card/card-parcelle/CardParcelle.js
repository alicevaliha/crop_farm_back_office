import React from "react";
import "./index.css"; // Importez votre fichier CSS
import MoreButton from "../../elements/button/MoreButton";

const CardParcelleComponent = ({id,culture,terrain,proprietaire}) => (
    <>
  <div className="card-parcelle-container">
    <div className="text-container-parcelle">
      <div className="rendement-text">Parcelle de {proprietaire} du terrain ID {terrain}  </div>
      <div className="id-parcelle-text">ID Parcelle {id} </div>
      <div className="types-cultures-text">Types de cultures : {culture} </div>
      
    </div>
    <div className="morebuttonparcelle">

    <MoreButton/>
    </div>
  </div>
  
   <div className="card-parcelle-filter"></div>
   </>
);

export default CardParcelleComponent;
