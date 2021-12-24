import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from "react"

function App() {
  /////////////
const [counter,setCounter] = React.useState(5)

const  Increment = (value)=>{
    setCounter( counter+value)
}
const Double =()=>{
  setCounter(counter *2)
}
///////////////
const [query, SetQuery] = React.useState("")
const [tasks,setTasks] = React.useState([])
 const handleChange = (e)=>{
  // console.log(e.target.value)
  const {value} = e.target
  SetQuery(value)
}
const handleAdd =()=>{
  const payload={
    title: query,
    status : false
  }
  const newTasks = [...tasks , payload]
   setTasks(newTasks)
}
  return (
    <div className="App">
       
       <h1>counter </h1>
       <h2>{counter}</h2>
       <button onClick={()=>Increment(1)}>ADD</button>
       <button onClick={()=> Increment(-1)}>REMOVE</button>
       <button onClick={()=> Double()}>DOUBLE</button>
       
       <div>
         <h1>task</h1>
         <div>
              <input value={query} onChange={handleChange} placeholder='Add somthing '></input>
              <button onClick={handleAdd}>ADD</button>
         </div>
          <div>
            {tasks.map((el)=>{
               return <div> {el.title}</div>
            })}
          </div>
       </div>
    </div>
  );
}

export default App;
