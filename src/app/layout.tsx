import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "BB Development & Design",
	description: "We create amazing projects with magic ;)",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}>
				<Header />
				<main className="flex-1 mt-[80px]">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
