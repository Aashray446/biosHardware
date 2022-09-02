import { stats } from "../constants";
import styles from "../style";
import styled from "@emotion/styled";

const Line = styled.div`
  .vertical {
    display: inline-block;
    width: 1px;
    border-left: 3px solid white;
    border-radius: 5px;
    height: 15px;
    left: 50%;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div key={stat.id} className="flex justify-evenly">
      <div
        className={`flex-1 flex justify-center items-center flex-row m-3 `}
      >
        <p className="flex font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
      <span className={index === stats.length - 1 ? "invisible" : "visible"}>
        <Line>
          <div className="vertical"></div>
        </Line>
      </span>
      </div>
    ))}
  </section>
);

export default Stats;
