const checkPermutation = require("./checkPermutation");
describe("checkPermutation", () => {
  describe("should check if one string is a permutation of the other", () => {
    it("should return true", () => {
      expect(checkPermutation("a123a", "aa321")).toBe(true);
    });
    it("should return false", () => {
      expect(checkPermutation("a123", "12ab")).toBe(false);
    });
    it("should return false", () => {
      expect(checkPermutation("1234", "122")).toBe(false);
    });
    it("should return false", () => {
      expect(checkPermutation("", "122")).toBe(false);
    });
  });
});
