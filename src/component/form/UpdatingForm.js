import React, { useState } from "react";
import axios from "axios"; // Importez axios ici
import "./index.css"; // Importez votre fichier CSS
import Input from "../elements/input/Input.js";
import BtnprimaryComponent from "../elements/button/BtnPrimary.js";

const Form = ({ type, toupdate, id, paramname , valuetype ,path,redirection}) => {
  const [updatedvalue, setUpdatedValue] = useState(""); // état pour l'objet

  const handleUpdatedValueChange = (e) => {
    setUpdatedValue(e.target.value); // Met à jour l'état de la valeur lors de la saisie
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    let convertedValue = updatedvalue;

    // Vérifier le type et convertir la valeur en conséquence
    if (valuetype === "int") {
      convertedValue = parseInt(updatedvalue);
    } else if (valuetype === "float") {
      convertedValue = parseFloat(updatedvalue);
    }

    let request = "https://cropfarmback-production.up.railway.app";
    request+=path;
    request+="/";
    request+=id;

    let redirect=redirection;
    redirect+=id;

    try {
      const response = await axios.put(request, {
        [paramname]: convertedValue,
      });  

      console.log("Réponse de l'API :", response.data);
      window.location.href = redirect;
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <div className="float-bloc-list">
      <div className="greet">
        <input type="hidden" value={id} name="id" />
        <div className="title">Modifier {toupdate}</div>
        <div className="subtitle">Modifier...modifier...modifier...</div>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type={type}
          placeholder={toupdate}
          value={updatedvalue}
          onChange={handleUpdatedValueChange}
        />
        <BtnprimaryComponent holder="Modifier" type="submit" />
      </form>
    </div>
  );
};

export default Form;
