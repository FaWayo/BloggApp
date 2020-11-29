
import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

function NavBar() {
         return(
   <div className='navbar'>
       <nav >
        <ul>
        <li> <Link to="/">Home   </Link></li> 
        <li> <Link to="/about">About  </Link></li> 
        <li>   <Link to="/contact">Contact</Link></li> 
        
         </ul>   
           
       </nav> 

    </div>    
            )

           
}
   
export default NavBar
