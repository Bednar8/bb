import Image from "next/image";
import projects from "@/app/data/projects.json";
import Link from "next/link";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Projects:
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              href={`/project/${project.slug}`}
              key={project.name}
              className="group"
            >
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {project.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <Form />
      </section>
    </div>
  );
}
