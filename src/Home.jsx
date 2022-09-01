import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  InfoCard,
} from "./components";
import OurTeam from "./components/OurTeam";

function Home() {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <InfoCard />
          <Billing />
          <Testimonials />
          <CardDeal />
          <CTA />
          <OurTeam />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
