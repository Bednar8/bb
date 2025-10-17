import {NextRequest, NextResponse} from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
	try {
		const data = await req.json() // odczyt danych z frontu
		console.log("Otrzymane dane:", data)

		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: Number(process.env.EMAIL_PORT),
			secure: true, // true for 465, false for other ports
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
			tls: {
				// Nie odrzucaj nieautoryzowanych certyfikatów (dla self-signed certificates)
				rejectUnauthorized: false,
			},
		})

		// Wysyłka maila
		await transporter.sendMail({
			from: process.env.EMAIL_USER, // Twój adres (nadawca)
			to: process.env.EMAIL_USER, // Twój adres (odbiorca - dostaniesz wiadomość od użytkownika)
			replyTo: data.email, // Adres użytkownika (możesz kliknąć "odpowiedz" i mail pójdzie do niego)
			subject: `Wiadomość z formularza kontaktowego: ${
				data.name || "Brak imienia"
			}`,
			text: `
Imię: ${data.name || "Nie podano"}
Email: ${data.email}
Wiadomość: ${data.message || "Brak wiadomości"}
		`,
			html: `
			<h2>Nowa wiadomość z formularza kontaktowego</h2>
			<p><strong>Imię:</strong> ${data.name || "Nie podano"}</p>
			<p><strong>Email:</strong> ${data.email}</p>
			<p><strong>Wiadomość:</strong></p>
			<p>${data.message || "Brak wiadomości"}</p>
		`,
		})

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
