import {GoogleSpreadsheet} from 'google-spreadsheet';
import {writeFile} from "./utils/writeFile.js";
import {readGoogleSheet} from "./utils/readGoogleSheet.js";

/**
 * 번역물을 다운로드 한다
 * @param {GoogleSpreadsheet} doc
 * @returns {Promise<boolean>}
 */
export const downloadAllTranslations = async ({ doc }) => {
    const [ko, en, ja, zh] = await Promise.all([
        readGoogleSheet({
            title: 'ko',
            doc
        }),
        readGoogleSheet({
            title: 'en',
            doc
        }),
        readGoogleSheet({
            title: 'ja',
            doc
        }),
        readGoogleSheet({
            title: 'zh',
            doc
        })
    ])

    return Promise.all([
        writeFile({
            value: ko,
            path: '../public/locales/ko/translation.json'
        }),
        writeFile({
            value: en,
            path: '../public/locales/en/translation.json'
        }),
        writeFile({
            value: ja,
            path: '../public/locales/ja/translation.json'
        }),
        writeFile({
            value: zh,
            path: '../public/locales/zh/translation.json'
        })
    ]).then(res => res.includes(false))
}
