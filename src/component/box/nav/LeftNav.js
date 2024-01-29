import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import './index.css'; 
import Profile from '../profile/Profile';
import Calendar from '../../card/calendar/Calendar';
import TerrainButton from '../../elements/button/TerrainButton';
import Longad from '../../elements/ad/Longad';

const LeftNav = ({ style }) => {
  
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [terrainsNonValides, setTerrainsNonValides] = useState([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    const storedUsermail = localStorage.getItem("usermail");
    if (storedUsermail) {
      setUsermail(storedUsermail);
    }

    let storedId = localStorage.getItem("userId");
    let request = "https://cropfarmback-production.up.railway.app/terrains/proprietaire/invalid/";
    request += storedId;
    
    axios.get(request)
    .then(response => {
      setTerrainsNonValides(response.data);
    })
    .catch(error => {
      console.log('Erreur lors de la récupération des terrains non valides :', error);
    });
    
  }, []);

  return (
    <div className="navleft" style={style}>
      <Profile username={username} mail={usermail}/>
      <Calendar/>

      <div className="greet" >
        <div className="title">Terrains à valider</div>
        <div className="subtitle">Validez la création de vos terrains</div>
      </div>
      
      {terrainsNonValides.length > 0 ? (
        <ul className='ul-leftnav'>
          {terrainsNonValides.map(terrain => (
            <li key={terrain.id_terrain}>
              <TerrainButton idterrain={terrain.id_terrain} surface={terrain.longueur * terrain.largeur}/>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-terrain-message">Aucun terrain à valider pour le moment.</div>
      )}
      
      <Longad/>
    </div> 
  );
}

export default LeftNav;
