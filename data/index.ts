export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Services", link: "#services" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/lap.png",
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
    title: "With 2 years of experiences",
    description: "Developing dynamic and seamless Website",
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
    title: "EventBro APMF 2022",
    des: "Admin Dashboard for managing the APMF 2022 event: scheduling, sponsors, banners, speakers, exhibitors, attendee registration, and more. It streamlines event logistics, ensuring efficient coordination and a successful, smooth event experience",
    img: "/eventbroreal.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/antdesign.svg",
      "/gitlab.png",
    ],
    place: "Kodingworks",
  },
  {
    id: 2,
    title: "Dashboard Admin HaiDafam",
    des: "A comprehensive tool for managing hotel operations, withdrawal transactions, top-up activities, hotels, membership, reservations, and services. It enables administrators to efficiently monitor and optimize all hotel processes effectively.",
    img: "/haidafamreal.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/antdesign.svg",
      "/gitlab.png",
    ],
    place: "Pesan.io",
  },
  {
    id: 3,
    title: "Dashboard Admin Haifood",
    des: "A platform for managing food delivery operations, including promotions, food categories, food products, restaurants, and more. Designed to enhance efficiency, it allows administrators to oversee and optimize the entire food delivery process seamlessly",
    img: "/haifoodreal.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/antdesign.svg",
      "/gitlab.png",
    ],
    place: "Haitoko",
  },
  {
    id: 4,
    title: "Laundry Ciloa",
    des: "Landing page that provides comprehensive information about laundry services, step-by-step guide on how to place an order. Designed for convenience, it allows customers to effortlessly access service details, pricing, and order their laundry services online with ease",
    img: "/laundryciloa.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.png", "/git.svg", "/c.svg"],
    link: "https://laundry-web-five.vercel.app/",
    place: "Freelance",
  },
  {
    id: 5,
    title: "Umroh.in",
    des: "A user-friendly platform showcasing Umrah packages, guiding Ustadz profiles, promotions, and an easy-to-use Umrah booking system. Designed to provide comprehensive information and simplify the booking process for a seamless Umrah experience",
    img: "/umrohin.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/antdesign.svg",
      "/git.svg",
    ],
    link: "https://umrohin.co.id/",
    place: "umroh.in",
  },
  {
    id: 6,
    title: "Teman Cuan",
    des: "Teman Cuan Admin Dashboard: A specialized tool for managing a social network website, designed to foster genuine interactions and relationships among users. It enables administrators to efficiently oversee user activities, content, and engagement to ensure a thriving online community",
    img: "/temancuanreal.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/antdesign.svg",
      "/gitlab.png",
    ],
    place: "TemanCuan",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Freelance Software Engineer",
    company: "Self-employed · Bandung",
    duration: "Jan 2024 - Present",
    responsibilities: [
      "Created a responsive website landing page for a laundry service using Next.js 13 and Tailwind CSS. The site includes features such as services, price list, company information, contact details, ordering instructions, and FAQs",
    ],
    skills: ["Next.js", "JavaScript", "Tailwind CSS", "Front-end Development"],
  },
  {
    id: 2,
    title: "Part Time Software Engineer",
    company: "Umrohin.Id · Bandung",
    duration: "Nov 2023 - Dec 2023",
    responsibilities: [
      "As a Front End Developer, I developed a responsive web landing page for Umroh service bookings based on Figma designs and integrated it with APIs. I collaborated with Back-end Developers, QA Engineers, and Project Managers. Additionally, I contributed to fixing bugs and improving application performance",
    ],
    skills: ["Front-end Development", "Tailwind CSS", "TypeScript", "Next.js"],
  },
  {
    id: 3,
    title: "Freelance Software Engineer",
    company: "Teman Cuan · Remote",
    duration: "Apr 2023 - Aug 2023",
    responsibilities: [
      "Developed Admin Teman CUan a tool for managing a social network website with features like user login, signup, and CRUD functionalities for admin, talent, and content management. I created an intuitive UI, integrated external APIs, and implemented secure authentication with Axios. I collaborated with team and contributing to bug fixes.",
    ],
    skills: [
      "Next.js",
      "Front-end Development",
      "TypeScript",
      "Ant Design",
      "Tailwind CSS",
      "WebSocket",
    ],
  },
  {
    id: 4,
    title: "Full Time Software Engineer",
    company: "Haitoko · Semarang",
    duration: "Oct 2022 - Mar 2023",
    responsibilities: [
      "I designed and implemented scalable e-commerce dashboards (Haifood, Haipaket, Haimart) using React.js, Next.js, TypeScript, and AntDesign. I integrated RESTful APIs, real-time notifications, and live driver locations using MQTT and WebSocket.",
    ],
    skills: [
      "Front-end Development",
      "TypeScript",
      "React.js",
      "Ant Design",
      "Next.js",
      "WebSocket",
    ],
  },
  {
    id: 5,
    title: "Full Time Software Engineer",
    company: "KodingWorks · Semarang",
    duration: "May 2022 - Mar 2023",
    responsibilities: [
      "Developed scalable dashboards for hotel management and the APMF 2022 Event using React.js, TypeScript, and AntDesign, integrating RESTful APIs for data consumption. and as an intern leader, I mentored and supported interns, enhancing their technical and soft skills.",
    ],
    skills: [
      "TypeScript",
      "React.js",
      "Ant Design",
      "JavaScript",
      "Next.js",
      "Scrum Master",
    ],
  },
  {
    id: 6,
    title: "Internship Software Engineer",
    company: "Kodingworks · Semarang",
    duration: "Feb 2022 - Apr 2022",
    responsibilities: [
      "Learned and applied skills in Javascript and React during the internship. Learn project with clone haripanen, make cart logic",
    ],
    skills: ["Material-UI", "React.js", "JavaScript"],
  },
  {
    id: 7,
    title: "Full Time IT Mentor",
    company: "IDN Boarding School · Bogor",
    duration: "Jun 2020 - Dec 2021",
    location: "Bogor, West Java, Indonesia · On-site",
    responsibilities: [
      "Developed some projects including Ojek Online, News, Absensi Apps, and a Food Website, integrating APIs like CRUD and Google Maps, employing MVVM design patterns. Additionally, I instructed vocational high school and college students in Android and Website development, covering Kotlin, Laravel, JavaScript, MySQL, PHP, Firebase, and API implementation.",
    ],
    skills: [
      "Kotlin",
      "Android",
      "JavaScript",
      "Laravel",
      "Tailwind CSS",
      "Firebase",
      "MySQL",
    ],
  },
  {
    id: 8,
    title: "Internship Android Developer",
    company: "Kazee · Bandung",
    duration: "Oct 2019 - Dec 2019",
    location: "Bandung, West Java, Indonesia · On-site",
    responsibilities: [
      "Work collaborate with team as intern, Create project Waktoo App, Attendance management apps.",
    ],
    skills: ["Kotlin", "Android", "Model-view-viewmodel (MVVM)"],
  },
];

export const services = [
  {
    id: 1,
    title: "Front End Engineer",
    desc: "I proficiently craft dynamic web interfaces utilizing modern frameworks such as React.js and Next.js, ensuring seamless user experiences across various platforms",
  },
  {
    id: 2,
    title: "UI Engineer",
    desc: "I proficiently convert Figma designs into responsive HTML and CSS code. With experience in implementing designs into functional code. I'm ready to help bring your design vision to life",
  },
  {
    id: 3,
    title: "IT Mentor",
    desc: "With a passion for sharing knowledge, I offer comprehensive training services in web development. I'm here to support your learning journey!",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/firyalhfz",
  },
  {
    id: 2,
    img: "/medium.png",
    link: "https://medium.com/@firyalhfz",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/firyal-huwaida-fauzi/",
  },
];
