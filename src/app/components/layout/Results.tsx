import Image from "next/image"

export default function Results() {
	return (
		<div className="mt-20 lg:flex lg:items-center lg:justify-between lg:gap-24">
			<div className="hidden lg:block">
				<Image
					src="/assets/shapes/shape_stats_2.png"
					alt="Results"
					width={1000}
					height={1000}
				/>
			</div>
			<div>
				<h2 className="mt-3.5 text-secondary-white text-2xl uppercase lg:text-5xl">
					WE BRING RES
					<span className="text-light-violet">ULTS FOR YOU, NOT FOR US</span>
				</h2>
				<p className="mt-2.5 pb-5 lg:pb-14 text-gray">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500s,
				</p>
				<div className="flex flex-col items-center lg:flex-row gap-3">
					<div>
						<Image
							src="/assets/shapes/ad_spent_1.png"
							alt="Results"
							width={500}
							height={500}
						/>
					</div>
					<div>
						<Image
							src="/assets/shapes/ad_spent_2.png"
							alt="Results"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
