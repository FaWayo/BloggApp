import React from 'react'
// import BlogPost from './BlogPost'
import './Post.css'

// import UI from './UI'
import football from './Images/acmilann.jpg'
import Votes from './Votes'

function Post(props) {
    return (
    
       
        <section className='mainpost'> 
             <h1 className='title'>Christmas Came Early For AC Milan Players</h1>
             <img className='blog-image' src={football} alt='PostImg'/>
         
           <span>
          <Votes/>



                   
  As we approach the festive season, we could say Christmas came early for Italian Seria A giants AC Milan. As kids wait for Santa Claus and expect his arrival, AC Milan players found theirs in, well, Zlatan Claus. Their talismanic Swedish striker Zlatan Ibrahimović, who has been in fantastic form this season, scoring 8 goals in 7 games this season, bought the new and wildly coveted gaming console known as the Play Station 5 (PS5)for all of his teammates. It has been widely seen on social media, as people have sold a lot of their belongings to purchase the Play Station 5. Other men have also employed the use of "Sugar Mummies" to get this PS5. Well it seems all these players needed to do was to be in great form. AC Milan sit at the top of the table after 7 games, with 5 wins and 2 draws, accumulating a total of 17 points out of a possible 21 leading last season's champions Juventus by two points. A lot of messages of gratitude have come from these players to Zlatan, "the football god" s he calls himself. This act shows how much of a good leader he is as this will motivate the players to either maintain this form or make it better. This also should be done by other leaders of every organization, providing random prizes and incentives for workers to increase productivity, maybe Mr. Ibrahimović has opened the way for other leaders to help their workers, followers or mates. For about 8 years, Juventus has held the title and will this be the year AC Milan takes their throne back? Let us see if the Play Station 5 is the key to their success.
          
           </span>
          
           
        </section>
       
    )
 
}

export default Post
