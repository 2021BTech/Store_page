import React from 'react'
import BG from "../../Assets/about-background-image.png"
import BG2 from "../../Assets/about-background.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={BG2} alt='' />
        </div>
        <div className='about-section-image-container'>
            <img src={BG} alt='' />
        </div>
         <div className='about-section-text-container'>
            <p className='primary-subheading'>
                Food Is An Important Part Of A Balanced Diet
            </p>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className='primary-text'>
            Pellentesque diam volutpat 
            commodo sed egestas egestas fringilla. 
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>
                    Learn
                </button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill/> Watch video
                </button>
            </div>
         </div>
    </div>
  )
}

export default About
