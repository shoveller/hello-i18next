import {download} from "./download.js";

async function main() {
    const done = await download()

    if (done) {
        console.log('다운로드 완료')
    }
}

main()
