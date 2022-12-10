import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

export const Billing = () => (
  <section
    id="product"
    className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}
  >
    <div
      className={`flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`}
    >
      <div>
        <img className="w-[100%] h-[100%] relative z-" src={bill} alt="bill" />
      </div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div>
      <h2 data-aos="slide-left" className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p data-aos="slide-up" className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>
      <div data-aos="zoom-in" className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" src={apple} alt="" />
        <img className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" src={google} alt="" />
      </div>
    </div>
  </section>
);
