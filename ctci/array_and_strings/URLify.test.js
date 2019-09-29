const { URLify, URLify2, URLify3 } = require("./URLify");
describe("URLify methods", () => {
  describe("URLify", () => {
    it("should replace white space with %20", () => {
      expect(URLify("Hi I am Ben   ")).toBe("Hi%20I%20am%20Ben");
    });
  });
  describe("URLify2", () => {
    it("should replace white space with %20", () => {
      expect(URLify2("Hi I am Ben   ")).toBe("Hi%20I%20am%20Ben");
    });
  });
  describe("URLify3", () => {
    expect(URLify3("Hi I am Ben   ")).toBe("Hi%20I%20am%20Ben");
  });
});
