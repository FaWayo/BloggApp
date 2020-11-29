import React from 'react'
// import UI from './UI'
import './BlogPost.css'
import football from './Images/acmilann.jpg'
import  Post from '../Post'
import {Link} from 'react-router-dom'

function BlogPost() {
    return (
        <div className='blogPostt'>
       
           <div className='blogHeader'>
              <span className='blogCategory'>Football</span>
              <h1 className='postTitle'>Christmas Came early For Ac Milan</h1>
              <span class= 'postedOn'>posted on July, 20 2019 by Nana Kofi Dadzie</span>
           
           </div> 
           <div className='ImgContainer'>
               <Link to ='/Post'>  <img className='blog-image' src={football} alt='PostImg'/>
               <span>As we approach the festive season, we could say Christmas came early for Italian Seria A giants AC Milan. As kids wait for Santa Claus and expect his arrival, AC Milan players found theirs in, well, Zlatan Claus. Their talismanic Swedish striker Zlatan Ibrahimović, who has been in fantastic form this season, scoring 8 goals in 7 games this season, bought the new and wildly coveted gaming console known as the Play Station 5 (PS5)for.......</span>
               <button className='viewFull'>View Full Post</button>
               </Link>

           </div>

         

        
           
         
        </div>

       
    )
}

export default BlogPost
