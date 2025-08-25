import { Link } from "react-router-dom";
import { card } from "../Assets";
import styles, { layout } from "../style";
import Button from "./Button";
import '../pages/styles.css'
const CardDeal = () => (
     <div className='style'>
    <div className='container'>

  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Compare credit and debit card options based on your needs, get personalized recommendations, 
      and apply online in minutes — no hassle, just smarter choices.
      </p>
      <Link to="/register">
      <Button styles={`mt-10`} />
       </Link>
     </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
    </div>

  </div>
  
);

export default CardDeal;