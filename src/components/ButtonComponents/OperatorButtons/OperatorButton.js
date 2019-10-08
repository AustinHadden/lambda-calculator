import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operator_btn">
      <span role="operator" aria-label="operator">
        {props.button.char}
      </span>
    </button>
  );
};

export default OperatorButton;