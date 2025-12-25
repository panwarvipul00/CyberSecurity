import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import Issue from "@/models/Issue";
import { sendEmail } from "@/lib/email";

// ==============================
// GET ALL ISSUES (PROTECTED)
// ==============================
export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { id: string };

    const issues = await Issue.find({
      userId: decoded.id,
    }).sort({ createdAt: -1 });

    return NextResponse.json(issues);

  } catch (err) {
    console.error("GET ISSUES ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ==============================
// CREATE ISSUE (PROTECTED)
// ==============================
export async function POST(req: Request) {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { id: string };

    const { title, description, type } = await req.json();

    if (!title || !description || !type) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const issue = await Issue.create({
      title,
      description,
      type,
      userId: decoded.id,
    });

    // Email (testing mode safe)
    try {
      await sendEmail({
        to: "panwarvipul1234@gmail.com",
        subject: "New Issue Created 🚨",
        html: `
          <h3>New Issue Created</h3>
          <p><b>Title:</b> ${issue.title}</p>
          <p><b>Type:</b> ${issue.type}</p>
          <p><b>Description:</b> ${issue.description}</p>
        `,
      });
    } catch (e) {
      console.error("EMAIL ERROR:", e);
    }

    return NextResponse.json(issue, { status: 201 });

  } catch (err) {
    console.error("CREATE ISSUE ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
