import calculator from "./calculator ";

test("Test add function, 2 + 3 = 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
