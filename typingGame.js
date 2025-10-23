// typingGame.js

export class GameTimer {
    constructor() {
        this.timeLeft = 30;
    }

    getTime() {
        return this.timeLeft;
    }

    tick() {
        this.timeLeft--;
    }
}

export class InputValidator {
    constructor(targetText) {
        this.targetText = targetText;
    }

    check(input) {
        return input === this.targetText;
    }
}

export class AccuracyCalculator {
    calculate(correctCount, totalCount) {
        return (correctCount / totalCount) * 100;
    }
}

export class TypingGame {
    constructor(targetText) {
        this.targetText = targetText;
    }

    getTargetText() {
        return this.targetText;
    }
}
