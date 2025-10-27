import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import { Contact } from "../components/ContactUs";
import ContactsBar from "../components/ContactsBar";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ServicesSection from "../components/ServicesSection";
import { Testimonial } from "../components/Testimonial";
import { Footer } from "../components/Footer";

function Home() {
  const heroStyle = {
    backgroundImage: "url('./hero.svg')",
    backgroundPosition: "center -40px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const serviceStyle = {
    backgroundImage: "url('./transport.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  return (
    <>
      <ContactsBar />
      <NavBar /> {/* ✅ No props needed now */}
      <div className="relative overflow-hidden">
        <motion.div
          className="z-5 mb-8"
          style={heroStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-theme"
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      <FeaturesSection />
      <AboutUs />

      <div className="relative overflow-hidden">
        <motion.div
          style={serviceStyle}
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ServicesSection />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-theme"
          initial={{ x: "0%" }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
