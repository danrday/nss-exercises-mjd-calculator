

describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });

  it("should have an multiply function", function() {
  expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(5, 5)).toBe(25);
  });

  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(10, 2)).toBe(5);
  });

  it("should have a square function", function() {
  expect(square).toBeDefined();
  });

  it("should square an integer", function() {
    expect(square(5)).toBe(25);
  });

    it("should have a square root function", function() {
  expect(squareRoot).toBeDefined();
  });

  it("should get the square root of an integer", function() {
    expect(squareRoot(25)).toBe(5);
  });


});