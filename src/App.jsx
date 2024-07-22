import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

import WorkFlow from "./Components/WorkFlow";

function App() {
  return (
    <>
      <NavBar />
      <div className=" max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
