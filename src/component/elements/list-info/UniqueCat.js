import React from 'react';
import './index.css'; 
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
