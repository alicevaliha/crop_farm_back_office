import React from "react";
import "./index.css"; // Importez votre fichier CSS

const SelectComponent = ({name,obj}) => (
    <select className="input-field input-container" name={name}>
        <option value={name}>{obj}</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
);

export default SelectComponent;
