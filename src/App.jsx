import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FirstSection } from "./components/FirstSection";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Wrapper />
        <Header />
        <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />

      {/* <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div> */}
    </>
  );
}

export default App;
