import React, { useState } from "react";
import { numbers } from '../../../data';

const NumberButton = (props) => {
  return (
    <>
      <button className='numberButton'>{props.myLabel}</button>
    </>
  )
};
export default NumberButton;
