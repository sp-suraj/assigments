const {
  numbersWithSmallerLeftDigit,
} = require("../numbersWithIncreasingDigits");

describe("numbersWithSmallerLeftDigit should return numbers having digits in increasing order", () => {
  it("should return correct count of all valid numbers below 100", () => {
    const digits = 2;
    const validNumbersBelow100 = [
      12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36,
      37, 38, 39, 45, 46, 47, 48, 49, 56, 57, 58, 59, 67, 68, 69, 78, 79, 89,
    ];

    expect(numbersWithSmallerLeftDigit(digits)).toBe(
      validNumbersBelow100.length
    );
  });

  it("should return 0 count of all valid numbers below 10", () => {
    const digits = 1;

    expect(numbersWithSmallerLeftDigit(digits)).toBe(0);
  });
});
