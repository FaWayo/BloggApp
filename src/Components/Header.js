      import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import logo from './Images/blogg.png'

function Header() {
    return (
        <div classname='headerr'>
          
           
       <Link to ='/home'>  <img className='logo' src={logo} alt='logo'/> BLOG  </Link> 
         
             
          

      </div>
    )
}

export default Header
