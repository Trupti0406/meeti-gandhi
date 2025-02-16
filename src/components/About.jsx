import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, description }) => (
  <Tilt className="xs:w-[300px] w-full">
    <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-8 px-8 min-h-[320px] flex flex-col items-center text-center">
        <h3 className="text-white font-bold text-[20px]">{title}</h3>

        <p className="text-white tracking-wider text-[14px] mt-3">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I manage sales at Karix Mobile, a CPaaS provider specializing in SMS,
        WhatsApp, voice, and messaging APIs. I work directly with businesses to
        implement efficient communication solutions that improve engagement and
        operational efficiency!
      </motion.p>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.heroSubText} mt-16`}>What I do? </h3>
      </motion.div>
      <div className="mt-4 flex flex-wrap lg:flex-nowrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
