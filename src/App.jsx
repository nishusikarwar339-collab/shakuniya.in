import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
// ✅ SERVICE PAGES (ADD THESE)
import AndroidDevelopment from "./pages/services/AndroidDevelopment";
import IosDevelopment from "./pages/services/IosDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import ITConsultant from "./pages/services/ITConsultant";
import LiveStreaming from "./pages/products/LiveStreaming";
import AudioStreaming from "./pages/products/AudioStreaming";
import SocialMedia from "./pages/products/SocialMedia";
import ShoppingApps from "./pages/products/ShoppingApps";
import Games from "./pages/products/Games";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         {/* ✅ SERVICES */}
        <Route path="/services/android" element={<AndroidDevelopment />} />
        <Route path="/services/ios" element={<IosDevelopment />} />
        <Route path="/services/website" element={<WebsiteDevelopment />} />
        <Route path="/services/software" element={<SoftwareDevelopment />} />
        <Route path="/services/it-consultant" element={<ITConsultant />} />
        <Route path="career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />  
          <Route path="/products/live-streaming" element={<LiveStreaming />} />
          <Route path="/products/audio-streaming" element={<AudioStreaming />} />
          <Route path="/products/social-media" element={<SocialMedia />} />
          <Route path="/products/shopping" element={<ShoppingApps />} />
          <Route path="/products/games" element={<Games />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
