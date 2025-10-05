"use client"

import Image from "next/image"
import Link from "next/link"
import {useState} from "react"

const menuItems = [
	{
		label: "Portfolio",
		href: "/projects",
	},
	{
		label: "E-commerce stores",
		href: "/e-commerce-stores",
	},
	{
		label: "Business websites",
		href: "/business-websites",
	},
	{
		label: "Our story",
		href: "/our-story",
	},
	{
		label: "Let's talk",
		href: "/contact",
	},
]

const socialItems = [
	{
		label: "Instagram",
		href: "/instagram",
	},
	{
		label: "TikTok",
		href: "/tiktok",
	},
	{
		label: "Behance",
		href: "/behance",
	},
	{
		label: "Insights",
		href: "/insights",
	},
]

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => {
		document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<nav className="flex items-center gap-4 text-xs">
			<div className="md:hidden" onClick={toggleMenu}>
				{isMenuOpen ? (
					<Image
						src="/assets/icons/close.svg"
						alt="Close menu"
						width={24}
						height={24}
					/>
				) : (
					"☰"
				)}
			</div>
			<div className="hidden md:block space-x-4 uppercase">
				{menuItems.map((item) => (
					<Link
						href={item.href}
						key={item.label}
						{...(item.href === "/contact" && {
							className: "border rounded-3xl py-3 px-6 border-light-gray",
						})}>
						{item.label}
					</Link>
				))}
			</div>

			<div
				className={`md:hidden absolute top-[80px] transition-all duration-300 ${
					isMenuOpen ? "right-[0%]" : "right-[-110%]"
				} w-full h-[calc(100dvh-80px)] bg-dark text-light-gray flex flex-col justify-between py-10 px-5 uppercase`}>
				<div className="flex flex-col gap-9 text-base">
					{menuItems.map((item) => (
						<div
							key={item.label}
							className={`menu-link-animate ${isMenuOpen ? "active" : ""}`}>
							<Link href={item.href}>{item.label}</Link>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-4 text-xs">
					{socialItems.map((item) => (
						<div
							key={item.label}
							className={`social-link-animate ${isMenuOpen ? "active" : ""}`}>
							<Link href={item.href}>{item.label}</Link>
						</div>
					))}
				</div>
			</div>
		</nav>
	)
}
