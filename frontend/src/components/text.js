import React from "react";

import "./text.css";

function Text(props) {
  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <div className="input-area">
      <label>{props.name}</label>
      <textarea
        type="text"
        className="form"
        onChange={handleChange}
        value={props.outputText}
      ></textarea>
    </div>
  );
}

export default Text;
