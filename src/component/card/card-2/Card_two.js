import React from "react";
import './index.css';

const Card_two = ({titre,info,metrage}) => (
  <div className="card-2">
    <div className="content-2">
      <h2 className="title-2">{info} {metrage}</h2>
      <p className="text-2">{titre}</p>
    </div>
  </div>
);

export default Card_two;
