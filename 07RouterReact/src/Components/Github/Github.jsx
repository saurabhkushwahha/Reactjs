import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState()
    useEffect( ()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then( response => response.json())
        .then( data=>{
            console.log(data)
            setdata(data)
        })
        
    },[])
  return (
    <div className='text-7xl text-slate-900/80 p-10 bg-red-950/15 rounded-sm shadow'>Saurabh created this github
     {data.followers}
    </div>
  )
}

export default Github