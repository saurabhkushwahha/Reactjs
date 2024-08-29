import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-9 bg-slate-600  gap-4'>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl' >
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
           </div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl' >
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "lime"}} onClick={()=>setColor("lime")}>Lime</button>
           </div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl' >
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "grey"}} onClick={()=>setColor("grey")}>Grey</button>
           </div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl' >
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>black</button>
           </div>
           <div className=' flex justify-center shadow-lg bg-slate-50 px-1 py-1 rounded-3xl' >
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "brown"}} onClick={()=>setColor("brown")}>Brown</button>
           </div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl' >
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "indigo"}} onClick={()=>setColor("indigo")}>Indigo</button>
           </div>
          
        </div>
  </div>
    </>
  )
}

export default App
