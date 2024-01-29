import React, { useEffect, useState } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css";
import CardPhoto from "../../card/card-photo/CardPhoto.js";

const TerrainBoard = () => {
  const [terrainsValides, setTerrainsValides] = useState([]);

  useEffect(() => {
    // Récupérer le nom d'utilisateur depuis le localStorage lors du montage du composant
    let storedId = localStorage.getItem("userId");
    let request = "https://cropfarmback-production.up.railway.app/terrains/proprietaire/valid/";
    request += storedId;
    
    console.log(request);

    axios.get(request)
    .then(response => {
      // Mettez à jour l'état avec les données récupérées depuis l'API
      setTerrainsValides(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des terrains non valides :', error);
    });

    
  }, []);

  return (
      <div className="container">
      <div className="background-terrain-card" >

      <div className="contain-card-pic">
      {terrainsValides.map(terrain => (
          <CardPhoto id={terrain.id_terrain} desc={terrain.desc_terrain} coord={terrain.coord_location}/>
      ))}
      </div>

      </div>
      
      <div className="greeting" >      
      <h1 className="title">Liste de vos terrains validés</h1>
        <p className="subtitle">Voici les terrains qui sont en votre possession cher propriétaire</p>
      </div>
    </div>
  );

}

export default TerrainBoard;
