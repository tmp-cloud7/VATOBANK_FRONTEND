import React from 'react'
import hero from './hero.module.css'
import imgi from  '../.././../Assets/offer.png'
// import imgii from '../.././../Assets/robot.jpg'
import { PiArrowFatUpFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <div className={hero.hero}>
      <div className={hero.container}>
        <div className={hero.content}>
            <div className={hero.flexi}>
                <div className={hero.btn}>
                    <img src={imgi} alt="" />
                    <h4>20% Discount For 1 Month Account</h4>
                </div>
                <div className={hero.block}>
                    <h2><strong>THE NEXT GENERATION PAYMENT METHOD </strong></h2>
                    <p><strong><i>Our team of experts uses a methodology to identify 
                        the credit herods most likely to fit your needs. We examine annual 
                        percentage rates, annual fees.</i></strong></p>
                      <Link to='/register' ><button>Get started <PiArrowFatUpFill /> </button> </Link>
                </div>
                
            </div>
        </div>
       
      </div>
    </div>
    <div className={hero.containeri}>
         <div className={hero.blocki}>
                    <div className={hero.sec}>
                        <h3>3800+</h3>
                        <h5>User Active</h5>
                    </div>
                    <div className={hero.sec}>
                        <h3>230+</h3>
                        <h5>Trusted by Company</h5>
                    </div>
                    <div className={hero.sec}>
                        <h3>$230M+</h3>
                        <h5>Transaction</h5>
                    </div>
        </div>
    </div>
    </>
  )
}

export default Hero
