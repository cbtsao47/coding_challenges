const { LinkedList } = require("./linkedList");

describe("Linked List", () => {
  const LL = new LinkedList();
  describe("isEmpty", () => {
    test("should be empty", () => {
      expect(LL.isEmpty()).toBe(true);
    });
  });
  describe("Add", () => {
    test("should be able to add a node", () => {
      LL.add(1);
      expect(LL.head.value).toBe(1);
    });
    test("should add to the back of the list", () => {
      expect(LL.head.next).toBe(null);
      expect(LL.tail.value).toBe(1);
      expect(LL.tail.next).toBe(null);
      LL.add(2);
      expect(LL.head).not.toStrictEqual(LL.tail);
    });
  });
});
