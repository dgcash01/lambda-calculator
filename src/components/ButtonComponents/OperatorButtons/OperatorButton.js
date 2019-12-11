import React, {useState} from "react";
import { operators } from '../../../data';

const OperatorButton = (props) => {
  return (
    <>
      <button className='operatorButton'>{props.myLabel}</button>
    </>
  );
};

export default OperatorButton;
