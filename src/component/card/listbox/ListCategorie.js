import React, { useState, useEffect } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css"; // Importez votre fichier CSS
import ListCategorie from "../../elements/list-info/ListCategorie.js";

const ListeCategorie = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let request2 = "https://cropfarmback-production.up.railway.app/api/categorie/cultures";
    axios.get(request2)
      .then(response => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Erreur lors de la récupération des catégories de plantes :', error);
      });
  }, []);
 
  return (
    <>
    <div className="float-bloc-list">
        <div className="greet" >
            <div className="title">Toutes les catégories de Plantes</div>
            <div className="subtitle">Jettez un coup d'oeuil à toutes ces catégories !!</div>
        </div>
        <ul>
        <li>
        {categories.data?.map(categorie => (
          <ListCategorie essai="lol" nom={categorie.nomcategorie} id={categorie.id_categorie_culture} />
        ))}
        </li>
        </ul>
    </div>
    
    </>
  );
};

export default ListeCategorie;
