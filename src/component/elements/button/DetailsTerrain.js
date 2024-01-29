import React from "react";
import "./index.css"; // Assurez-vous de remplacer "DetailsTerrain.css" par le nom de votre fichier CSS

const DetailsTerrain = ({pathto,id}) => {
  return (
    <>
        <form action={pathto}> 
          <input type="hidden" value={id} name="idterrain"/>
          <button className="details-terrain-button" type="submit">
          <div className="background-terrain"></div>
          <div className="arrow-terrain"></div>
          </button>
        </form>
    </>
  );
};

export default DetailsTerrain;
