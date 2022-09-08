import React from "react";
import styles from "./style";
import Hero from "./components/Hero";
import {
  About,
  // CardDeal,
  Stats,
  Testimonials,
  InfoCard,
} from "./components";
import OurTeam from "./components/OurTeam";


function Home() {

  const scrollHoja = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <button className="fixed text-white right-8 bottom-8 bg-black p-3 rounded-lg z-[55] cursor-pointer" onClick={() => scrollHoja()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-9 h-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      <div className={`bg-primary ${styles.flexStart}`}>
        {/* <div className={`${styles.boxWidth}`}> */}
        <Hero />
        {/* </div> */}
      </div>
      <Stats />
      <About />
      <InfoCard />
      <Testimonials />
      {/* <CardDeal /> */}
      <OurTeam />
    </div>
  );
}

export default Home;

