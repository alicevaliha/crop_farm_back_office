import React from 'react';
import './index.css'; 
import Deletebutton from "../button/Deletebutton.js"
const ListePlantePrim = ({nom,pv,pa,rendement,id}) => {
  return (
    <div className="list-info detail">
      <div className="plant-image">
        <img src="/assets/plant.jpg" alt="Plant" />
      </div>
      <div className="plant-name">Nom de la plante</div>
      <div className="info">{nom}</div>

      <div className="plant-name">Prix de vente</div>
      <div className="info">{pv}</div>

      <div className="plant-name">Prix d'achat</div>
      <div className="info">{pa}</div>

      <div className="plant-name">Rendement</div>
      <div className="info">{rendement}</div>
      <Deletebutton id={id} deletetable="plantes/" redirect="/plantes"/>
    </div>
  );
};

export default ListePlantePrim;
