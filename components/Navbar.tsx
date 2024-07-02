import { FloatingNav } from "./ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaHandHoldingHeart, FaMessage, FaUser } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { BsLaptopFill } from "react-icons/bs";

export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <BsLaptopFill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    // {
    //   name: "Experiences",
    //   link: "#experiences",
    //   icon: (
    //     <MdOutlineWork className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
    {
      name: "Services",
      link: "#services",
      icon: (
        <FaHandHoldingHeart className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
