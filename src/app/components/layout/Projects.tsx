import projects from "@/app/data/projects.json"
import Project from "../ui/Project"

export default function Projects() {
	return (
		// <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-20">
		<div className="container mt-14 border-b-[1px] pb-5 border-[#E5E5E5]">
			{projects.map((project) => (
				<Project key={project.name} project={project} />
			))}
		</div>
	)
}
