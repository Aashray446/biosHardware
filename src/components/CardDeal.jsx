import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import TeamPhoto from '../assets/team.jpeg';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Our Hardware CTF
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Hardware CTF at InCTF is an opportunity to boost the understanding and recognition of hardware security and to add another dimension to traditional CTFs. The CTF is based to demonstrate different hardware security concepts and to create a skilled community around hardware, that sparks new conversations and push to make that quantum leap. The Hardware CTF presents challenges on Automotive security, ICS-SCADA, wireless security and firmware analysis with a moment to get accustomed to the new tools to get ahead in cyberspace.
      </p>

      <Button styles={`mt-10`} text={"InCTF"}/>
    </div>

    <div className={layout.sectionImg}>
      <img src={TeamPhoto} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
