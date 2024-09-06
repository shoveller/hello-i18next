import { connectGoogleSpreadSheet } from './utils/connectGoogleSpreadSheet.js';
import { uploadAllTranslations } from './uploadAllTranslations.js';
import dotenv from 'dotenv'
dotenv.config();

async function main() {
  console.log('process.env.VITE_SPREADSHEET_DOC_ID', process.env.VITE_SPREADSHEET_DOC_ID);
  const doc = await connectGoogleSpreadSheet({
    spreadsheetDocId: process.env.VITE_SPREADSHEET_DOC_ID,
    sheetId: process.env.VITE_SHEET_ID,
    client_email: process.env.VITE_CLIENT_EMAIL,
    private_key: process.env.VITE_PRIVATE_KEY
  });

  const done = await uploadAllTranslations({ doc });
  if (done) {
    console.log('업로드 성공');
  }
}

main();
