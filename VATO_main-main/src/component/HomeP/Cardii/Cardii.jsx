import React from 'react'
import carI from './carI.module.css'
import img from  '../../../Assets/harry-shelton-pPxhM0CRzl4-unsplash.jpg'
import imgi from  '../../../Assets/shayan-hefzi-u01ya3giO0Q-unsplash.jpg'
import imgii from  '../../../Assets/drew-beamer-1TUK-3oEJ1w-unsplash.jpg'
const cardii = () => {
  return (
    <div className={carI.carI}>
      <div className={carI.container}>
        <div className={carI.content}>
        <div className={carI.head}>
          <h3><strong>Global Branch</strong></h3>
          <p>Closer Now Than Never.
             At VATO, we understand the importance of bringing our services and branches closer to you. 
             With over 100 branches at strategic locations within Nigerian cities, we keep our promise to serve you better.</p>
        </div>
        <div className={carI.flex}>
          <div className={carI.card}>
            <img src={img} alt="" />
            <div className={carI.seci}>
            <h4><b>Mobile branch</b></h4>
            <p>Bank anytime, anywhere — right from your phone. VATO Bank’s Mobile Branch puts all your essential banking services in your pocket, 
              so you can transfer funds, pay bills, apply for loans, and manage your account on the go</p>
            </div>
          </div>
          <div className={carI.card}>
            <img src={imgi} alt="" />
            <div className={carI.seci}>
            <h4><b>Loan Branch</b></h4>
            <p>Get fast, flexible loans tailored to your needs — whether it’s for business growth, personal goals, or unexpected expenses. 
              With simple applications, competitive rates, and quick approvals, VATO Bank makes borrowing easy and stress-free.</p>
            </div>
          </div>
          <div className={carI.card}>
            <img src={imgii} alt="" />
            <div className={carI.seci}>
            <h4><b>ATM Branch</b></h4>
            <p>Our ATMs bring your loved ones' cross-border remittances to a street corner in your neighbourhood 
              as you can process and claim Western Union transfers at our ATMs,also make cash deposits on these versatile machines.
              </p>
            </div>
          </div>
         
         

        </div>
        </div>
      </div>
    </div>
  )
}

export default cardii
