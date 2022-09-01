import React from "react";
import styles from "./style";
import {
  Business,
  CardDeal,
  Stats,
  Testimonials,
  InfoCard,
} from "./components";
import OurTeam from "./components/OurTeam";




function Home() {
  return (
    <div>
      <Stats />
          <Business />
          <InfoCard />
          <Testimonials />
          <CardDeal />
          <OurTeam />
    </div>
  );
}

export default Home;

