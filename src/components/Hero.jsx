import styles from "../style";
import { WebSecurity } from "../assets/";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex my-[-15px] md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            We care about
            <br className="sm:block hidden" />
            <span className="text-gradient">Security</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We're a team of enthusiasts working on securing devices from attacks
          that come from the physical device rather than the software the system
          runs.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={WebSecurity}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[80%] h-[35%] top-0 pink__gradient" />
        {/* <div className="absolute z-[0] w-[60%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[25%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
