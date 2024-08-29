import { useState ,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [number,setNumber]=useState(false);
  const [character,setCharacter]=useState(false);
  const [password, setPassword]=useState("");
  // useRef Hook
  const passwordRef=useRef(null);

  const passwordGenerator= useCallback(()=>{
           let pass="";
           let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
           if(number) str+="0123456789"
           if(character) str+="@#$%&*"
           for(let i=1; i<=length; i++){
             pass+=str.charAt(Math.floor(Math.random()*str.length+1));
           }
           setPassword(pass)
  },[length,number,character])
  
   const copyToClipBoard= useCallback( ()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
   },[password])
  useEffect( ()=>{
     passwordGenerator()
  },[length,number,character,passwordGenerator])
  
  return (
    <>
       <div className='flex flex-col justify-center gap-2  align-center w-3/5 mx-auto my-5  p-2 bg-gray-700 shadow-lg text-blue-50 rounded'>
           <div className='text-5xl text-center'>Password Generator</div>
                <div className='flex  shadow rounded overflow-hidden'>
                <input 
                type="text" 
                className='w-full px-2 py-4 outline-none text-gray-950 text-2xl'
                value={password}
                ref={passwordRef}
                readOnly
                />
                 <button className='outline-none p-2 text-2xl shrink-0' style={{backgroundColor:'lime'}} onClick={copyToClipBoard}>copy</button>
                </div >
                <div className='flex flex-wrap gap-2 justify-center'>

                <div className=' flex gap-2 w-fit p-3 align-center'>
                 <input 
                 type="range"  
                 min={6} 
                 max={20}  
                 value={length}
                 className='cursor-pointer'
                 onChange={ (e)=>setLength(e.target.value)}
                 />
                  <label className='text-2xl'>Length : {length} </label>
                </div>
                <div className=' flex gap-2 w-fit p-3'>
                 <input 
                 type="checkbox" 
                 className='w-6 outline-none' 
                 id="number"
                 defaultChecked={number}
                 onChange={()=>{
                     setNumber((prev)=> !prev)
                 }}
                 />
                  <label className='text-2xl' for="number">Numbers</label>
                </div>
                <div className='flex gap-2 w-fit p-3'>
                 <input 
                 type="checkbox" 
                 className='w-6 outline-none' 
                 id="character"
                 defaultChecked={character}
                 onChange={ ()=>{
                    setCharacter( (prev)=> !prev )
                 }}
                 />
                  <label className='text-2xl' for="character">Character</label>
                </div>

                </div>
       </div>
    </>
  )
}

export default App
