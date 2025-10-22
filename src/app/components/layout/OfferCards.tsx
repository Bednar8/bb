import offer from "@/app/data/offer.json"
import OfferCard from "../ui/OfferCard"

export default function OfferCards() {
	return (
		<div className="flex flex-col gap-9 lg:flex-row lg:gap-6 lg:mt-36">
			{offer.map((item) => (
				<OfferCard key={item.title} title={item.title} url={item.url} />
			))}
		</div>
	)
}
