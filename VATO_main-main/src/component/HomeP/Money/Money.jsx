import React from 'react'
import mon from './mon.module.css'
import imgi from '../../../Assets/star.jpg'
import imgii from '../../../Assets/shield.jpg'
import imgiii from '../../../Assets/send.jpg'
const Money = () => {
  return (
    <div className={mon.mon}>
      <div className={mon.container}>
        <div className={mon.content}>
            <div className={mon.flexi}>
                <h2><strong>You do the business,
                we’ll handle the money.</strong></h2>
                <p>With the right credit card, you can improve your
                     financial life by building credit, earning rewards
                      and saving money. But with hundreds of credit 
                      cards on the market.
                </p>
                <button>Get Started</button>
            </div>
            <div className={mon.flexii}>
                <div className={mon.sec}>
                    <img src={imgi} alt="" />
                    <div className={mon.seci}>
                        <h4>Rewards</h4>
                        <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </div>
                <div className={mon.sec}>
                    <img src={imgii} alt="" />
                    <div className={mon.seci}>
                        <h4>100% Secured</h4>
                        <p>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>
                <div className={mon.sec}>
                    <img src={imgiii} alt="" />
                    <div className={mon.seci}>
                        <h4>Balance Transfer</h4>
                        <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Money
