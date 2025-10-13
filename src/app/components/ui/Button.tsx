export default function Button({
	children,
	type,
}: {
	children: React.ReactNode
	type?: string
}) {
	return (
		<button
			className={`${
				type === "light" ? "bg-light-gray text-dark" : "bg-dark text-light-gray"
			}  px-8 py-3  cursor-pointer rounded-[100px]`}>
			{children}
		</button>
	)
}
