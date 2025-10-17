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
			<div className="container relative  pt-14 pb-40">
				<h5 className="mb-8 hidden lg:block">
					Have a Project? <span>Let`s talk!</span>
				</h5>
				<form onSubmit={handleSubmit} className="">
					<div className="space-y-5">
						{inputs.map((input) => (
							<div key={input.name} className="flex flex-col">
								{/* <label htmlFor={input.name} className="capitalize">
									{input.name}
								</label> */}
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

				<Image
					src="/assets/shapes/contact_shape_mobile.png"
					alt=""
					width={450}
					height={200}
					className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[unset]"
				/>
				{statusMessage && (
					<p className="mt-4 text-center text-sm">{statusMessage}</p>
				)}
			</div>
		</div>
	)
}
