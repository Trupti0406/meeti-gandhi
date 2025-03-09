import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tanla_platforms_logo,
  siib,
  charusat,
  arvind_brands_logo,
  platformcommons_logo,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "CPaaS Expertise",
    description:
      "I specialize in delivering scalable communication solutions across industries, enhancing customer engagement through marketing automation and innovative, future-ready technologies.",
    icon: web,
  },
  {
    title: "Strategic Partnerships",
    description:
      "I focus on building long-term relationships with enterprise clients, offering customer-centric solutions through consultative engagement to drive business success.",
    icon: mobile,
  },
  {
    title: "Data-Driven Sales",
    description:
      "With a strong foundation in market intelligence, I design sales strategies, implement automation, and optimize performance to enhance efficiency, increase revenue, and drive long-term business profitability.",
    icon: backend,
  },
  {
    title: "Collaborative Solutions",
    description:
      "I ensure seamless integration of CPaaS offerings, aligning with enterprise needs and leveraging technology to enhance customer communication and engagement effectively.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const education = [
  {
    title: "Master of Business Administration - MBA",
    company_name: "Symbiosis international university",
    icon: siib,
    iconBg: "#FFFFFF",
    date: "June 2022 - Mar 2024",
  },
  {
    title: "Bachelor of Technology - BTech, Information Technology",
    company_name: "CHARUSAT",
    icon: charusat,
    iconBg: "#FFFFFF",
    date: "June 2018 - August 2022",
  },
];

const experiences = [
  {
    title: "Enterprise Sales",
    company_name: "Karix ( part of Tanla platforms)",
    icon: tanla_platforms_logo,
    iconBg: "#FFFFFF",
    date: "June 2024 - Current",
    points: [
      "Managing Sales & Key accounts at Karix (part of Tanla Playforms)",
      "I lead the enterprise account management for some of the largest and most prestigious companies across industries such as OTT, FMCG, Delivery Platform, F&B and PSU in India",
      "Leading strategic sales initiatives, offering tailored CPaaS solutions to enterprise clients.",
      "Strengthening relationships, ensuring customer satisfaction, and optimizing communication solutions.",
    ],
  },
  {
    title: "Summer Intern",
    company_name: "Arvind Fashions Limited",
    icon: arvind_brands_logo,
    iconBg: "#FFFFFF",
    date: "Apr 2023 - Jun 2023",
    points: [
      "As a Retail Intern, generated sales of Rs. 59 lakhs in a span of 2 months, surpassing the target by 48% by employing cross-selling and upselling strategies.",
      "Supervised and coordinated day-to-day store operations for the U.S. Polo Assn. stores in Select City malls while catering to over 100 customers every day.",
      "Enhanced customer experience at the USPA store by running a special campaign on the Premium collection launch days which increased the walk-in count by 35%.",
      " Maintained merchandised and visual presentation standards on a daily basis.",
    ],
  },
  {
    title: "Product Management Intern",
    company_name: "Platform Commons",
    icon: platformcommons_logo,
    iconBg: "#FFFFFF",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Led transformative project at PlatformCommons, enhancing platform competitiveness & user experience.",
      "Conducted comprehensive competitive research to identify market gaps & opportunities",
      "uccessfully launched feature-rich platform meeting user needs & maintaining competitiveness.",
      "PDeepened expertise in design leadership, emphasizing collaboration, innovation, & user-centricity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
