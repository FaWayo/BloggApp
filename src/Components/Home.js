import React from 'react'
// import UI from './UI.js'
import './Home.css'
import Header from './Header.js'
// import PostData from './Post.json'
import BlogPost from './BlogPost.js'


// import {Link} from 'react-router-dom'

function Home(props) {
    return (
       
        <div className='posts'>
             <Header/>

             <BlogPost/>

      
          
          {/* {
              PostData.map((post, index)=>(
                  <div>
                      <h1>{Post.title}</h1>
                    <h2>{Post.description}</h2>
                  </div>

              ))
          } */}
                   
      
    
      
      
      
     
        </div>    
      
    )
}

export default Home
