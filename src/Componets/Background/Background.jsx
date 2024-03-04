import "./Background.css"

import video  from '../../assets/video1.mp4'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'





const Background = ({playStatus,heroCount}) => {

   
      if(playStatus){
        return(
            <video className="Background" autoPlay loop muted >
               <source src={video} type="video/mp4"/>
            </video>
        )
      }
      else if(heroCount === 0){
         return(
            <img className="Background" src={img1} alt="image1" />
         )
      }
      else if(heroCount === 1){
        return(
           <img className="Background"src={img2} alt="image2" />
        )
     }
     else if(heroCount === 2){
        return(
           <img  className="Background" src={img3} alt="image2" />
        )
     }

}

export default Background
