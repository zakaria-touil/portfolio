import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  // { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Work experience", link: "#workExperience"},
  { name: "Contact", link: "#contact" }
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/zac2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing an AI-powered Intelligent Document Processing (IDP) solution for the banking sector",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Zakaria was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Zakaria's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Zakaria is the ideal partner.",
    name: "Omar Belhoucine",
    title: "Director of Energy Green Solution",
  },
  {
    quote:
      "Working with Zakaria was a great experience. His technical expertise and ability to understand complex requirements allowed us to deliver projects on time and with high quality. Zakaria demonstrated strong problem-solving skills and was always proactive in suggesting improvements. His communication skills made him a key player in cross-functional teams. If you're looking for a reliable and highly skilled developer, Zakaria is the perfect choice.",
    name: "El Mamoune M.",
    title: "Manager, Trading Process Factory Team, Société Générale",
  },
  {
    quote:
      "Zakaria's contribution to our team was invaluable. His deep understanding of software development and ability to adapt to new technologies allowed us to create solutions that met the needs of the business. He consistently delivered results ahead of schedule and showed a genuine commitment to the success of the projects. Zakaria is a professional who thrives in fast-paced environments, and his collaborative spirit made him a pleasure to work with.",
    name: "Maurice C.",
    title: "Chapter Lead, BNP Paribas",
  },
  {
    quote:
      "Zakaria brought a high level of professionalism to our project at Konouz Immobilier. His work on the web application for property rental and his expertise in integrating augmented reality into the real estate industry were invaluable. Zakaria demonstrated strong skills in Laravel, Bootstrap, and MySQL, and his attention to detail and dedication to quality ensured the project’s success. He’s a developer you can rely on to deliver both technically and creatively.",
    name: "Abdelmoula B.",
    title: "Director of Konouz Immobilier",
  },

];

export const companies = [
  {
    id: 1,
    name: "BNP Paribas",
    img: "/bnp.svg",
    nameImg: "/bnpName.svg",
  },
  {
    id: 2,
    name: "SG CIB",
    img: "/sg.svg",
    nameImg: "/sgName.svg",
  },
  {
    id: 3,
    name: "Maroc Consulting",
    img: "/maroc.svg",
    nameImg: "/marocName.svg",
  },
  {
    id: 4,
    name: "Energy Green Solution",
    img: "/egs.svg",
    nameImg: "/egsName.svg",
  },
  {
    id: 5,
    name: "Konouz Immobilier",
    img: "/konouz.svg",
    nameImg: "/konouzName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Konouz Immobilier",
  position: "Full Stack Engeneer Intern",
  duration: "February 2020 – July 2020",
  desc: "Developed a web application for rental management and implemented augmented reality features in the real estate sector. Utilized technologies such as Laravel, Bootstrap, MySQL, and UML.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    company: "Societe Generale Corporate and Investment Banking",
    position: "Software Engeneer - Trading Process Analyst",
    duration: "February 2021 – June 2022",
    desc: "Developed and automated trading processes through process modeling, and robotic process automation, integrating business systems with APIs and delivering end-user training and support using technologies like Python, Camunda, and Flowable.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
  id: 3,
  company: "Circularis",
  position: "Co-founder & Lead Developer",
  duration: "November 2020 – Present",
  desc: "Co-designed and developed the application from scratch, building a robust architecture with a solid back-end using Spring Boot and an intuitive front-end with Vue.js. Directed and managed a team of front-end and back-end developers to ensure seamless delivery and high-quality standards.",
  className: "md:col-span-2",
  thumbnail: "/exp3.svg",
},
  {
    id: 4,
    company: "BNP PARIBAS",
    position: "Experienced Software Engeneer",
    duration: "July 2022 – Present",
    desc: "Designed, developed, and maintained scalable microservices, APIs, and automated workflows in the banking credit domain, ensuring high-quality code with Cucumber testing and Agile methodologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/zakaria-touil"
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/zakaria-touil-05899718b/"
  },
];
