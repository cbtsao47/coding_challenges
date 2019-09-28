const DynamicArray = require("./array");
describe("DynamicArray class", () => {
  let array1 = new DynamicArray();
  beforeEach(() => {
    array1 = new DynamicArray();
  });
  it("should be empty", () => {
    expect(array1.length).toBe(0);
  });
  it("should push the provided element into the array", () => {
    array1.push(2);
    expect(array1.length).toBe(1);
    expect(array1.data[0]).toBe(2);
  });
  it("should resize if the capacity is lower than the length", () => {
    array1.push(3);
    expect(array1.capacity).toBe(1);
    array1.push(3);
    expect(array1.capacity).toBe(2);
    array1.push(5);
    expect(array1.capacity).toBe(4);
    array1.push(5);
    expect(array1.capacity).toBe(4);
  });
  it("should remove the last element after pop", () => {
    array1.push(2);
    const popped = array1.pop();
    expect(array1.length).toBe(0);
    expect(popped).toBe(2);
  });
});
