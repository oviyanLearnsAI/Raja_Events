import Loader from "@/components/loader";
import Hero from "@/components/sections/hero";
import Services from "../components/sections/services";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import CallToAction from "@/components/sections/call-to-action";
import Contact from "@/components/sections/contact";
import Stats from "@/components/sections/stats";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      {/* <CallToAction /> */}
      <Contact />
    </>
  );
}
