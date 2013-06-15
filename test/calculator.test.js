describe("Calculator", function() {
  it("add", function() {
    var calc = new Calculator();
    expect(calc.add(1,2)).toBe(3);
    expect(calc.add(2,5)).toBe(7);
  });
});
