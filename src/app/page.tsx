import { About, Hero, Journal, Navbar, WhoIsItFor } from "@/app/components";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoIsItFor />
      <About />
      <Journal />
    </>
  );
}
