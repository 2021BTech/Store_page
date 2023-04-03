import React from 'react'
//component Nav
import Nav from "../Nav/Nav"
//Img
import B_BG from "../../Assets/home-banner-background.png"
import BI from "../../Assets/home-banner-image.png"
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='home-container'>
      <Nav />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={B_BG} alt='' />
        </div>
        <div className='home-text-section'>
            <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text'>
                Healthy switcher chefs do all the prep work, like peeding,
                chopping & marinating, so you can cook a fresh food.
            </p>
            <button className='secondary-button'>
                Order Now <BsFillArrowRightCircleFill />
            </button>
        </div>
        <div className='home-image'>
            <img src={BI} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Home
