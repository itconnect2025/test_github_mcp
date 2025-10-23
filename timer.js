// timer.js - 문제가 있는 코드
export class Timer {
    constructor() {
      this.t = 30  // 변수명이 불명확
    }
    
    getTime() {
      return this.t
    }
    
    tick() {
      this.t = this.t - 1  // 간단히 this.t-- 로 가능
      // edge case 처리 없음 (0 이하로 가면?)
    }
    
    reset() {
      this.t = 30
    }
  }
