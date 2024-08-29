import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      let [counter ,setCounter]=useState(15)
      // decrease function
  const decrease=()=>{
    counter=counter-1;
    if(counter<0){
      counter=0;
      setCounter(counter)
    }else{
      setCounter(counter)
    }
  }
 // increase function
 const increase=()=>{
   counter=counter+1;
   if(counter>20){
      counter=20;
      setCounter(counter)
   }
    else{
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur Saurabh</h1>
      <h2>Counter: {counter}</h2>
      <button
      onClick={decrease}
      >decrease value</button>
      <br />
      <br />
      <button 
       onClick={increase}
      >increase value</button>
    </>
  )
}

export default App
