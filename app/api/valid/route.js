import { verifyAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await verifyAuth();
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
