import React, { useState, useEffect } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css";
import CardValid from "../../card/card-photo/CardValid.js";
import { useLocation } from "react-router-dom";

const TerrainBoard = () => {

  const location = useLocation();
  const [dataterrain, setDataterrain] = useState("");

 
  useEffect(() => {
    // eslint-disable-next-line
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
      // eslint-disable-next-line
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
