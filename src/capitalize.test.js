import capitalize from "./capitalize";

test("Capitalize foo to Foo", () => {
  expect(capitalize("foo")).toBe("Foo");
});

test("Capitalize pUrpLe to Purple", () => {
  expect(capitalize("pUrpLe")).toBe("Purple");
});
