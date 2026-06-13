import { google } from "googleapis";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const range = "RATA-RATA Pemenang!A62:B";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values ?? [];

    const data = [];

    for (const row of rows) {
      const label = row?.[0];
      const value = row?.[1];

      if (!label || !value) continue;

      const labelStr = String(label).trim();
      const num = Number(value);

      if (isNaN(num)) continue;

      // filter TOTAL / summary row
      if (
        labelStr.toLowerCase().includes("total") ||
        labelStr.toLowerCase().includes("grand total")
      ) {
        continue;
      }

      data.push({
        label: labelStr,
        value: num,
      });
    }

    return Response.json(data);
  } catch (err: any) {
    return Response.json({
      error: err.message,
      data: [],
    });
  }
}
