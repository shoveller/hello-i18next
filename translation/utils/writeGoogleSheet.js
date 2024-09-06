import {GoogleSpreadsheet} from 'google-spreadsheet';

/**
 * 스프레드 시트 속 시트에 쓴다.
 * @param {string} title
 * @param {GoogleSpreadsheet} doc
 * @param {{ key: string, value: string }} records
 * @returns {Promise<boolean>}
 */
export const writeGoogleSheet = async ({title, doc, records} = {}) => {
    console.log(`${title} 작업 시작`);
    try {
        const 구글시트 = doc.sheetsByTitle[title];
        const 구글시트의_행들 = await 구글시트.getRows();

        // 0. 업로드할 데이터를 추출한다.
        const records4Upload = records.reduce((sum, record) => {
            // 1. 시트에 업로드할 키가 있는지 확인한다.
            const 일치하는_셀 = 구글시트의_행들.find((구글시트의_행) => 구글시트의_행.get('key') === record.key);
            // 2. 일치하는 row 만 추출
            if (!일치하는_셀) {
                return [...sum, record];
            }
            return [];
        }, []);

        await 구글시트.addRows(records4Upload);

        return true;
    } catch (e) {
        return false;
    } finally {
        console.log(`${title} 작업 완료`);
    }
}
