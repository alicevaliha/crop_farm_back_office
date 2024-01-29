import React, { useEffect, useState } from "react";
import axios from 'axios'; // Importez axios ici
import './index.css'; 
import Deletebutton from "../button/Deletebutton.js"
import Input from '../input/Input.js';
import BtnprimaryComponent from '../button/BtnPrimary.js';
const LessPlant = () => {
    const [plantes, setPlantes] = useState([]);
  
    useEffect(() => {
      // Récupérer le nom d'utilisateur depuis le localStorage lors du montage du composant
      // let storedId = localStorage.getItem("userId");
      let request = "https://cropfarmback-production.up.railway.app/plantes/active";
      
      console.log(request);
  
      axios.get(request)
      .then(response => {
        // Mettez à jour l'état avec les données récupérées depuis l'API
        setPlantes(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Erreur lors de la récupération des terrains non valides :', error);
      });

      
    }, []);
  
    return (
    <div className="float-bloc-list">
    <div className="greet" >
        <div className="title">Liste des plantes encore valides* </div>
        <div className="subtitle">Oh les belles plantes!
        *certaines plantes ne sont plus disponibles à la plantation mais les données sur sa 
        plantation antérieure sont toujours disponibles ^-^</div>
    </div>

        <br></br>

        
        {plantes.map(plante => (
            <div style={{ display: 'grid', gridTemplateColumns: '30fr 15fr 15fr', gap: '0px' , marginTop: '5%'}}>
            <div className="list-info-plt" style={{ display: 'flex', alignItems: 'center', width: '119%', marginLeft: '7%' }}>
                    <div className="plant-image">
                        <img src="/assets/plant.jpg" alt="Plant" />
                    </div>
                    <div className="plant-name" style={{ width: '40%', marginTop: '0%', marginLeft: '4%'  }}>{plante.nom_plante}</div>
                    <form action="/detailplante">
                        <input type="hidden" name="idplante" value={plante.id_plante}/>
                        <BtnprimaryComponent holder="Détails de la plante"/>
                    </form>
                </div>
            </div>
        ))}

       
    </div>
  );
};

export default LessPlant;
