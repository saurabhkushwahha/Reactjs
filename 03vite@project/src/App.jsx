import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
   const detail={
       name:"Saurabh Kushwaha",
       age:22,
   }
  return (
    <>
    <Card username="Saurabh" btnText="visit me"/>
    <Card username="Ashutosh_bhai"/>
    </>
  )
}

export default App
