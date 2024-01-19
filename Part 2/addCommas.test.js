const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it produces the correct result", () => {
    const val = 1234;
    expect(addCommas(val)).toEqual("1,234");
  });

  test("it produces the correct result", () => {
    const val = 1000000;
    expect(addCommas(val)).toEqual("1,000,000");
  });

  test("it produces the correct result", () => {
    const val = 9876543210;
    expect(addCommas(val)).toEqual("9,876,543,210");
  });

  test("it produces the correct result", () => {
    const val = 6;
    expect(addCommas(val)).toEqual("6");
  });

  test("it produces the correct result", () => {
    const val = -10;
    expect(addCommas(val)).toEqual("-10");
  });
  
  test("it produces the correct result", () => {
    const val = -5678;
    expect(addCommas(val)).toEqual("-5,678");
  });
  
  test("it produces the correct result", () => {
    const val = 12345.678;
    expect(addCommas(val)).toEqual("12,345.678");
  });
  
  test("it produces the correct result", () => {
    const val = -3141592.65;
    expect(addCommas(val)).toEqual("-3,141,592.65");
  });
});