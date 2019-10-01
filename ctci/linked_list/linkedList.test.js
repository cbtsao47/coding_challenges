const { LinkedList } = require("./linkedList");

describe("Linked List", () => {
  test("should be empty", () => {
    const LL = new LinkedList();
    expect(LL.isEmpty()).toBe(true);
  });
});
