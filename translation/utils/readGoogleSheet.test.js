import {readGoogleSheet} from "./readGoogleSheet.js";
import {connectGoogleSpreadSheet} from "./connectGoogleSpreadSheet.js";
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' });

async function main() {
    const doc = await connectGoogleSpreadSheet({
        spreadsheetDocId: process.env.VITE_SPREADSHEET_DOC_ID,
        sheetId: process.env.VITE_SHEET_ID,
        client_email: process.env.VITE_CLIENT_EMAIL,
        private_key: process.env.VITE_PRIVATE_KEY
    })

    const record = await readGoogleSheet({title: 'ko', doc})

    console.log('결과', record);
}

main()
