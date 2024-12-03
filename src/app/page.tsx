import {
  About,
  Contact,
  Footer,
  Hero,
  Journal,
  Navbar,
  WhoIsItFor,
} from "@/app/components";
import { Testimonials } from "@/app/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoIsItFor />
      <About />
      <Journal />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
