import React from 'react'
import car from './car.module.css'
import img from  '../../../Assets/star-removebg-preview.png'
import imgi from  '../../../Assets/shield-removebg-preview.png'
import imgii from  '../../../Assets/fund.png'
// import { BsSend } from "react-icons/bs";
const Card = () => {
  return (
    <div className={car.car}>
      <div className={car.container}>
        <div className={car.content}>
          
        <div className={car.head}>
          <h3><b>You do the business, we’ll handle the money. </b></h3>
          <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            .</p>
        </div>
        <div className={car.flex}>
          <div className={car.card}>
            <img src={img} alt="" className={car.icon} />
            <h4><b>Rewards</b></h4>
            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
          <div className={car.card}>
            <img src={imgi} alt="" className={car.icon} />
            <h4><b>100% Secured</b></h4>
            <p>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
          <div className={car.card}>
              <img src={imgii} alt="" className={car.icon} />
            <h4><b>Balance Transfer</b></h4>
            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card
