import { verifyAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { user, session } = await verifyAuth();

    // If user or session is not found, return 401
    if (!user || !session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Return the userId as JSON
    return NextResponse.json({ userId: user.id }, { status: 200 });
  } catch (err) {
    console.error("Authentication failed:", err);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
