import { styles } from "../styles";
import ImageCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Name and Description */}
      <div className="absolute bottom-20 left-0 px-8 z-10">
        <h1 className={`${styles.heroHeadText} text-white relative`}>
          Hi, I'm <span className="text-[#915EFF]">Meeti Gandhi</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Assistant Manager - Sales | <br className="sm:block hidden" />
          Driving Growth & Building Relationships
        </p>
      </div>

      {/* Image Canvas - Positioned at Center */}
      <ImageCanvas />
    </section>
  );
};

export default Hero;
