// typingGame.test.js - 타이핑 게임 테스트

import { GameTimer, InputValidator, AccuracyCalculator, TypingGame } from './typingGame.js';

describe('GameTimer', () => {
    test('초기 시간은 30초로 설정된다', () => {
        const timer = new GameTimer();
        expect(timer.getTime()).toBe(30);
    });

    test('tick 메서드를 호출하면 시간이 1초 감소한다', () => {
        const timer = new GameTimer();
        timer.tick();
        expect(timer.getTime()).toBe(29);
    });
});

describe('InputValidator', () => {
    test('입력이 목표 텍스트와 일치하면 true를 반환한다', () => {
        const validator = new InputValidator('hello');
        expect(validator.check('hello')).toBe(true);
    });
});

describe('AccuracyCalculator', () => {
    test('정확한 문자 수와 전체 문자 수로 정확도를 계산한다', () => {
        const calculator = new AccuracyCalculator();
        expect(calculator.calculate(8, 10)).toBe(80);
    });
});

describe('TypingGame', () => {
    test('게임 초기화 시 목표 텍스트를 설정한다', () => {
        const game = new TypingGame('hello world');
        expect(game.getTargetText()).toBe('hello world');
    });
});
