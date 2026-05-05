// app/api/submit-contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { subject, name, phone, email, district, message } = body;

    // ── Basic server-side validation ──────────────────────────────────────
    if (!name || !phone || !message || !subject) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_CONTACT_SHEET_ID!;

    // ── Append row to Google Sheet ─────────────────────────────────────────
    // Column order must match your sheet headers:
    // Timestamp | Subject | Name | Phone | Email | District | Message
    await appendRow(sheetId, "Sheet1!A1", [
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      subject,
      name,
      phone,
      email || "",
      district || "",
      message,
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[submit-contact]", err);
    return NextResponse.json(
      { error: "Failed to save submission. Please try again." },
      { status: 500 }
    );
  }
}