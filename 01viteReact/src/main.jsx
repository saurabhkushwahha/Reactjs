import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
     return(
       <div>
        <h1>Saurabh kushwaha</h1>
       </div>
     )
}
// we know that at the end all html element converted into object 

const anotherElement=(
  <a href='www.google.com'  target="_blank"> visit to google</a>
)
const p="hello bolo broo!!"

// according to react library how we can give and create the elemet


const  reactElement=React.createElement(
        'a',
        { href:'https://google.com', target:'_blank'},
        'take to google',
        p
        
)



ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <MyApp/>
    // anotherElement   
    // reactElement
    <App/>  
)
