import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function GET() {
  try {
    const result = await sendEmail({
      to: "panwarvipul1234@gmail.com", // replace
      subject: "Resend Isolation Test",
      html: "<h1>Email works 🎉</h1>",
    });

    return NextResponse.json({ success: true, result });
  } catch (err: any) {
    console.error("EMAIL ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
