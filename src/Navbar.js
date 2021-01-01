import React, { useRef,useState } from 'react'

function Navbar(){
const navbar = useRef(null);
const [button, setButton] = useState(false);


    return(

        <div id='navbar' >
            <div id='navbar-child' ref={navbar}>
            <ul>
          <li><a href='#' onClick={()=>{
             navbar.current.style.display='none'
             setButton(false)
          }
              }> Home</a></li>
          <li><a href='#navbar' onClick={()=>{
             navbar.current.style.display='none'
             setButton(false)
          }
              }>Skills </a></li>
          <li><a href='#Projects' onClick={()=>{
             navbar.current.style.display='none'
             setButton(false)
          }
              }> Projects</a></li>
          <li><a href='#contact' onClick={()=>{
             navbar.current.style.display='none'
             setButton(false)
             }
              }> Contact </a></li>
          

            </ul></div>
            <div id='burger-parent' 
            onClick={()=>{
              if(button == false){
                navbar.current.style.display='block'
                setButton(true)
            }
            else{
              navbar.current.style.display='none'
              setButton(false)
            } }}>

            <div className='burger-btn'></div>
            <div className='burger-btn'></div>
            <div className='burger-btn'></div>
</div>
            
         </div>
    )
}

export default Navbar