import React from "react";
import './index.css';
import Logo from '../../elements/logo/Logo.js';
import Navbutton from '../../elements/button/Navbutton.js';

const Navbox = () => {

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Effacer tout le contenu du localStorage
    localStorage.clear();
    // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée
    window.location.href = "/";
  };

  return (
    <div className="navbox">
      {/* Place the logo */}
      <div className="logo">
        <Logo />
      </div>

      <div className="content">
        {/* Vos autres éléments de navigation ici */}
        <div className="navButtonsContainer">
          <Navbutton buttonText="Dashboard" pathto="/dashboard"/>
          <Navbutton buttonText="Categorie" pathto="/categories"/>
          <Navbutton buttonText="Plantes" pathto="/plantes"/>
          <Navbutton buttonText="Terrains" pathto="/terrain"/>
          <Navbutton buttonText="Parcelles" pathto="/parcelles"/>
          {/* Ajoutez un gestionnaire d'événements au bouton Log Out */}
          <Navbutton buttonText="Log Out" onclick={handleLogout} pathto="/"/>
        </div>
      </div>
    </div>
  );
};

export default Navbox;
