import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiMysql,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "Github", route: "/github" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Damiel. All Rights Reserved.`,
  author: {
    name: "Damiel Maquiling",
    accounts: [
      {
        url: "https://github.com/Damiel31",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/damiel-maquiling-3073ab195/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "mailto:damielmaquiling@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/12216y2lvZUMGxDbaNRcgi95mU8TQCulp/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Redux",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "PHP",
    icon: <FaPhp fontSize="20px" />,
    url: "https://www.php.net/",
  },
  {
    name: "Laravel",
    icon: <FaLaravel fontSize="20px" />,
    url: "https://laravel.com/",
  },
  {
    name: "MySql",
    icon: <SiMysql fontSize="20px" />,
    url: "https://www.mysql.com/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign fontSize="20px" />,
    url: "https://ant.design/",
  },
  {
    name: "SASS",
    icon: <FaSass fontSize="20px" />,
    url: "https://sass-lang.com/",
  },
];

const otherTechStacks = [
  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
];

const sideProjects = [
  {
    name: "Pogi Ecommerce",
    imageUrl: "/pogi.png",
    alt: "pogiecommerce",
    summary:
      "An Ecommerce for men products to stay pogi(Handsome).",
    link: "https://e-commerce-pogi.vercel.app/",
    tech: [
      'Mongodb',
      'Express',
      'ReactJS',
      'Nodejs',
      'Ant Design'
    ]
  },
  {
    name: "Monster prep",
    imageUrl: "/monsterprep.png",
    alt: "monsterprep",
    summary: "A checklist for the game Monster Hunter whenever the player is planning to hunt a monster.",
    tech: [
      'Mongodb',
      'Express',
      'ReactJS',
      'Nodejs',
    ]
  },
  {
    name: "Ukay Ukay",
    imageUrl: "/ukayukay.png",
    alt: "UkayUkay",
    summary: "Ukay-Ukay is an app that supports local brands in the philippines to sell their authentic clothing for the public.",
    tech: [
      'React Native',
      'Mongodb',
      'Express',
      "Ant Design"
    ],
  },
  {
    name: "Kamayan",
    imageUrl: "/kamayan.png",
    alt: "kamayan",
    summary: "Sales and Inventory system for our client Kamayan Tuna Grills located in Davao City to help them manage their buisness properly",
    tech: [
      "PHP",
      "MySQL"
    ],
  }
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  sideProjects,
};
