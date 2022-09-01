import React from "react";
import styles from "./style";
import Hero from "./components/Hero";
import {
  About,
  CardDeal,
  Stats,
  Testimonials,
  InfoCard,
} from "./components";
import OurTeam from "./components/OurTeam";




function Home() {
  return (
    <div>
         <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      <Stats />
          <About />
          <InfoCard />
          <Testimonials />
          <CardDeal />
          <OurTeam />
    </div>
  );
}

export default Home;

