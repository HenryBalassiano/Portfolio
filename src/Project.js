import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'; 






function Project(){
  
    return(
<div id='Projects'>

<div id='project-parent'>
 <h2 id='project-title'>Projects</h2>
<div id='project-child'>
  <Carousel infinite arrows>
     <div className='parent-carousel'>
     <h2 className='project-name'>TikTok Clone</h2>
       <img className='project-img' src='./tiktok.png'/> 
       <br/>
       <span className='tech-used'>Created with: <span className='tech'>React</span> </span>
       <p className='project-description'> 
       A clone of the popular app TikTok. Using the Reddit API,
       <br/>
        it gathers videos from popular funny subreddits.
       
       </p>
       <a target='_blank' href="https://henrybalassiano.github.io/Tik-Tok-Clone/" className="button">Demo</a>
       <a target='_blank' href="https://github.com/HenryBalassiano/Tik-Tok-Clone/tree/master" className="button">Code</a>

 
     </div>
     <div className='parent-carousel'>
     <h2 className='project-name'>Nutrition App</h2>
       <img className='project-img'src='./nutrition.png'/>
       <br/>
       <span className='tech-used'>Created with:<span className='tech'> React</span></span>
       <p className='project-description-2'>
         <br/>
       A Nutrition App that uses the NutritionX API.

       </p>
       <a target='_blank' href="https://henrybalassiano.github.io/Nutrition-App/" class="button">Demo</a>
       <a target='_blank' href="https://github.com/HenryBalassiano/Nutrition-App/tree/master" class="button">Code</a>
     </div></Carousel>
   
</div>
</div>
      
      </div>
    )
}

export default Project