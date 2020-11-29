import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignnUp from './Components/SignnUp'
import Loginn from './Components/Loginn'
import './App.css'
import Navbar from './Components/NavBar'
import Home from './Components/Home'
import About from './About'
import Contact from './Components/Contact'
import Post from './Components/Post' 




function App() {
    
  return (
        <Router>
          
          <Navbar/>
          
         

           <Switch>
               
               <Route path='/signup' component={SignnUp}/>
                <Route path='/home' component={Home}/>
                <Route exact path='/' component={Loginn}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/post' component={Post}/>
                <Route path='/login' component={Loginn}/>
              
              
                

                 
           </Switch> 

           {/* <footer>
             <img src='' alt=''/>
             <img src='' alt=''/>
             <img src='' alt=''/>
             </footer>    */}
       
         </Router>
    ) 
  }


export default App
