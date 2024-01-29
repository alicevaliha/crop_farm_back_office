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
import UniqueCat from "../../elements/list-info/UniqueCat.js"
import FormList from "../../form/FormList.js"
import ListePlante from "../../elements/list-info/ListePlante.js"
import UpdatingForm from "../../form/UpdatingForm.js"
import ListePlantePrim from "../../elements/list-info/ListePlantePrim.js";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";



const DetailPlanteBoard = () => {

  const location = useLocation();
  const [dataterrain, setDataterrain] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const idplante = searchParams.get('idplante');
  console.log(idplante+" voilà le id haha ");

  useEffect(() => {

    

    let request = "https://cropfarmback-production.up.railway.app/plantes/";
    request += idplante;
    console.log(request);
    axios.get(request)
    .then(response => {
      // Mettez à jour l'état avec les données récupérées depuis l'API
      setDataterrain(response.data);
      console.log(dataterrain.nom_plante);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des plantes non valides :', error);
    });

    
  }, []);

  return (
  <div className="container">
    
    <div className="background-board">
       
    <div className="subtitle">*Une fois le bouton X appuyé votre plante disparaitra des listes à planter 😥</div>
        <ListePlantePrim nom={dataterrain.nom_plante} pv={dataterrain.prixvente}
        pa={dataterrain.prixachat} rendement={dataterrain.rendement} id={idplante}/>

        <div class="grid-container-det">
            <div class="item "><Ad/></div>
            <div class="item "><Quotes/></div>
            
            <div class="item "><UpdatingForm type="text" toupdate="nom de la plante" id={dataterrain.id_plante} paramname="nom_plante" valuetype="String" path="/plantes" redirection="/detailplante?idplante="/></div>
            <div class="item "><UpdatingForm type="number" toupdate="prix de vente de la plante" id={dataterrain.id_plante}  paramname="prixvente" valuetype="float" path="/plantes" redirection="/detailplante?idplante="/></div>
            <div class="item "><UpdatingForm type="number" toupdate="prix d'achat de la plante" id={dataterrain.id_plante} paramname="prixachat" valuetype="float" path="/plantes" redirection="/detailplante?idplante="/> </div>
            <div class="item "><UpdatingForm type="number" toupdate="Rendement" id={dataterrain.id_plante} paramname="rendement" valuetype="int" path="/plantes" redirection="/detailplante?idplante="/></div>

        </div>
        
    </div>
  </div>
);
};

export default DetailPlanteBoard;
