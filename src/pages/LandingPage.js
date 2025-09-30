import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Nav'
import Hero from '../component/HomeP/Hero/Hero'
import Cardi from '../component/HomeP/Cardi/Cardi'
import Card from '../component/HomeP/Card/Card'
// import Billi from '../component/HomeP/Bill/Bill'
import Cardii from '../component/HomeP/Cardii/Cardii'
import { Billing, CardDeal} from "../component";
import { useRef } from 'react'
import Bill from '../component/HomeP/Bill/Bill'


const LandingPage = () => {
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
      if (ref.current) {
          window.scrollTo({
              top: ref.current.offsetTop - 100, 
              behavior: 'smooth'
          });
      }
  };
  return (  
  <div >
  
    <Navbar scrollToSection={scrollToSection} refs={{ contactRef }}/>
    <Hero/>
    <Card/>
    {/* <Business /> */}
        <Billing />
        <CardDeal />
    
    <Cardii/>
    
    <div ref={contactRef}>
      <Cardi/>
      </div>
       <Bill/>
    <Footer/>

  </div>
  )
}

export default LandingPage

