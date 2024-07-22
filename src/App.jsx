import FeatureSection from "./Components/FeatureSection";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Pricing from "./Components/Pricing";

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
      </div>
    </>
  );
}

export default App;
