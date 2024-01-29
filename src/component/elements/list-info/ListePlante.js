import React, { useState, useEffect } from "react";
import axios from 'axios';
import './index.css'; 

const ListInfo = ({ idcategorie }) => {
  const [dataCategorie, setDataCategorie] = useState([]);

  useEffect(() => {
    let request = `https://cropfarmback-production.up.railway.app/plantes/categories/${idcategorie}`;
    axios.get(request)
      .then(response => {
        setDataCategorie(response.data);
      })
      .catch(error => {
        console.log('Erreur lors de la récupération des catégories de plantes :', error);
      });
  }, [idcategorie]);

  return (
    <div className="float-bloc-list">
      <div className="greet">
        <div className="title">Liste des plantes de la catégorie *</div>
        <div className="subtitle">Les belles plantes ^^</div>
        <div className="subtitle">*même les plantes que l'on aime plus méritent un peu d'attention alors même désactivées 
        les voici toutes pour vous !! </div>
      </div>

      <br />

      <div className="list-info">
        {dataCategorie.length > 0 ? (
          dataCategorie.map((plante, index) => (
            <div key={index} className="plant-info">
              <div className="plant-image">
                <img src="/assets/plant.jpg" alt="Plant" />
              </div>
                {plante.nom_plante}
              {/* <Deletebutton/> */}
            </div>
          ))
        ) : (
          <div>Aucune plante répertoriée pour cette catégorie ^^.</div>
        )}
      </div>
    </div>
  );
};

export default ListInfo;
