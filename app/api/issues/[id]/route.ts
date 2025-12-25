import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import Issue from "@/models/Issue";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const token = (await cookies()).get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    jwt.verify(token, process.env.JWT_SECRET!);

    // Try delete
    const deleted = await Issue.findByIdAndDelete(params.id);

    // ✅ If already deleted, treat as success
    if (!deleted) {
      return NextResponse.json(
        { message: "Issue already deleted" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Issue deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("DELETE ISSUE ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

