import React, { useEffect, useState } from "react";
import axios from 'axios'; // Importez axios ici

import "./index.css";
import Card_one from "../../card/card-1/Card_one";
import Card_two from "../../card/card-2/Card_two";
import Graphbox from "../../card/statbox/Graphbox";
import Statbox from "../../card/statbox/Statbox";
import Ad from "../../elements/ad/Ad";
import Listbox from "../../card/listbox/Listbox.js";

const Board = () => {
  // État pour stocker le nom d'utilisateur récupéré du localStorage
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [datasurface, setDatasurface] = useState("");
  const [datarecolte, setDatarecolte] = useState("");
  const [datanbterrain, setDatanbterrain] = useState("");
  const [datafromage, setDatafromage] = useState([]);
  const [datalinear, setDataLinear] = useState([]);
  
  useEffect(() => {
    // Récupérer le nom d'utilisateur depuis le localStorage lors du montage du composant
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    const storedUsermail = localStorage.getItem("usermail");
    if (storedUsermail) {
      setUsermail(storedUsermail);
    }

    // statistiques 1
    const userId = localStorage.getItem("userId");
    let req1 = "https://cropfarmback-production.up.railway.app/terrains/stats/";
    req1+=userId;
    axios.get(req1)
      .then(response => {
        // Mettez à jour l'état avec les données récupérées depuis l'API
        setDatasurface(response.data[0].sum);
        console.log(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des data surface :', error);
    });

    // statistiques2
    let req2 = "https://cropfarmback-production.up.railway.app/planters/recoltes/";
    req2+=userId;
    axios.get(req2)
      .then(response => {
        // Mettez à jour l'état avec les données récupérées depuis l'API
        setDatarecolte(response.data[0].recoltes);
        console.log(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des data surface :', error);
    });

    // statistiques3
    let req3 = "https://cropfarmback-production.up.railway.app/terrains/nombreterrains/";
    req3+=userId;
    axios.get(req3)
      .then(response => {
        // Mettez à jour l'état avec les données récupérées depuis l'API
        setDatanbterrain(response.data[0].nbterrain);
        console.log(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des data surface :', error);
    });

    // fromage stat
    let req4 = "https://cropfarmback-production.up.railway.app/plantes/graphdara/";
    req4+=userId;
    axios.get(req4)
      .then(response => {
        // Mettez à jour l'état avec les données récupérées depuis l'API
        setDatafromage(response.data);
        console.log(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des data surface :', error);
    });

    //linear stat
    let req5 = "https://cropfarmback-production.up.railway.app/plantes/statrecoltes/";
    req5+=userId;
    axios.get(req5)
      .then(response => {
        // Mettez à jour l'état avec les données récupérées depuis l'API
        setDataLinear(response.data);
        console.log(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des data surface :', error);
    });


  }, []);

  return (
    <div className="container">
      <div className="background">
        <div className="card-container">
          <Card_one titre="Surface parcelles cultivables en votre possession" info={datasurface} metrage="mètre carré"/>
          <Card_two titre="Nombre de terrains en votre possession et validés" info={datanbterrain} metrage="Terrains"/>
          <Card_two titre="Nombre de plantes récoltées" info={datarecolte} metrage="Plantes récoltées"/>
        </div>
        <Ad />
        <div className="boxes">
          <Graphbox datasource={datafromage}/>
          <Statbox datasource={datalinear}/>
        </div>
        {/* <Listbox /> */}
      </div>

      <div className="greeting">
        {/* Utilisation du nom d'utilisateur récupéré dans le JSX */}
        <h1 className="title">Bonjour {username} 🌾</h1>
        <p className="subtitle">Bon retour sur votre interface administrateur</p>
      </div>
    </div>
  );
};

export default Board;
