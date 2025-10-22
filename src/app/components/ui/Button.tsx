export default function Button({
	children,
	type,
}: {
	children: React.ReactNode
	type?: string
}) {
	if (type === "outline") {
		return (
			<button className="bg-transparent border border-white text-white px-8 py-3 cursor-pointer rounded-[100px] uppercase">
				{children}
			</button>
		)
	}
	if (type === "light") {
		return (
			<button className="bg-light-gray text-dark px-8 py-3 cursor-pointer rounded-[100px] uppercase font-bold">
				{children}
			</button>
		)
	}
	if (type === "dark") {
		return (
			<button className="bg-dark text-light-gray px-8 py-3 cursor-pointer rounded-[100px]">
				{children}
			</button>
		)
	}
	return (
		<button className="bg-dark text-light-gray px-8 py-3 cursor-pointer rounded-[100px]">
			{children}
		</button>
	)
}
