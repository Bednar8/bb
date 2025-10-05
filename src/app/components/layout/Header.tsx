import Link from "next/link"
import Menu from "./Menu"

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-dark text-light-gray">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 h-full">
				<Link href="/" className="text-sm font-medium">
					BBAI
				</Link>
				<Menu />
			</div>
		</header>
	)
}
