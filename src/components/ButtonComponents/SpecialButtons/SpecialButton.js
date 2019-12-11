import React, {useState} from "react";
import { specials } from '../../../data';

const SpecialButton = (props) => {
  return (
    <>
      <button className='specialButton'>{props.myLabel}</button>
    </>
  )
};
export default SpecialButton;
