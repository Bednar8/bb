import ServiceBox from "../ui/ServiceBox"

const services = [
	{
		title: "UI / UX Design",
		icon: "/assets/icons/design.svg",
		description:
			"We craft intuitive and engaging interfaces that make every interaction smooth, enjoyable, and goal-driven.",
	},
	{
		title: "Web maintenance",
		icon: "/assets/icons/design.svg",
		description:
			"We build seamless online stores with optimized user flows that turn visitors into loyal customers.",
	},
	{
		title: "Web Design",
		icon: "/assets/icons/design.svg",
		description:
			"We design visually striking and conversion-focused websites that reflect your brand and engage your audience.",
	},
	{
		title: "Ecommerance store",
		icon: "/assets/icons/design.svg",
		description:
			"We keep your website secure, updated, and performing flawlessly — so you can focus on growing your business.",
	},
]

export default function Services() {
	return (
		<div className="mt-16">
			<div className="lg:max-w-1/2">
				<h2 className="mt-3.5 text-secondary-white text-2xl uppercase lg:text-5xl">
					THIS MAGIC WE PR
					<span className="text-light-violet">OVIDE</span>
				</h2>
				<p className="mt-2.5 pb-7 lg:pb-14 text-gray">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500s,
				</p>
			</div>
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{services.map((service) => (
					<ServiceBox key={service.title} {...service} />
				))}
			</div>
		</div>
	)
}
