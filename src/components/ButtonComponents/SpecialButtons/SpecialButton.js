import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special_btn">
      <span role="specials" aria-label="special">
        {props.button}
      </span>
    </button>
  );
};

export default SpecialButton;
