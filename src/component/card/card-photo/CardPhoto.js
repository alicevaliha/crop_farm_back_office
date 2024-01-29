import React from "react";
import "./index.css"; // Importez votre fichier CSS
import MoreButton from "../../elements/button/MoreButton";

const CardPhoto = ({ style ,id,desc,coord}) => (
    
    <div className="card-container-pic" style={style}>

   
    <img
      className="card-image-pic"
      src="/assets/ad2.jpg"
      alt="Terrain"
    />
     <MoreButton/>
    <div className="card-content-pic">
      <div className="card-title-pic">Terrain {id}</div>
      
      <div className="card-description-pic">{desc}</div>
      <div className="card-info-pic">{coord}</div>
    </div>
  </div>
);

export default CardPhoto;
