import Link from "next/link"
import Button from "./Button"
import Image from "next/image"

export default function OfferCard({title, url}: {title: string; url: string}) {
	return (
		<div className="relative h-[360px] w-full border border-third-white rounded-lg flex flex-col justify-between items-center pt-7 pb-9 overflow-hidden lg:items-start lg:px-12 lg:py-11 z-0">
			<Image
				src="/assets/shapes/earth.png"
				alt={title}
				width={1000}
				height={1000}
				className="absolute bottom-[-300px] right-[-300px] w-[600px] max-w-[unset] z-[-1] lg:w-[700px] rotate-[-45deg] lg:right-[-200px] lg:bottom-[-350px]"
			/>
			<h3 className="text-2xl text-third-white">{title}</h3>
			<Link href={url}>
				<Button type="outline">See more</Button>
			</Link>
		</div>
	)
}
