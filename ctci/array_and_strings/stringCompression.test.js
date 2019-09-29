const { stringCompression } = require("./stringCompression");
describe("string compression", () => {
  test("should compress", () => {
    expect(stringCompression("aaabcccccdaa")).toBe("a3b1c5d1a2");
  });
  test("should return original string", () => {
    expect(stringCompression("abc")).toBe("abc");
  });
});
