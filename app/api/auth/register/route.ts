import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // ✅ SEND WELCOME EMAIL (RESEND)
    try {
      await sendEmail({
        to: user.email,
        subject: "Welcome to ApiSec 🎉",
        html: `
          <h2>Welcome ${user.name}!</h2>
          <p>Your account has been successfully created.</p>
          <p>You can now manage security issues on <strong>ApiSec</strong>.</p>
          <br />
          <p>🚀 Happy hacking!</p>
        `,
      });
    } catch (emailError) {
      // Email failure should NOT break registration
      console.error("Email send failed:", emailError);
    }

    return NextResponse.json(
      { message: "User registered", userId: user._id },
      { status: 201 }
    );

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}
