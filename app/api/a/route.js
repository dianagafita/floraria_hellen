import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  console.log("POST request received");

  const formData = req.body; // Extract form data from request body

  console.log("AAAAA", formData);
  try {
    const resendClient = new Resend(process.env.RESEND_API_KEY);

    console.log("Sending user confirmation email...");
    const userEmailResponse = await resendClient.emails.send({
      from: "Floraria Hellen <onboarding@resend.dev>",
      to: ["gafita.diana12@gmail.com"],
      subject: "Comanda plasata cu succes",
      text: "Vă rugăm să găsiți atașată oferta solicitată.",
    });
    console.log("User email response:", userEmailResponse);

    return NextResponse.json(
      { message: "Failed to update order or send email" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update order or send email" },
      { status: 404 }
    );
  }
}
