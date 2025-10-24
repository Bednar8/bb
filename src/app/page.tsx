import Form from "./components/layout/Form";
import Hero from "./components/layout/Hero";
import ProjectSteps from "./components/layout/ProjectSteps";
import Projects from "./components/layout/Projects";
import OfferCards from "./components/layout/OfferCards";
import Numbers from "./components/layout/Numbers";
import Results from "./components/layout/Results";
import Services from "./components/layout/Services";
import Logos from "./components/layout/Logos";
import Faq from "./components/layout/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <div className="bg-dark text-gray">
        <div className="container">
          <ProjectSteps />
          <OfferCards />
          <Numbers />
          <Results />
          <Services />
          <Logos />
        </div>
      </div>
      <div className="container">
        <Faq />
      </div>
      <Form />
    </div>
  );
}
