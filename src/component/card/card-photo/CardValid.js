import React from "react";
import "./index.css";
import MoreButton from "../../elements/button/MoreButton";
import BtnprimaryComponent from "../../elements/button/BtnPrimary";
import axios from 'axios';

const CardPhoto = ({ style, desc, coord, surface, id }) => {
  const handleButtonClick = () => {
    // Effectuer la requête PUT ici
    const newstate = 1;
    const requestUrl = `https://cropfarmback-production.up.railway.app/terrains/${id}`; // Assurez-vous de remplacer "votre_url_endpoint" par l'URL de votre endpoint
    console.log(requestUrl);
    axios.put(requestUrl, {
      corbeille: newstate // Inclure la nouvelle description dans le corps de la requête PUT
    })
    .then(response => {
      // Gérer la réponse de la requête PUT ici
      console.log("Requête PUT réussie :", response.data);
      window.location.href = "/terrain";
    })
    .catch(error => {
      // Gérer les erreurs de la requête PUT ici
      console.error("Erreur lors de la requête PUT :", error);
    });
  };

  return (
    <div className="card-container-pic-valid" style={style}>
      <img
        className="card-image-pic"
        src="/assets/ad2.jpg"
        alt="Terrain"
      />
      <MoreButton />
      <div className="card-content-pic">
        <div className="card-title-pic valid">Terrain {id}</div>
        <div className="card-description-pic valid">{desc}</div>
        <div className="card-info-pic valid">{coord}</div>
        <div className="card-info-pic valid">{surface}</div>
      </div>
      <BtnprimaryComponent holder="Valider création du terrain" onclick={handleButtonClick} />
    </div>
  );
};

export default CardPhoto;
