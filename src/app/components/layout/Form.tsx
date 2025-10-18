"use client"

import Image from "next/image"
import {useState} from "react"

const inputs = [
	{
		name: "name",
		type: "text",
		placeholder: "Full name",
	},
	{
		name: "email",
		type: "email",
		placeholder: "Email",
	},
]

export default function Form() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	})
	const [statusMessage, setStatusMessage] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value})
		console.log(formData)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
			const data = await res.json()
			if (data.status === "success") {
				setStatusMessage("Success")
			} else {
				setStatusMessage("Error")
			}
		} catch (err) {
			console.log(err)
			setStatusMessage("Error while send data")
		}
	}

	return (
		<div className="bg-[linear-gradient(#0e0e0e_0%,_#9d85a4_164%)] text-[#D3D3D3] overflow-hidden">
			<div className="container relative  pt-14 pb-40 lg:flex justify-between lg:gap-12">
				<div className="mb-[300px] hidden lg:block lg:w-1/2">
					<h5 className="text-5xl uppercase ">
						Have a Project? <span className="text-[#665B6C]">Let`s talk!</span>
					</h5>
					<p className="mt-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&apos;s standard dummy
						text ever since the 1500s,
					</p>
				</div>
				<div className="lg:w-1/2 lg:border border-light-gray lg:px-14 lg:py-8 lg:rounded-3xl">
					<form onSubmit={handleSubmit} className="">
						<div className="space-y-5">
							{inputs.map((input) => (
								<div key={input.name} className="flex flex-col">
									<input
										className="border-b-1 border-[#797979] pb-3.5"
										placeholder={input.placeholder}
										type={input.type}
										name={input.name}
										id={input.name}
										onChange={handleChange}
									/>
								</div>
							))}
							<div className="pt-2">
								<input type="submit" className="" value="Send" />
							</div>
						</div>
					</form>
					<div>
						<p>Prefer email?</p>
						<a href="#">hello@bbai.com</a>
					</div>
				</div>

				<Image
					src="/assets/shapes/contact_shape_mobile.png"
					alt=""
					width={450}
					height={200}
					className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[unset] lg:hidden"
				/>
				<Image
					src="/assets/shapes/contact_shape_desktop.png"
					alt=""
					width={800}
					height={400}
					className="absolute bottom-0 left-[-300px]  max-w-[unset] hidden lg:block"
				/>
				{statusMessage && (
					<p className="mt-4 text-center text-sm">{statusMessage}</p>
				)}
			</div>
		</div>
	)
}
