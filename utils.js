// utils.js - 유틸리티 함수들
export function formatNumber(num) {
    // 입력 검증 없음
    return num.toFixed(2);
}

export function isEven(num) {
    return num % 2 === 0;
}

export function capitalize(str) {
    // 빈 문자열 체크 없음
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRandomInt(min, max) {
    // min과 max의 유효성 체크 없음
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
