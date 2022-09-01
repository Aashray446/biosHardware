import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
    <div id="contact" className={`${styles.flexStart} md:flex-row flex-col mb-2 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h2 className={`${styles.heading2}`}>GPT-3</h2>
        <p className={`${styles.paragraph} mt-4 max-w-[240px]`}>
        Crechterwoord K12 182 DK Alknjkcb,All Rights Reserved
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>

    <div className="flex flex-row md:mt-0 mt-6 w-full justify-center lg:justify-end mb-7 items-end ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[32px] h-[32px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

    <div className="w-full flex flex-row justify-center lg:justify-center items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2022 bi0s Hardware. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
