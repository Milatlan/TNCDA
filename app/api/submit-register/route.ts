// app/api/submit-register/route.ts
// POST handler — runs on the server, credentials never reach the client

import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, profession, company, area } = body;

    // ── Basic server-side validation ──────────────────────────────────────
    if (!name || !phone || !profession || !area) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_REGISTER_SHEET_ID!;

    // ── Append row to Google Sheet ─────────────────────────────────────────
    // Column order must match your sheet headers:
    // Timestamp | Name | Phone | Email | Profession | Company | Area
    await appendRow(sheetId, "Sheet1!A1", [
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name,
      phone,
      email || "",
      profession,
      company || "",
      area,
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[submit-register]", err);
    return NextResponse.json(
      { error: "Failed to save submission. Please try again." },
      { status: 500 }
    );
  }
}