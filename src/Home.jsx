import React from "react";
import styles from "./style";
import Hero from "./components/Hero";
import {
  About,
  Stats,
  Testimonials,
  InfoCard,
} from "./components";
import OurTeam from "./components/OurTeam";

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      left: 1,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className="fixed text-white right-8 bottom-8 bg-black p-3 rounded-lg z-[55] cursor-pointer scale-75 md:scale-100"
        onClick={() => scrollToTop()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-9 h-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      <div className={`bg-primary ${styles.flexStart}`}>
        <Hero />
      </div>

      <Stats />
      <About />
      <InfoCard />
      <Testimonials />
      <OurTeam />
    </div>
  );
}

export default Home;
