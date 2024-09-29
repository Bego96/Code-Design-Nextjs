
import Header from "./components/header/header";
import Brands from "./components/brands/brands";
import AboutUs from "./components/aboutUs/aboutUs";
import Services from "./components/services/services";
import NewProjects from "./components/newProjects/newProjects";
import ContactUs from "./components/contactUs/contactUs";
import { HomeNav } from "./components/homeNav/homeNav";
import { HomeSidebar } from "./components/homeNav/homeSidebar";
import Footer from "./components/footer/footer";


export default function Home() {

  return (
    <div>
      
      <Header />
      <Brands />
      <AboutUs />
      <Services />
      <NewProjects />
      <ContactUs />
      
    </div>
  );
}

