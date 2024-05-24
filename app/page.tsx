import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import { Services } from "@/components/Services";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
      <div className=" w-full">
        <NavBar />
        <Hero />
        <Grid />
        <RecentProjects />
        <Work />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
