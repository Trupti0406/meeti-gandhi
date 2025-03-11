import { FaEnvelope } from "react-icons/fa";
import TRUPTI from "../assets/meetii.png";
import { BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload, MdOpenInBrowser } from "react-icons/md";
import { SectionWrapper } from "../hoc";
import { FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="z-50 overflow-hidden relative w-full h-full sm:h-screen flex items-start md:mt-16 justify-center max-w-7xl mx-auto">
      <div
        className="grid grid-cols-1 items-end lg:grid-cols-2 lg:gap-12 gap-y-8
  bg-gradient-to-r from-[#0d1224] to-[#0a0d37] 
  border-[1px] border-[#0d1224] 
  [background-clip:padding-box] 
  relative before:absolute before:inset-0 before:-z-10 before:m-[-1px] 
  before:bg-gradient-to-r before:from-pink-500 before:via-[#16f2b3] before:to-violet-600">
        <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-6 pb-0 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">Meeti Gandhi</span>
            {` , I'm a  `}
            <span className=" text-[#16f2b3]">
              B2B Enterprise Sales Professional.
              {/* Driving Growth & Building Relationships */}
            </span>
          </h1>

          <div className="my-12 flex items-center gap-5 z-50">
            <a
              href="https://www.linkedin.com/in/meeti-gandhi-78b82a172/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </a>
            <a
              href="mailto:meetigandhi002@gmail.com"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://x.com/GandhiMeeti"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <FaSquareXTwitter size={30} />
            </a>
          </div>

          <div className="flex items-center gap-3 z-50">
            {/* <a href="/#contact">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-lg border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </a> */}

            <a href="/#contact">
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                target="_blank">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </a>
          </div>
          <svg
            className="sm:hidden absolute -left-44 -bottom-12 w-full h-full z-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#3e2b75"
              d="M38.3,-66.6C51,-58.9,63.8,-51.6,67.4,-40.5C70.9,-29.5,65.2,-14.7,64.5,-0.4C63.9,14,68.3,28,63.8,37.4C59.3,46.8,46,51.7,33.9,59.2C21.8,66.6,10.9,76.5,-1.8,79.7C-14.5,82.8,-29.1,79.2,-40.7,71.5C-52.3,63.8,-61,52,-62.8,39.4C-64.5,26.8,-59.4,13.4,-57.5,1.1C-55.5,-11.2,-56.8,-22.3,-52.3,-30.3C-47.9,-38.3,-37.7,-43,-28.1,-52.5C-18.4,-62,-9.2,-76.1,1.8,-79.2C12.8,-82.3,25.5,-74.3,38.3,-66.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="sm:hidden absolute -right-48 bottom-12 w-full h-full z-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8A2BB9"
              d="M34.2,-57.7C47.6,-51.5,63.9,-48.9,70.4,-39.9C76.8,-30.9,73.4,-15.4,70.3,-1.8C67.2,11.8,64.3,23.6,58.1,33.1C51.9,42.6,42.4,49.7,32.1,58C21.9,66.2,10.9,75.6,-0.3,76C-11.5,76.5,-22.9,68,-30.7,58.3C-38.4,48.6,-42.4,37.7,-45.3,27.8C-48.1,17.9,-49.8,8.9,-56.2,-3.7C-62.6,-16.4,-73.8,-32.7,-70.6,-42.1C-67.5,-51.4,-49.9,-53.7,-35.7,-59.4C-21.5,-65,-10.8,-74.1,-0.2,-73.8C10.4,-73.5,20.8,-63.8,34.2,-57.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="order-2 lg:order-2 relative rounded-lg shadow-lg overflow-hidden">
          {/* Container needs to have position relative to contain absolute elements */}

          {/* Background Blobs - All with absolute positioning and negative z-index */}
          <div className="absolute inset-0 w-full  overflow-hidden">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#8A2BE2"
                d="M47.4,-61.1C56.7,-48.7,56.3,-29.3,54.9,-13.2C53.5,2.9,51.2,15.6,45.8,27.9C40.5,40.3,32,52.4,18.2,63.2C4.4,73.9,-14.7,83.3,-29.6,78.9C-44.5,74.5,-55.3,56.3,-64.4,38.3C-73.5,20.2,-80.9,2.3,-75.6,-10.9C-70.4,-24.1,-52.5,-32.7,-37.8,-44.1C-23.1,-55.6,-11.5,-70,3.8,-74.5C19,-78.9,38.1,-73.5,47.4,-61.1Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* <div className="absolute bottom-[-40px] left-[-30px] w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-[-60px] right-[-30px] w-52 h-52 bg-[#16f2b3] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-[20%] left-[-20px] w-24 h-24 bg-violet-600 rounded-full blur-2xl opacity-40"></div> */}
          </div>

          {/* Image - This determines the container's dimensions */}
          <div className="overflow-hidden flex justify-end md:justify-center relative z-10">
            <img
              src={TRUPTI}
              alt="Hero"
              className="w-60 md:w-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "home");
