import Image from "next/image"

type Project = {
	name: string
	description: string
	image: string
	link: string
	slug: string
	type: string
	tags: string[]
}

export default function Project({project}: {project: Project}) {
	return (
		<div className="border-t-[1px] py-5 border-[#E5E5E5]">
			<div className="flex flex-col gap-5 lg:flex-row flex-wrap justify-between items-center">
				<h4 className="text-base uppercase">{project.name}</h4>
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
	)
}
