import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import "./index.css";
import Ad from "../../elements/ad/Ad";
import Quotes from "../../elements/quote/Quote.js";
import UpdatingForm from "../../form/UpdatingForm.js";
import ListePlante from "../../elements/list-info/ListePlante.js";
import Deletebutton from "../../elements/button/Deletebutton.js"

const CategorieBoard = () => {
  const location = useLocation();
  const [dataCategorie, setDataCategorie] = useState({});

  const searchParams = new URLSearchParams(location.search);
  // eslint-disable-next-line
    const idCategorie = searchParams.get('idcategorie');

  useEffect(() => {
    
    
    axios.get(`https://cropfarmback-production.up.railway.app/categories-culture/${idCategorie}`)
      .then(response => {
        setDataCategorie(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Erreur lors de la récupération des catégories de plantes :', error);
      });
  }, [location.search]);

  return (
    <div className="container">
      <div className="background-board">
        <div className="list-info-cat">
          <div className="plant-image-cat">
            <img src="/assets/ad2.jpg" alt="Plant" />
          </div>
          
          <div className="cat-name" style={{ marginLeft: "-15%" }}>Nom de la catégorie: {dataCategorie.nomcategorie}</div>
          <div className="info-cat" style={{ marginLeft: "-133%" }}>Id catégorie: {dataCategorie.id_categorie_culture}</div>
          <Deletebutton id={idCategorie} deletetable="categories-culture/" redirect="/categories"/>
        </div>
        <div className="grid-container-det">
          <div className="item"><Ad/></div>
          <div className="item"><Quotes/></div>
          <div className="item"><UpdatingForm type="text" toupdate="nom de la catégorie" id={dataCategorie.id_categorie_culture} paramname="nomcategorie" valuetype="string" path="/categories-culture" redirection="/detailcategorie?idcategorie="/></div>
          {/* <div className="item"><FormList /></div> */}
        </div>
        <ListePlante idcategorie={idCategorie}/>
      </div>
    </div>
  );
};

export default CategorieBoard;
