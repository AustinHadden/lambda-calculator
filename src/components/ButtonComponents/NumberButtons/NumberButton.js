import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number_btn" onClick={() => props.setValue(props.button)}>
      <span role="number" aria-label="number">
        {props.button}
      </span>
    </button>
  );
};

export default NumberButton;
