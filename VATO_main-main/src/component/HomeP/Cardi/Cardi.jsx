import React from 'react'
import cari from './cari.module.css'
import imgI from '../../../Assets/people01.jpg'
import imgIi from '../../../Assets/people02.jpg'
import imgIii from '../../../Assets/people03.jpg'
import imgIv from '../../../Assets/coinbase.png'
import imgv from '../../../Assets/airbnb.png'
import imgvi from '../../../Assets/dropbox.png'
import imgvii from '../../../Assets/binance.png'
import { Link } from 'react-router-dom'

const Cardi = () => {
  return (
    <div className={cari.cari} >
      <div className={cari.container}>
        <div className={cari.head}>
          <h3><strong>Our clients</strong></h3>
          <p>What people are saying about us</p>
        </div>
        <div className={cari.content}>
          <div className={cari.card}>
            <h4> <sub>,,</sub> </h4>
            <p>Money is only a tool. It will take you wherever you wish, but it will not replace 
              you as the driver.</p>
            <div className={cari.sec}>
              <img src={imgI} alt="" />
              <div className={cari.seci}>
                <h3>Herman Jensen</h3>
                <h5>Founder & Leader</h5>
              </div>
            </div>
          </div>
          <div className={cari.card}>
          <h4> <sub>,,</sub> </h4>
            <p>Money makes your life easier. If you're lucky to have it, you're lucky</p>
            <div className={cari.sec}>
              <img src={imgIi} alt="" />
              <div className={cari.seci}>
                <h3>Steve Mark</h3>
                <h5>Founder & Leader</h5>
              </div>
            </div>
          </div>
          <div className={cari.card}>
          <h4> <sub>,,</sub> </h4>
            <p>It is usually people in the money business, and international trade that are really rich</p>
            <div className={cari.sec}>
              <img src={imgIii} alt="" />
              <div className={cari.seci}>
                <h3>Kenn Gallagher</h3>
                <h5>Founder & Leader</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={cari.contentA}>
          <div className={cari.block}>
              <img src={imgIv} alt="" />
              <img src={imgv} alt="" />
              <img src={imgvi} alt="" />
              <img src={imgvii} alt="" />
          </div>
        </div>
        <div className={cari.contentB}>
            <div className={cari.blocki}>
              <div className={cari.flexi}>
                <h3>Let’s try our  service now!</h3>
                <p>Everything you need to accept card payments  and grow<br /> your business anywhere on the planet.</p>
              </div>
              <Link to='/registera'><button>Get started </button></Link>
             
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cardi
