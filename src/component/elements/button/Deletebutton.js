import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import "./index.css"; // Assurez-vous d'importer votre fichier CSS pour les styles
// import axios from 'axios';

const DeleteComponent = ({ id, deletetable,redirect }) => {

  const handleClick = async () => {
    try {
      let request = "https://cropfarmback-production.up.railway.app/";
      request+= deletetable;
      request+=id;
      // Mettez à jour la valeur 'corbeille' à 1 en utilisant une requête PUT
      const response = await axios.put(request, {
          corbeille: 1
      });

      console.log("La valeur 'corbeille' a été mise à jour :", response.data);
      window.location.href = redirect;
      // Si vous avez besoin de mettre à jour l'état ou de déclencher d'autres actions après la mise à jour, faites-le ici
      
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la valeur 'corbeille' :", error);
    }
  };

  return (
    <button className="delete-button" onClick={handleClick}>
      <div className="delete-icon">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </button>
  );
};

export default DeleteComponent;
