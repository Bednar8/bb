import projects from "@/app/data/projects.json";
import Image from "next/image";

type ProjectPageProps = {
  params: { slug: string };
};

async function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    // 404!
    return <p>Not Found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
