import Benifits from "./components/Benifits/Benifits";
import { CTA } from "./components/CTA/CTA";
import { FaqSection } from "./components/FAQ/FAQ";
import { FounderNote } from "./components/FounderNote/FounderNote";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partner from "./components/Partner/Partner";
import { ProblemSection } from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { UseCase } from "./components/UseCase/UseCase";
// import Challenge from "./components/challenge/Challenge";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partner />
      <ProblemSection />
      <Solution />
      <Benifits />
      <UseCase />
      <Testimonials />
      <CTA />
      <FaqSection />
      <FounderNote />
    </>
  );
}

export default App;
