import React from 'react'
import './Background.css'
import video from '../../Assets/video1.mp4'
import img1 from '../../Assets/image1.png'
import img2 from '../../Assets/image2.png'
import img3 from '../../Assets/image3.png'

function Background({playStatus,heroCount}) {
  if(playStatus){
    return(
        <video className='bg fade-in' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
    )
  }
  else if(heroCount ===0){
    return <img src={img1} className='bg fade-in' alt=''/>
  }
  else if (heroCount === 1) {
    return <img src={img2} className='bg fade-in' alt='' />
  }
  else if (heroCount === 2) {
    return <img src={img3} className='bg fade-in' alt='' />
  }
}

export default Background