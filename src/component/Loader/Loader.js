import React from "react";
import "./Loader.css";

const Loader = ({width, height}) => {
  return (
    <div className="loading" style={{width:`${width? width:''}`, height:`${height? height:''}`}}>
      <div></div>
    </div>
  );
};

export default Loader;