import React, { useEffect, useState } from "react";
import axios from 'axios'; // Importez axios ici
import "./index.css";
import Ad from "../../elements/ad/Ad";
import Listbox from "../../card/listbox/Listbox.js"
import Quotes from "../../elements/quote/Quote.js";
import  Form from "../../form/Form.js"
import LessPlant from "../../elements/list-info/LessPlant.js";
import MoreButton from "../../elements/button/MoreButton.js";
import CardPhoto from "../../card/card-photo/CardPhoto.js";
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
