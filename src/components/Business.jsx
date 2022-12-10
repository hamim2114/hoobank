import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "./Button";


const FeatureCard = ({icon,title,content,index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
    </div>
  </div>
)

export const Business = () => {
  return (
    <section id="features" className="sm:py-16 py-6 flex md:flex-row flex-col">
      <div className="flex justify-center items-start flex-1 flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p
          className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]
        max-w-[470px] mt-5"
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={`mt-10`} />
      </div>

      <div>
        {features.map((features, index) => (
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  );
};
