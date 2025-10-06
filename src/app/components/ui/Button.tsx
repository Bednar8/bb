export default function Button({children}: {children: React.ReactNode}) {
	return (
		<button className="bg-dark px-8 py-3 text-light-gray cursor-pointer rounded-[100px]">
			{children}
		</button>
	)
}
