import {writeGoogleSheet} from "./writeGoogleSheet.js";
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

    const uploadDone = await writeGoogleSheet({
        title: 'ko',
        doc,
        records: [
            {key: '1', value: '1'},
            {key: '2', value: '2'},
            {key: '3', value: '3'},
            {key: '4', value: '4'},
            {key: '5', value: '5'},
        ]
    })

    if (uploadDone) {
        console.log('쓰기 테스트 성공')
    }
}

main();
