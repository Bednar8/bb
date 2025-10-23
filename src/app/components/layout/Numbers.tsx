import Image from "next/image"
import DiscountBadge from "../ui/DiscountBadge"

const numbers = [
	{
		heading: "$9B",
		description: "Assets on Platform, as of June 30, 2025.",
	},
	{
		heading: "50%",
		description: "Institutional trading counterparties, making Galaxy",
	},
	{
		heading: "1.4K",
		description: "Institutional trading counterparties, making",
	},
	{
		heading: "2000$",
		description: "Assets on Platform, as of June 30, 2025.",
	},
]

export default function Numbers() {
	return (
		<div className="mt-20 lg:flex lg:items-center lg:justify-between lg:gap-24">
			<div>
				<DiscountBadge />
				<h2 className="mt-3.5 text-secondary-white text-2xl uppercase lg:text-5xl">
					DOES OUR HEL<span className="text-light-violet">P MATTER?</span>
				</h2>
				<p className="mt-2.5 pb-5 lg:pb-14 text-gray">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500s,
				</p>
				<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
					{numbers.map((number) => (
						<div key={number.heading}>
							<h3 className="text-secondary-white text-2xl">
								{number.heading}
							</h3>
							<p className="text-gray">{number.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className="mt-6">
				<Image
					src="/assets/shapes/shape_stats_1.png"
					alt="Numbers"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	)
}
