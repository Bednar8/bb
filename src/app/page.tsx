import Form from "./components/layout/Form";
import Hero from "./components/layout/Hero";
import ProjectSteps from "./components/layout/ProjectSteps";
import Projects from "./components/layout/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <div className="bg-dark text-gray">
        <div className="container">
          <ProjectSteps />
        </div>
      </div>
      <Form />
    </div>
  );
}
