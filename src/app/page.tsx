import Hero from "@/app/components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";
import Hits from "./components/Hits/Hits";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Services />
      <Hits />
      <About />
      <Faq />
      <Gallery />
      <Contacts />
    </>
  );
}
