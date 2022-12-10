import styles from "../style";
import { arrowUp } from "../assets";
import "animate.css";

export const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer animate__animated animate__pulse animate__infinite animate__slow `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] 
      rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-gradient font-poppins font-medium text-[23px] mr-2">
            Get
          </p>
          <img
            className="w-[23px] h-[23px] object-contain "
            src={arrowUp}
            alt="arrow"
          />
        </div>
        <p
          className="text-gradient font-poppins font-medium text-[23px]
        leading-[23px] "
        >
          Started
        </p>
      </div>
    </div>
  );
};
