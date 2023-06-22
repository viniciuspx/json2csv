import React from "react";

import "./button.css"

function Button(props) {
  return (
    <button  className="convert-button" type="submit" onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default Button;
