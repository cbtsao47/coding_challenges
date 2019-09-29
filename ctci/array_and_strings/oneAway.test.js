const { oneAway } = require("./oneAway");
describe("One Away", () => {
  test("should return true", () => {
    expect(oneAway("pale", "ple")).toBe(true);
    expect(oneAway("pale", "pale")).toBe(true);
    expect(oneAway("pale", "paled")).toBe(true);
    expect(oneAway("pale", "pole")).toBe(true);
    expect(oneAway("pale", "paale")).toBe(true);
    expect(oneAway("paale", "pale")).toBe(true);
  });
  test("should return false", () => {
    expect(oneAway("pale", "bake")).toBe(false);
    expect(oneAway("pale", "laep")).toBe(false);
    expect(oneAway("pale", "poole")).toBe(false);
    expect(oneAway("poole", "pale")).toBe(false);
  });
});
