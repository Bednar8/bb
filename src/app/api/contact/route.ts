import {NextRequest, NextResponse} from "next/server"
// import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const data = await req.json() // odczyt danych z frontu
		console.log("Otrzymane dane:", data)

		// const transporter = nodemailer.createTransport({
		//   host: "host",
		//   port: 465,
		//   secure: true, // true for 465, false for other ports
		//   auth: {
		//     user: "mail",
		//     pass: "pass",
		//   },
		// });

		// // Wrap in an async IIFE so we can use await.
		// await transporter.sendMail({
		//   from: "Test123 <mail>",
		//   to: data.email,
		//   subject: "Temat test",
		//   text: "Testowy text", // plain‑text body
		//   html: "<b>Testowy html</b>", // HTML body
		// });

		return NextResponse.json({
			status: "success",
			message: "Formularz wysłany!",
		})
	} catch (error: unknown) {
		console.error(error)
		const errorMessage =
			error instanceof Error ? error.message : "Nieznany błąd"
		return NextResponse.json(
			{message: "Błąd przy wysyłce maila", error: errorMessage},
			{status: 500}
		)
	}
}
