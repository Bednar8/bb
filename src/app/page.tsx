import Form from "./components/layout/Form"
import Hero from "./components/layout/Hero"
import ProjectSteps from "./components/layout/ProjectSteps"
import Projects from "./components/layout/Projects"
import OfferCards from "./components/layout/OfferCards"

export default function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<div className="bg-dark text-gray">
				<div className="container">
					<ProjectSteps />
					<OfferCards />
				</div>
			</div>
			<Form />
		</div>
	)
}
