import React, { useEffect, useState } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css";
import Ad from "../../elements/ad/Ad";
import Listbox from "../../card/listbox/Listbox.js"
import Quotes from "../../elements/quote/Quote.js";
import  Form from "../../form/Form.js"
import LessPlant from "../../elements/list-info/LessPlant.js";
import MoreButton from "../../elements/button/MoreButton.js";
import CardPhoto from "../../card/card-photo/CardPhoto.js";
import CardParcelleComponent from "../../card/card-parcelle/CardParcelle.js";

const ParcelleBoard = () => {
  
  const [myparcelles, setMyparcelles] = useState([]);

  useEffect(() => {

    let storedId = localStorage.getItem("userId");
    let request = "https://cropfarmback-production.up.railway.app/parcelles/proprietaires/";
    request += storedId;
    
    console.log(request);

    axios.get(request)
    .then(response => {
      // Mettez à jour l'état avec les données récupérées depuis l'API
      setMyparcelles(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des terrains non valides :', error);
    });
    
  }, []);

    return (
      <div className="container">
      <div className="background-terrain-card parcelles" >
      {myparcelles.length > 0 ? (
        myparcelles.map((parcelle, index) => (
          <CardParcelleComponent key={index} parcelle={parcelle} id={parcelle.id_parcelle} terrain={parcelle.id_terain} culture={parcelle.nom_plantes} proprietaire={parcelle.nom} />
        ))
      ) : (
        <p className="subtitle">Oups aucune parcelle ? Rendez vous dans l'application pour en créer!</p>
      )}
      </div>
      
      <div className="greeting" >      
      <h1 className="title">Liste de vos parcelles</h1>
        <p className="subtitle">Visualisez vos parcelles ici !! 
        Argh et si vous téléchargiez l'application pour plus d'actions sur vos parcelles? 🫣</p>
      </div>
    </div>
  );
}
export default ParcelleBoard;
