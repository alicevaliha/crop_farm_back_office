import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./index.css";
import Input from "../elements/input/Input.js";
import BtnprimaryComponent from "../elements/button/BtnPrimary.js";

const FormPlante = () => {
  const [nom, setNom] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [prixAchat, setPrixAchat] = useState("");
  const [categorie, setCategorie] = useState("");
  const [rendement, setRendement] = useState("");
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

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrixVenteChange = (event) => {
    setPrixVente(event.target.value);
  };

  const handlePrixAchatChange = (event) => {
    setPrixAchat(event.target.value);
  };

  const handleCategorieChange = (event) => {
    setCategorie(event.target.value);
  };

  const handleRendementChange = (event) => {
    setRendement(event.target.value);
  };


  const handleCreation = async () => {
    try {
      const response = await axios.post("https://cropfarmback-production.up.railway.app/plantes", {
        nom_plante: nom,
        prixvente: parseFloat(prixVente),
        prixachat: parseFloat(prixAchat),
        id_categorie_culture: parseInt(categorie),
        sprite_plante: "none",
        placeingamemaker: 0,
        corbeille: 0,
        rendement: parseInt(rendement)
      });

      console.log("Nouvelle plante créée avec succès :", response.data);
      window.location.href = "/plantes";
      // Mettre à jour l'interface ou rediriger l'utilisateur vers une autre page si nécessaire
    } catch (error) {
      alert("Erreur lors de la création de la plante veuillez réessayer ^^");
      console.error("Erreur lors de la création de la plante :", error);
    }
  };

  return (
    <div className="float-bloc-list">
      <div className="greet" >
        <div className="title">Insérer une nouvelle Plante</div>
        <div className="subtitle">Soyez inspirés, donnez-nous un nom !</div>
      </div>
      <Input type="text" placeholder="Nom" value={nom} onChange={handleNomChange} />
      <Input type="number" placeholder="Prix de vente" value={prixVente} onChange={handlePrixVenteChange} />
      <Input type="number" placeholder="Prix d'achat" value={prixAchat} onChange={handlePrixAchatChange} />
      <Input type="number" placeholder="Rendement" value={rendement} onChange={handleRendementChange} />

     <select className="input-field input-container" name="idcategorie" value={categorie} onChange={handleCategorieChange}>
        <option value="">Categorie de la plante</option>
        {categories.data?.map(categorie => (
            <option value={categorie.id_categorie_culture}>{categorie.nomcategorie}</option>
        ))}
      </select>
      <BtnprimaryComponent holder="Créer" onclick={handleCreation} />
    </div>
  );
};

export default FormPlante;
