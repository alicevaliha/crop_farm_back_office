import React from 'react';
import './index.css'; 
import Deletebutton from "../button/Deletebutton.js"
const ListInfo = () => {
  return (
    <div className="list-info">
      <div className="plant-image">
        <img src="/assets/plant.jpg" alt="Plant" />
      </div>
      <div className="plant-name">Nom de la plante</div>
      <div className="info">Une info</div>

      <div className="plant-name">Récoltes</div>
      <div className="info">Une info</div>

      <div className="plant-name">Ventes</div>
      <div className="info">Une info</div>
      <Deletebutton/>
    </div>
  );
};

export default ListInfo;
