import React from 'react';
import './index.css'; 
import Deletebutton from "../button/Deletebutton.js"
import TerrainButton from '../button/TerrainButton.js';
import DetailsTerrain from '../button/DetailsTerrain.js';
const ListCategorie = () => {
  return (
    <div className="list-info-cat">
      <div className="plant-image-cat">
        <img src="/assets/ad2.jpg" alt="Plant" />
      </div>
      <div className="cat-name">Nom de la categorie</div>
      <div className="info-cat">Id categrie</div>
    </div>
  );
};

export default ListCategorie;
