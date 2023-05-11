const {isPair} = require('../utils/for_testing.js')

describe('isPair', () => {
    test("test_is_pair_returns_true_for_even_numbers", () => {
        expect(isPair(2)).toBe(true);
        expect(isPair(4)).toBe(true);
        expect(isPair(100)).toBe(true);
    });

    test("test_is_pair_returns_false_for_odd_numbers", () => {
        expect(isPair(3)).toBe(false);
        expect(isPair(7)).toBe(false);
        expect(isPair(101)).toBe(false);
    });

    test("test_is_pair_returns_false_for_odd_decimal_numbers", () => {
        expect(isPair(3.5)).toBe(false);
        expect(isPair(7.1)).toBe(false);
        expect(isPair(101.9)).toBe(false);
    });

    test("test_is_pair_returns_true_for_string_input", () => {
        expect(isPair("2")).toBe(true);
        expect(isPair("4")).toBe(true);
        expect(isPair("100")).toBe(true);
    });

    test("test_is_pair_returns_false_for_null_input", () => {
        expect(isPair(null)).toBe(false);
    });
})