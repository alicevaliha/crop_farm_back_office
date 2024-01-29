import React from "react";
import "./index.css";
import Ad from "../../elements/ad/Ad";
import Quotes from "../../elements/quote/Quote.js";
import LessPlant from "../../elements/list-info/LessPlant.js";
import FormPlante from "../../form/FormPlante.js";

const Board = () => ( 
  <div className="container">
    <div className="background-board">
        <Ad/>
          <LessPlant/>
        <div class="grid-container-det-plant">
            <div class="item "><FormPlante/></div>
            <div class="item "><Quotes/></div>
        </div>

    </div>

   
        
  </div>
);

export default Board;
