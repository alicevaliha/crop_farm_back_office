import React from "react"; // Importez votre image
import './index.css'; 

const Card_one = ({titre,info,metrage}) => (
  <div className="card-one">
    <img src="/assets/card1.jpg" alt="Card" className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{info} {metrage}</h2>
      <p className="card-text">
      {titre} 
      </p>
    </div>
  </div>
);

export default Card_one;
