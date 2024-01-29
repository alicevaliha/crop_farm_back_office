import React, { useState } from "react";
import "./index.css"; 
import Input from "../elements/input/Input.js";
import BtnprimaryComponent from "../elements/button/BtnPrimary.js";
import axios from 'axios'; // Importez axios pour effectuer des appels API

const LoginForm = ({ objname }) => {
  const [email, setEmail] = useState(""); // état pour l'e-mail
  const [password, setPassword] = useState(""); // état pour le mot de passe

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Met à jour l'état de l'e-mail lorsque l'utilisateur tape dans le champ d'entrée
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Met à jour l'état du mot de passe lorsque l'utilisateur tape dans le champ d'entrée
  };

  const handleSubmit = async (e) => {

      e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    
      // Vous pouvez maintenant utiliser 'email' et 'password' pour effectuer des opérations, telles que des appels API avec Axios
      console.log("Email:", email);
      console.log("Password:", password);
    
      // Exemple d'appel API avec Axios
      try {
        // Appel de l'API pour se connecter avec l'email et le mot de passe
        const response = await axios.get("https://cropfarmback-production.up.railway.app/proprietaires/login", {
          params: {
            mail: email,
            mdp: password,
          },
        });
    
        // Gérer la réponse de l'API
        console.log("Réponse de l'API :", response.data);
        const userId = response.data.id;
        const username = response.data.nom;
        const usermail = response.data.mail;

        // Stocker des données dans le localStorage
        localStorage.setItem('userId', userId);
        localStorage.setItem('username',username);
        localStorage.setItem('usermail',usermail);

        window.location.href = "/dashboard";
        // Rediriger vers le tableau de bord ou effectuer d'autres actions en fonction de la réponse
      } catch (error) {
        // Gérer les erreurs d'authentification
          alert("Erreur lors de la connexion veuillez réessayer ^^");
          console.log(error);
      }

};
  
  return (
    <>
      <div className="float-bloc-list login-bloc">
        <div className="greet">
          <div className="title">Connectez vous à votre compte {objname}</div>
          <div className="subtitle">Soyez inspirés donnez nous un nom!</div>
        </div>
        {/* Champ d'entrée pour l'e-mail */}
        <Input name="email" type="email" placeholder="Votre e-mail soit jean@gmail.com / alicia@gmail.com" value={email} onChange={handleEmailChange} />
        {/* Champ d'entrée pour le mot de passe */}
        <Input name="password" type="password" placeholder="Votre mot de passe soit donc mdpjean / mdpalicia" value={password} onChange={handlePasswordChange} />
        <form onSubmit={handleSubmit}>
          {/* Bouton de soumission du formulaire */}
          <BtnprimaryComponent holder="Se connecter" />
        </form>
        <div className="coverbottom"></div>
      </div>

    </>
  );
};

export default LoginForm;
