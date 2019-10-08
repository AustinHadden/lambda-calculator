import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorButton, setOperatorButton] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className="operator_container">
         {operatorButton.map((button, index) => (
           <OperatorButton key={index} button={button} />
         ))}
       </div>
    </div>
  );
};

export default Operators;
