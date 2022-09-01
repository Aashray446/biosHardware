import React from "react";
import styled from "@emotion/styled";

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
    font-family: cursive;
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
        font-family: cursive;
        margin: 3rem;
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
        margin-left: 40rem;
        font-size: 1.25rem;
        text-align: right;
        color: #E68E84; !important;
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
  }
`;
const InfoCard = () => {
  return (
    <CardContainer>
      <div className="card">
        <section>
          <div className="small-container">
            <hr className="grounded-radiants" />
            <h2>What's Going Inside</h2>
          </div>
          <div className="headline-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            earum non, obcaecati fugiat inventore sint deserunt expedita laborum
            eaque, labore dolorem quas nobis maiores itaque quasi excepturi
            atque ipsam unde.
          </div>
        </section>
        <span></span>
        <section>
          <h1>Our Fields of Research</h1>
          <div className="side-text">Explore the library</div>
        </section>
        <span></span>
        <section>
          <div className="grid-container">
            <div className="grid-item">
              <hr className="grounded-radiants" />
              <h2>Embedded Systems</h2>
              <p className="grid-item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officiis exercitationem eligendi dolorem eos veritatis pariatur
                autem dolorum ex, tenetur laudantium sequi reiciendis molestiae
                voluptatum porro quam, vitae ab vel.
              </p>
            </div>
            <div className="grid-item">
              <hr className="grounded-radiants" />
              <h2>Embedded Systems</h2>
              <p className="grid-item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officiis exercitationem eligendi dolorem eos veritatis pariatur
                autem dolorum ex, tenetur laudantium sequi reiciendis molestiae
                voluptatum porro quam, vitae ab vel.
              </p>
            </div>
            <div className="grid-item">
              <hr className="grounded-radiants" />
              <h2>Embedded Systems</h2>
              <p className="grid-item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officiis exercitationem eligendi dolorem eos veritatis pariatur
                autem dolorum ex, tenetur laudantium sequi reiciendis molestiae
                voluptatum porro quam, vitae ab vel.
              </p>
            </div>
            <div className="grid-item">
              <hr className="grounded-radiants" />
              <h2>Embedded Systems</h2>
              <p className="grid-item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officiis exercitationem eligendi dolorem eos veritatis pariatur
                autem dolorum ex, tenetur laudantium sequi reiciendis molestiae
                voluptatum porro quam, vitae ab vel.
              </p>
            </div>
            <div className="grid-item">
              <hr className="grounded-radiants" />
              <h2>Embedded Systems</h2>
              <p className="grid-item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officiis exercitationem eligendi dolorem eos veritatis pariatur
                autem dolorum ex, tenetur laudantium sequi reiciendis molestiae
                voluptatum porro quam, vitae ab vel.
              </p>
            </div>
            <div className="grid-item">
              <hr className="grounded-radiants" />
              <h2>Embedded Systems</h2>
              <p className="grid-item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officiis exercitationem eligendi dolorem eos veritatis pariatur
                autem dolorum ex, tenetur laudantium sequi reiciendis molestiae
                voluptatum porro quam, vitae ab vel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </CardContainer>
  );
};

export default InfoCard;
