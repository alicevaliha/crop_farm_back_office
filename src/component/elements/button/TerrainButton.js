import React from "react";
import "./TerrainButton.css"; // Assurez-vous de remplacer "TerrainButton.css" par le nom de votre fichier CSS
import DetailsTerrain from "./DetailsTerrain";

const TerrainButton = ({idterrain,surface}) => {
  return (
    <div className="terrain-button">
      <div className="background-terrain-button"></div>
      <div className="content-terrain-button">
        <div className="text-terrain-button">ID {idterrain}</div>
        <div className="info-terrain-button">Surface {surface} m2</div>
      </div>
      <DetailsTerrain pathto="validerterrain" id= {idterrain}/>
    </div>
  );
};

export default TerrainButton;
