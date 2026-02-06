import HeroSlider from "../components/HeroSlider";
import StatsCounter from "../components/StatsCounter";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
        <HeroSlider />
        <AboutUs />
        <StatsCounter />
        <Gallery/>
        <ContactSection />
    </>
    );  
}
