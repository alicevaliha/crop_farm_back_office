import React from "react";
import "./index.css";
import Ad from "../../elements/ad/Ad";
import Listbox from "../../card/listbox/Listbox.js"
import Quotes from "../../elements/quote/Quote.js";
import  Form from "../../form/Form.js"
import LessPlant from "../../elements/list-info/LessPlant.js";
import MoreButton from "../../elements/button/MoreButton.js";
import CardPhoto from "../../card/card-photo/CardPhoto.js";
import CardParcelleComponent from "../../card/card-parcelle/CardParcelle.js";
import LoginForm from "../../form/LoginForm.js";

const LoginBoard = () => (
    <div className="container">
    <div className="background-terrain-card parcelles" >


    </div>
    <LoginForm/>
  </div>
);

export default LoginBoard;
