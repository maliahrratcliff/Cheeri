import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'


function HeroSection() {
  return (
    <div className = 'hero-container'>
      <video src='/videos/Picnic.mp4' autoPlay loop muted />
      <h1>Hosting Reimagined</h1>
      <p>You bring the people, we bring the party</p>
      <div className = 'hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline' 
        button-Size='btn--large'>
        Get Started
        </Button>
        {/* <Button 
        className='btns' 
        buttonStyle='btn--primary' 
        button-Size='btn--large'>
        Meet Us
        <i className='far fa-play-circle'></i>
        </Button> */}
        </div>
    </div>
  )
}

export default HeroSection;
