// lib/googleSheets.ts
// Server-only utility — never import this in client components

import { google } from "googleapis";

/**
 * Returns an authenticated Google Sheets client using
 * a Service Account (credentials stored in env vars, never exposed to browser).
 */
export async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

/**
 * Appends a row of values to the given sheet.
 * @param spreadsheetId  The Sheet ID from the URL
 * @param range          e.g. "Sheet1!A1"
 * @param values         Flat array of cell values for one row
 */
export async function appendRow(
  spreadsheetId: string,
  range: string,
  values: (string | boolean | null)[]
) {
  const sheets = await getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });
}