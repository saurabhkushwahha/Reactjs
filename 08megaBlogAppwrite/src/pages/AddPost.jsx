import React from 'react'
import {PostForm } from '../components'
import container from '../components/container/container'


function AddPost() {

  return (
    <div className='py-8'>
       <container>
         <PostForm/>
       </container>
    </div>
  )
}


export default AddPost