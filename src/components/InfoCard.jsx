import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CarouselCard from "./CarouselCard";
import findScreenWidth from "../hooks/ScreenWidth";

const CardContainer = styled.div`
  :root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
  }

  .card {   
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      340deg,
      #0d2848,
      #070d13,
      #070d13,
      #070d13,
      #070d13,
      #0d2848
    );
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 20px;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 100%);
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.5);
  }
  hr {
    width:3.5rem;
  }
  .grounded-radiants {
    position: relative;
    border: 4px solid transparent;
    border-radius: 20px;
    background: linear-gradient(to right, #BB70DE, #E68E84);
    background-clip: padding-box;
    padding: 2px;
  }
    
  .grounded-radiants::after {
    position: absolute;
    top: -4px; bottom: -4px;
    left: -4px; right: -4px;
    background: linear-gradient(to right, #BB70DE, #E68E84);
    content: '';
    z-index: -1;
    border-radius: 16px;
  }
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    font-size: 1.5em;
    color: rgb(88 199 250 / 100%);
    margin: 3rem 3rem 1rem 3rem;
  }
  h2 {
    font-size: 1.5rem;
    color:#fff;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 0.1875rem;


  }
  .small-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
  .headline-text {
    margin-left: 5rem;
    font-size: 1rem;
    color: #B5B6B8; !important;
  }
  span {
    margin-top: 2em;
    margin-bottom: 2em;
    display: block; 
  }
  h1 {
    font-size: 2.125rem;
    font-weight: bold;
    font-family: Arial, 
        Helvetica, sans-serif;
    background: linear-gradient(to right, #BB70DE, #E68E84);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .side-text {
    font-size: 1.25rem;
    text-align: right;
    color: #E68E84; !important;
    margin-right: 1.5rem;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    text-align: left;
    padding-bottom: 2rem;
    padding-right: 2rem;
  }
  .grid-item-text {
    font-size: 1rem;
    color: #81AFDD;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    margin-top: 3rem;
  }
  .align-right {
    width: 50%;
    text-align: right;
  }
  .align-left {
    width: 50%;
    text-align: left;
  }
  .side-text:hover {
    color: rgb(14 116 144 / 100%);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const infoCardList = [
  {
    title: "Embedded Systems",
    content: `Embedded systems include a variety of hardware and software
    components, which perform specific functions in host systems,
    for example, satellites, washing machines, robots, hand-held
    telephones and automobiles.`,
  },
  {
    title: "Firmware Analysis",
    content: `Firmware is the code that runs on an embedded device.In
    embedded systems, manufacturers usually go for functionality
    over security to decrease manufacturing cost.We analyze the
    firmware, to find various security vulnerabilities present.`,
  },
  {
    title: "Wireless Security",
    content: `As everything is getting mobile and wireless, the urgency for
    effective wireless threat protection is on everyone's watch,
    as wireless networks are developed rapidly making them
    vulnerable in a myriad of ways.`,
  },
  {
    title: "Automotive Security",
    content: `With consumers expecting new complex features for their ride,
    it's getting difficult for engineers to make systems that go
    hand in hand with security and required technicalities. We
    look into the extremely complex systems of vehicle security
    and make sure that it keeps up with the new features.`,
  },
  {
    title: "ICS / SCADA",
    content: `SCADA and Industrial Control Systems systems have been
    relatively excluded from security testing by the security
    industry. This has made them vulnerable and leading to some
    successful intrusions that have resulted in malicious
    attackers obtaining administrative access to core systems.`,
  },
  {
    title: "Side Channel Exploitation",
    content: `A side-channel attack is a security exploit that aims to
    gather information from or influence the program execution of
    a system by measuring or exploiting indirect effects of the
    system or its hardware -- rather than targeting the program or
    its code directly.`,
  },
];

const InfoCard = () => {
  const width = findScreenWidth();

  return (
    <CardContainer>
      <div id="research" className="card">
        <section>
          <div className="small-container">
            <hr className="grounded-radiants" />
            <h2>What's Going Inside</h2>
          </div>
          <div className="headline-text">
            We at bi0s, continuously research,work on improving and creating new
            techniques to design, tweak, manipulate and exploit hardware to make
            devices safe, from the beginning for a safer world.
          </div>
        </section>
        <span></span>
        <section>
          <h1 className="align-left">Our Fields of Research</h1>
          <div
            className="side-text align-right"
            onClick={() => {
              window.open("https://wiki.bi0s.in/", "_blank");
            }}
          >
            Explore the library
          </div>
        </section>
        <span></span>
        {width > 768 ? (
          <section>
            <div className="grid-container">
              {infoCardList.map((item, index) => (
                <div key={`item_${index}`}>
                  <div className="grid-item">
                    <hr className="grounded-radiants" />
                    <h2>{item.title}</h2>
                    <p className="grid-item-text">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <CarouselCard
            contentList={infoCardList}
            maxVisibility={2}
            width={width}
          />
        )}
      </div>
    </CardContainer>
  );
};

export default InfoCard;
