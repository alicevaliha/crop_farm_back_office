import React from 'react';
import './index.css'; 
const ListCategorie = ({nom,id}) => {
  return (
    <div className="list-info-cat">
      <div className="plant-image-cat">
        <img src="/assets/ad2.jpg" alt="Plant" />
      </div>
      <div className="cat-name">Catégorie {nom} </div>
      <div className="info-cat">Id {id}</div>
      <form action="/detailcategorie"> 
          <input type="hidden" value={id} name="idcategorie"/>
          <button className="details-terrain-button" type="submit">
          <div className="background-terrain"></div>
          <div className="arrow-terrain"></div>
          </button>
        </form>
    </div>
  );
};

export default ListCategorie;
