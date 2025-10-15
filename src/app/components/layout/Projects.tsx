import projects from "@/app/data/projects.json";
import Project from "../ui/Project";

export default function Projects() {
  return (
    // <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-20">
    <div className="container">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
