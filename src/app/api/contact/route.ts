import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "jenniferds1994@gmail.com",
      to: "jenniferdsbaumgart@gmail.com",
      replyTo: email,
      subject: `Mensagem de ${name} - ${subject}`,
      html: `
        <h1>Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message: "Error sending message",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
