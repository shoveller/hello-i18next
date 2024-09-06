import { connectGoogleSpreadSheet } from './connectGoogleSpreadSheet.js'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' });

connectGoogleSpreadSheet({
  spreadsheetDocId: process.env.VITE_SPREADSHEET_DOC_ID,
  sheetId: process.env.VITE_SHEET_ID,
  client_email: process.env.VITE_CLIENT_EMAIL,
  private_key: process.env.VITE_PRIVATE_KEY
}).then(console.log)
