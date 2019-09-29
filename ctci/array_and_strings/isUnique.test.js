const { isUnique, isUnique2 } = require("./isUnique");

describe("isUnique", () => {
  test("should return true", () => {
    expect(isUnique("him")).toBe(true);
  });
  test("should return false", () => {
    expect(isUnique("hhs2")).toBe(false);
  });
});

describe("isUnique2", () => {
  test("should return true", () => {
    expect(isUnique2("him")).toBe(true);
  });
  test("should return false", () => {
    expect(isUnique2("hhs2")).toBe(false);
  });
});
