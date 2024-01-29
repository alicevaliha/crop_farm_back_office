import React, { useState, useEffect } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css";
import Ad from "../../elements/ad/Ad";
import Listbox from "../../card/listbox/Listbox.js"
import Quotes from "../../elements/quote/Quote.js";
import  Form from "../../form/Form.js"
import LessPlant from "../../elements/list-info/LessPlant.js";
import MoreButton from "../../elements/button/MoreButton.js";
import CardValid from "../../card/card-photo/CardValid.js";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TerrainBoard = () => {

  const location = useLocation();
  const [dataterrain, setDataterrain] = useState("");

 
  useEffect(() => {

    const searchParams = new URLSearchParams(location.search);
    const idterrain = searchParams.get('idterrain');
    console.log(idterrain+" voilà le id haha ");

    let request = "https://cropfarmback-production.up.railway.app/terrains/";
    request += idterrain;
    console.log(request);
    axios.get(request)
    .then(response => {
      // Mettez à jour l'état avec les données récupérées depuis l'API
      setDataterrain(response.data);
      console.log(dataterrain.longueur);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des terrains non valides :', error);
    });

    
  }, []);

  return (
    <div className="container">
      <div className="background-terrain-card" >
        <div className="contain-card-pic">
          <CardValid desc={dataterrain.desc_terrain} coord={dataterrain.coord_location}
            id={dataterrain.id_terrain} surface={dataterrain.longueur*dataterrain.largeur}
          />
        </div>
      </div>
    
      <div className="greeting" >      
        <h1 className="title">Voulez vous valider ce terrain?</h1>
        <p className="subtitle">réflechir...réfléchir...</p>
      </div>
    </div>
  );
};

export default TerrainBoard;
