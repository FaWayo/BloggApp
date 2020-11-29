import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Login.css'

function Loginn() {
    
        const[email, setEmail]= useState("");
        const[password, setPassword]=useState("");
        
        
     
         function updateEmail(e){
          setEmail(e.target.value) 
            console.log(email)   

         }
       
         
         function updatePassword(e){
          setPassword(e.target.value) 
            console.log(password)   

         }
         function handleSubmit(e){
          e.preventDefault(); 
        }
         
        

      
         
       

    

        return(
             <div className='loginside'>
               <box>
                 <form onSubmit={handleSubmit}>
                       <label>Email:</label>
                       <input class='firstinput' type='email' value={email} onChange={updateEmail} /> 
      
                        <br></br>
                     
                        <label>Password:</label>
                        <input class='secondinput' type='password' value={password} onChange={updatePassword}/>
                        <br></br>
                    

                   <button class="loginbutton" onClick={handleSubmit}  type="submit" >   <Link to="/home">Login</Link> </button>

                     <h4>You do not have an account? Sign Up <Link to ='/signup'>Here</Link></h4>
                 </form>
                 </box>
                 
                
            
             </div>

        );
    
   
  
    
}

export default Loginn
