import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className=" max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
