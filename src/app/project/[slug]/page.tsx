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
    <div className="mx-auto my-16 max-w-5xl px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="relative h-64 w-full sm:h-80 md:h-96">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h1 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h1>
          <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
