import { sendEmail } from "@/actions/email.actions";
import { EmailTemplate } from "@/components/emailComp";
import MapCard from "@/components/map/map-card";

import { Resend } from "resend";

export default async function ContactPage() {
  async function send() {
    "use server";
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gafita.diana12@gmail.com"],
      subject: "Hello World",
      react: EmailTemplate({ firstName: "John" }),
    });

    console.log(data);
  }
  return (
    <div>
      <form action={send}>
        <button type="submit">Send email</button>
      </form>
      <MapCard />
    </div>
  );
}
