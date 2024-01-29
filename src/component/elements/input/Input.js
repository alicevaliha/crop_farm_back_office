import React from "react";
import "./index.css"; // Importez votre fichier CSS

const InputComponent = ({type,placeholder,name,onChange,value}) => (
    <input type={type} name={name} className="input-field input-container" placeholder={placeholder} value={value} onChange={onChange}/>
);

export default InputComponent;
