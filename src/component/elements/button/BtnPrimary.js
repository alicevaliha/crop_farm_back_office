import React from "react";
import "./index.css"; // Assurez-vous d'importer votre fichier CSS

const BtnprimaryComponent = ({holder,onclick}) => (
  <button className="btn-primary" type="submit" onClick={onclick}>
    <span className="btn-text">{holder}</span>
  </button>
);

export default BtnprimaryComponent;
