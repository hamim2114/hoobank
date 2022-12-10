import {card} from '../assets'
import styles, {layout} from '../style.js'
import {Button} from './Button'

export const CardDeal = () =>  (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div>
          <h2 data-aos='slide-left' className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          </h2>
          <p data-aos='slide-up' className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button styles={`mt-10`}/>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
        <img className="w-[100%] h-[100%]" src={card} alt="" />
      </div>
    </section>
  )
