// calculator.js - 간단한 계산기
export class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        // 0으로 나누기 체크 없음
        return a / b;
    }
    
    getResult() {
        return this.result;
    }
}
