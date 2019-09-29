const palindromePermutation = require("./palindromePermutation");

describe("palindromePermutation", () => {
  it("should return true", () => {
    expect(palindromePermutation("taco cat")).toBe(true);
  });
  it("should return false", () => {
    expect(palindromePermutation("asc")).toBe(false);
  });
});
