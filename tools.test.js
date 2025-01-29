const { convertChineseNumber } = require('./tools');

describe('convertChineseNumber', () => {
    test('converts single digit Chinese numbers', () => {
        expect(convertChineseNumber('一')).toBe(1);
        expect(convertChineseNumber('二')).toBe(2);
        expect(convertChineseNumber('三')).toBe(3);
        expect(convertChineseNumber('四')).toBe(4);
        expect(convertChineseNumber('五')).toBe(5);
        expect(convertChineseNumber('六')).toBe(6);
        expect(convertChineseNumber('七')).toBe(7);
        expect(convertChineseNumber('八')).toBe(8);
        expect(convertChineseNumber('九')).toBe(9);
    });

    test('converts tens Chinese numbers', () => {
        expect(convertChineseNumber('十')).toBe(10);
        expect(convertChineseNumber('二十')).toBe(20);
        expect(convertChineseNumber('三十')).toBe(30);
        expect(convertChineseNumber('四十')).toBe(40);
        expect(convertChineseNumber('五十')).toBe(50);
        expect(convertChineseNumber('六十')).toBe(60);
        expect(convertChineseNumber('七十')).toBe(70);
        expect(convertChineseNumber('八十')).toBe(80);
        expect(convertChineseNumber('九十')).toBe(90);
    });

    test('converts hundreds Chinese numbers', () => {
        expect(convertChineseNumber('一百')).toBe(100);
        expect(convertChineseNumber('二百')).toBe(200);
        expect(convertChineseNumber('三百')).toBe(300);
        expect(convertChineseNumber('四百')).toBe(400);
        expect(convertChineseNumber('五百')).toBe(500);
        expect(convertChineseNumber('六百')).toBe(600);
        expect(convertChineseNumber('七百')).toBe(700);
        expect(convertChineseNumber('八百')).toBe(800);
        expect(convertChineseNumber('九百')).toBe(900);
    });

    test('converts complex Chinese numbers', () => {
        expect(convertChineseNumber('一千二百三十四')).toBe(1234);
        expect(convertChineseNumber('五千六百七十八')).toBe(5678);
        expect(convertChineseNumber('九千九百九十九')).toBe(9999);
        expect(convertChineseNumber('一万')).toBe(10000);
        expect(convertChineseNumber('一亿')).toBe(100000000);
    });
});