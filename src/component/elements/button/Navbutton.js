import React from "react";
import './index.css';

const Navbutton = ({ buttonText ,pathto,onclick}) => (

    <form action={pathto}>
    
  <button className="navButton" onClick={onclick}>
    {buttonText}
  </button>

  </form>
);

export default Navbutton;
