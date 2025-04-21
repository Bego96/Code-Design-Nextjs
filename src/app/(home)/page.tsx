import Header from "./components/header/header";
import Brands from "./components/brands/brands";
import AboutUs from "./components/aboutUs/aboutUs";
import Services from "./components/services/services";
import NewProjects from "./components/newProjects/newProjects";
import ContactUs from "./components/contactUs/contactUs";
import { HomeNav } from "./components/homeNav/homeNav";
import { HomeSidebar } from "./components/homeNav/homeSidebar";
import Footer from "./components/footer/footer";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <div>
      <Header />
      <AnimatedSection delay={0.2}>
        <Brands />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <NewProjects />
      </AnimatedSection>
      <AnimatedSection delay={1}>
        <ContactUs />
      </AnimatedSection>
    </div>
  );
}

