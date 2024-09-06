export default {
    input: [
        '../src/**/*.{ts,tsx}', // typescript 코드에서 번역 키를 검색
    ],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    defaultNamespace: 'translation',
    locales: ['ko', 'en', 'ja', 'zh'],
    keepRemoved: true, // 삭제된 키는 제거하지 않고 유지
    createOldCatalogs: false, // 이전 번역 카탈로그를 저장하지 않음
};
