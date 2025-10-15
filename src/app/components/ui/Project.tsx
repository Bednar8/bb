import Image from "next/image";

export default function Project({ project }: { project: any }) {
  return (
    <div className="mt-14">
      <div className="flex flex-col gap-4 lg:flex-row flex-wrap justify-between">
        <h2>{project.name}</h2>
        <Image
          //   src={project.image}
          src="/assets/shapes/no-img.png"
          alt={project.name}
          width={1500}
          height={1000}
          className="lg:order-1"
        />
        <div className="flex gap-2 flex-wrap">
          {project.type && (
            <p className="border border-dark-gray rounded-3xl px-2 py-1">
              {project.type}
            </p>
          )}
          {project.tags.map((tag: string) => (
            <p key={tag} className="text-white bg-dark rounded-3xl px-2 py-1">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
