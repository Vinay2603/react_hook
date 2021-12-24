import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from "react"

function App() {
const [counter,setCounter] = React.useState(5)

const  Increment = (value)=>{
    setCounter( counter+value)
}
const Double =()=>{
  setCounter(counter *2)
}


  return (
    <div className="App">
       
       <h1>counter </h1>
       <h2>{counter}</h2>
       <button onClick={()=>Increment(1)}>ADD</button>
       <button onClick={()=> Increment(-1)}>REMOVE</button>
       <button onClick={()=> Double()}>DOUBLE</button>
    </div>
  );
}

export default App;
