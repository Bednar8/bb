import Form from "./components/Form";
import Hero from "./components/layout/Hero";
import Projects from "./components/layout/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <div className="mx-auto container">
        <section>
          <Form />
        </section>
      </div>
    </div>
  );
}
