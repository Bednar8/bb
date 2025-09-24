import Image from "next/image";
import projects from "@/app/data/projects.json";
import Link from "next/link";
import Form from "./components/Form";

console.log(projects);

export default function Home() {
  return (
    <div>
      <div>
        <h2>Projcets:</h2>
        {projects.map((project) => (
          <Link href={`/project/${project.slug}`} key={project.name}>
            <div>
              {project.name}
              <Image
                src={project.image}
                alt={project.name}
                width={100}
                height={100}
              />
            </div>
          </Link>
        ))}
      </div>
      <Form />
    </div>
  );
}
