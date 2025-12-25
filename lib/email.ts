import { Resend } from "resend";

console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
console.log("FROM_EMAIL:", process.env.FROM_EMAIL);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  console.log("📧 Sending email to:", to);

  const result = await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to,
    subject,
    html,
  });

  console.log("📨 Resend response:", result);
  return result;
}
