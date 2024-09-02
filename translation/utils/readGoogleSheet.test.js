import {readGoogleSheet} from "./readGoogleSheet.js";
import {connectGoogleSpreadSheet} from "./connectGoogleSpreadSheet.js";

async function main() {
    const doc = await connectGoogleSpreadSheet({
        spreadsheetDocId: '1b18iKKNxe6arbc_H5M97hUKH6mMJo_gPn3ImdoakVf8',
        sheetId: '0',
        client_email: 'i18nservice@i18n-433805.iam.gserviceaccount.com',
        private_key: '-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDeR/v/l5btOe7X\\nXNvvyx4b8sOLTOha0kLx724I1njvnUzT8nK3nUxP3M/VagMSrBJ355jPEJHYcvrh\\nFmSWXvuiWP+MbZycc1spAlIqrV31vBml0ygHLV/awXtAjzFldiAJyxbBPrZAocDA\\nXlCo7nXIcND69R1PS7cmZlCtGDhrAf4zT7akcI+aY49Mr5s7UHu/J2iHWDfK1fv2\\noFDm9bznqzl8TJb7tddHOT7ouTdVePUesF+2rIxdyWsaUvFLYDfXAko5NxLvxvgx\\nnZuJYy75unNwRVGOjRghBgC8dHw0M9uTfChkTbRQM/n86XcuR+QsiK70JriEkUk/\\nzk2DAJT5AgMBAAECggEAOsQgQQokSlKTLRftQ7/ZFX2Aqj7qfTxym4D3/9kn/v2A\\n1tYV8ypghwqzXdJZvqGEfnPZ6ACS9n0ri7++Vy0EbP8HjOpbydcLplNpQsQz/6g7\\nxaYGQqOB4JVfjwlsf00UGlK5kNySFZNOIO2ueIMW26fL8FVGavTzFnFdae3p2Iwf\\npaw0LkdXeY+h8USj1ZtVdylVoqligP6OCl3+EizeXsptqdIAUvSdRewXwY+pOGIz\\nAxWWMjcDlgd/z15yKPbASWwjw1sQJwRhSy8+WaQReHNuPbx1Y53BMCQLaKZ8PYPG\\nfIyeykHnpMFl3r2X8PLe8oeNeDM9y5d8veIRagpPEwKBgQD188nf/86Ww6W/uteW\\nt+KADlisBj33oP7G2UXPbyrrszRXhO/U/pD0U+/P02Fonri9xeGWP1g2WQm7u0IH\\nBquFM014vQb0pA8zU3vW1Otgd5rehdaZj0WHE2Mroe9TDSW/Hl0BRKnOawXKsi22\\nomLC0uVDWo2Z1HUd//dHBd1GTwKBgQDnXKOmN9YUdHEArRKx+9JZW3C0GOxfJCEV\\nDc9IAz14kSiesRb5GbZq3ZOu7nayrXN9qiK2aMP4zVVq9vyfA1H1tVG76eFrPFYn\\nLC47CkK0FxglooyEpxt3SYBLhdU8XDGBOdmYIAG4mZVOLViq/TFkrJXkza1VDD48\\nPDcpiJ1mNwKBgBRJvddKZKIvFVcRdIMsO/TQOiRGh4oLr7h7Z7TKuMGkkKa/goER\\nVqew3NFJ4HkezqJo1kjshLxG7/SaZ8HonPFp3/Qbs50ug0p6knaQLbJRa2b7p04X\\ncWbJBJ8uxm0VYo23VXirT06FqX6k3/x2vKrRdrPtnkyYJ+kHmkAzjaMlAoGBAJOT\\nMMOWfBRCDc57lyA2W38p52LJPwSU3BE85MmvX2dnV/yZQukTcJsLyObdLpNcNf2j\\nJ08o1k/+UYzQDGU1TfMnfAIb9fBb5SxJbxezvMZ4sKtY2r7GhKt7E72YmWJOADnI\\nd7YkPFTOikD6hcNTi00HFPmEBBrqm0v6sMjqXlPTAoGBAICTkPoJiNz1fmuLkLOr\\nmGQehGsYIEQCW8DkhrA7r5yiGHJxvAiqAc2Eeat/CzpBpar8To+wb/bngR2yIbpu\\nUIAbZNoJGhZ0Sh6IJpTde4PQizdaOh9XeSplY+GCHcucfPzpwjB1LogCz5dwltiw\\nAp3LvMGpC1FTgR37CNV0avIx\\n-----END PRIVATE KEY-----\\n'
    })

    const record = await readGoogleSheet({title: 'ko', doc})

    console.log('결과', record);
}

main()
