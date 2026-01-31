import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AdvantagesSection from "../components/AdvantagesSection";
import StatsSection from "../components/StatsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
