import React, { useState, useEffect } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css";
import Card_one from "../../card/card-1/Card_one";
import Card_two from "../../card/card-2/Card_two";
import Graphbox from "../../card/statbox/Graphbox";
import Statbox from "../../card/statbox/Statbox";
import Ad from "../../elements/ad/Ad";
import Listbox from "../../card/listbox/Listbox.js"
import ListeCategorie from "../../card/listbox/ListCategorie.js";
import Quotes from "../../elements/quote/Quote.js";
import  Form from "../../form/Form.js"
import Input from "../../elements/input/Input.js";
import BtnprimaryComponent from "../../elements/button/BtnPrimary.js";



const CategorieBoard = () => {

  const [nom, setNom] = useState("");

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handleCreation = async () => {

    try {
      const response = await axios.post("https://cropfarmback-production.up.railway.app/categories-culture", {
          nomcategorie:nom
      });

      console.log("Nouvelle plante créée avec succès :", response.data);
      window.location.href = "/categories";
      // Mettre à jour l'interface ou rediriger l'utilisateur vers une autre page si nécessaire
    } catch (error) {
      alert("Erreur lors de la création de la plante veuillez réessayer ^^");
      console.error("Erreur lors de la création de la plante :", error);
    }
  
  };

  return (
  <div className="container">
    <div className="background-board">
        <ListeCategorie />
  
        <div class="grid-container">
            <div class="item item1"><Ad/></div>
            <div class="item item2">
            <div className="float-bloc-list">
              <div className="greet" >
                  <div className="title">Insérer une nouvelle catégorie</div>
                  <div className="subtitle">Soyez inspirés donnez nous un nom!</div>
              </div>
                <Input type="text" placeholder="Nom de la catégorie" value={nom} onChange={handleNomChange}/>
                <BtnprimaryComponent holder="Créer" onclick={handleCreation}/>
            </div>
            </div>
            <div class="item item3"><Quotes/></div>
        </div>
        
    </div>
    
  </div>
);
};

export default CategorieBoard;
