import React, { useState } from "react";

import './App.css';
const App = () => {
    const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, - 1));  // or -1

  }
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(erro) {
      setResult("Error")

    }
    
  }}