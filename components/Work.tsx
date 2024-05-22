import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import { SparklesCore } from "./ui/Sparkles";

const Work = () => {
  const experiences = [
    {
      id: 1,
      title: "Freelance Software Engineer",
      company: "Self-employed",
      duration: "Jan 2024 - Present · 5 mos",
      responsibilities: [
        "Create Responsive Website Landing page, Laundry Website using Next Js 13 + Tailwind CSS.",
        "There are features Services, Price List, About Company, Contact Company, How to Order, FaQs.",
      ],
      skills: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Front-end Development",
      ],
    },
    {
      id: 2,
      title: "Software Engineer (Front End)",
      company: "Umrohin.Id · Part-time",
      duration: "Nov 2023 - Dec 2023 · 2 mos",
      location: "Bandung, West Java, Indonesia · Hybrid",
      responsibilities: [
        "Developed a responsive web landing page based on Figma designs using Next.js and Tailwind CSS",
        "Developed features for Umroh service bookings, including lists for Ustadz, Umroh packages, detailed package information, agencies, facilities, and Umroh categories.",
        "Implemented GET API to dynamically fetch and display data on the landing page.",
        "Enhanced user experience by providing real-time information on Umroh packages, Ustadz profiles, and related details.",
        "Resolved bugs to ensure a seamless and error-free user experience.",
      ],
      skills: [
        "Front-end Development",
        "Tailwind CSS",
        "TypeScript",
        "Next.js",
      ],
    },
    {
      id: 3,
      title: "Software Engineer (Front End)",
      company: "Teman Cuan · Freelance",
      duration: "Apr 2023 - Aug 2023 · 5 mos",
      location: "Remote",
      responsibilities: [
        "Created 'Admin Cuan,' an all-inclusive administrative system with features like user login, signup, and CRUD functionalities for admin, talent, user management, promo, category, product-service.",
        "Employed React.js, Next.js, AntDesign, and Tailwind CSS for an intuitive and visually pleasing user interface.",
        "Integrated external APIs to enrich the application's functionality by fetching and manipulating data.",
        "Implemented secure authentication login using Axios to protect user data and maintain system integrity.",
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
      title: "Software Engineer (Front End)",
      company: "haitoko · Contract",
      duration: "Oct 2022 - Mar 2023 · 6 mos",
      location: "Semarang, Central Java, Indonesia · Remote",
      responsibilities: [
        "Designing and implementing scalable Dashboard product (Haifood, Haipaket, Haimart) for e-commerce management app using React.js, Next.js, TypeScript, and AntDesign.",
        "Implementation RESTful API design and integrating APIs into applications to consume data from external sources.",
        "Implementation of notification and showing the live location of a driver using MQTT and WebSocket involves integrating real-time communication technologies into a web application.",
        "Develop features for managing transactions, merchants, admin, categories, status, products, banners, and importing data using Excel and zip folder.",
        "Implementation authentication login using Axios.",
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
      title: "Software Engineer",
      company: "KodingWorks",
      duration: "May 2022 - Mar 2023 · 11 mos",
      location: "Semarang, Central Java, Indonesia",
      responsibilities: [
        "Develop scalable Dashboard product for hotel management app using React.js, TypeScript, AntDesign.",
        "Create a Dashboard for managing APMF 2022 Event including its feature such as bookmark schedule, managing banners, managing sponsors, etc.",
        "Implementation RESTful API design and integrating APIs into my applications to consume data from external sources.",
        "Worked as an intern leader, guiding and mentoring other interns in their learning and development.",
        "Provided support and guidance to the interns, helping them improve their technical and soft skills.",
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
      title: "Software Engineer",
      company: "Internship",
      duration: "Feb 2022 - Apr 2022 · 3 mos",
      responsibilities: [
        "Learned and applied skills in Javascript and React during the internship.",
        "Worked on cloning haripanen.id website using Material UI and implementing Cart logic.",
        "Proficient in using Javascript, React, and Material UI to build web applications.",
      ],
      skills: ["Material-UI", "React.js", "JavaScript"],
    },
    {
      id: 7,
      title: "IT Mentor",
      company: "IDN Boarding School · Full-time",
      duration: "Jun 2020 - Dec 2021 · 1 yr 7 mos",
      location: "Bogor, West Java, Indonesia · On-site",
      responsibilities: [
        "Developed various projects including an Ojek Online App, News App, Absensi App, and Food Website.",
        "Implemented APIs such as API CRUD and API Google Maps and utilized design patterns MVVM.",
        "Taught Android and Website to vocational high school and college students, covering topics like Kotlin, Laravel, JavaScript, MySQL, PHP, and Firebase, as well as API implementation and design patterns.",
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
      title: "Android Developer",
      company: "Kazee · Internship",
      duration: "Oct 2019 - Dec 2019 · 3 mos",
      location: "Bandung, West Java, Indonesia · On-site",
      responsibilities: [
        "Create project Waktoo App, Attendance management apps.",
        "Full-time Internship as Android Developer and work collaborate with team.",
        "Responsible for building and developing the app's features. I worked on implementing the CRUD API using Kotlin, which allowed the app to perform create, read, update, and delete operations on data.",
      ],
      skills: ["Kotlin", "Android", "Model-view-viewmodel (MVVM)"],
    },
  ];

  return (
    <div className="mt-40">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <TracingBeam className="mt-20 relative z-20">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col text-start experience-item mb-8 rounded-2xl border p-4 border-white/[0.1]"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <h2 className="font-bold text-xl">{exp.title}</h2>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.duration}</p>
              {exp.location && <p className="text-gray-500">{exp.location}</p>}
              <ul className="list-disc list-inside mt-2">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
};

export default Work;
