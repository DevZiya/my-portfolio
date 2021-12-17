import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {darkedMode} from '../../Redux/darkModeRedux'

const Toggle = () => {

  const [dark, setDark]=useState(false)
  const dispatch = useDispatch()

  const handleClick = () =>{
    setDark(!dark)
    dispatch(darkedMode(dark))
  }
  
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className={!dark ? 't-button light' : 't-button dark'}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;