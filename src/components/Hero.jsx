import styles from "../style";
import { WebSecurity } from "../assets/";
import "./Hero.css";
import styled from "@emotion/styled";

const HeroContainer = styled.div`
  .breathe {
    -webkit-animation: breathing 4s ease-out infinite normal;
    animation: breathing 4s ease-out infinite normal;
  }

  @-webkit-keyframes breathing {
    0% {
      -webkit-transform: scale(0.95);
      transform: scale(0.95);
    }

    25% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.8);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.95);
      -ms-transform: scale(0.95);
      transform: scale(0.95);
    }

    25% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    50% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
    75% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.95);
      -ms-transform: scale(0.95);
      transform: scale(0.95);
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
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
              <span className="text-gradient ml-3 sm:ml-0">Security</span>
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We're a team of enthusiasts working on securing devices from attacks
            that come from the physical device rather than the software the
            system runs.
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={WebSecurity}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5] breathe"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[80%] h-[35%] top-0 pink__gradient" />
          {/* <div className="absolute z-[0] w-[60%] h-[80%] rounded-full white__gradient bottom-40" /> */}
          <div className="absolute z-[0] w-[25%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>
    </HeroContainer>
  );
};

export default Hero;
