import Image from "next/image"

export default function ServiceBox({
	title,
	icon,
	description,
}: {
	title: string
	icon: string
	description: string
}) {
	return (
		<div className="bg-light-black py-5 px-6 rounded-xl relative lg:flex lg:flex-col lg:justify-between hover:shadow-[0px_-2px_5px_-1px_#D7D1EF] transition-all duration-300 lg:min-h-[275px] lg:py-8">
			<div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
				<div className="flex items-center justify-center w-[60px] h-[60px] bg-secondary-black rounded-md">
					<Image src={icon} alt={title} width={30} height={30} />
				</div>
				<h3 className="mt-6 mb-9 text-secondary-white text-2xl  lg:mt-0">
					{title}
				</h3>
			</div>
			<p className="text-gray">{description}</p>
		</div>
	)
}
