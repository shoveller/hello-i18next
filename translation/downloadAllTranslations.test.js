import {downloadAllTranslations} from "./downloadAllTranslations.js";
import {connectGoogleSpreadSheet} from "./utils/connectGoogleSpreadSheet.js";

async function main() {
    const doc = await connectGoogleSpreadSheet({
        spreadsheetDocId: process.env.VITE_SPREADSHEET_DOC_ID,
        sheetId: process.env.VITE_SHEET_ID,
        client_email: process.env.VITE_CLIENT_EMAIL,
        private_key: process.env.VITE_PRIVATE_KEY
    })
    const done = await downloadAllTranslations({doc})

    if (done) {
        console.log('다운로드 완료')
    }
}

main()
