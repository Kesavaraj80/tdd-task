import { expect } from "chai";
import { add } from "../src/stringCalculator";

describe("String Calculator - TDD Kata", () => {
  it("returns 0 for empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("returns number when only one number is provided", () => {
    expect(add("5")).to.equal(5);
  });

  it("returns sum of two numbers separated by comma", () => {
    expect(add("1,2")).to.equal(3);
  });

  it("returns sum of multiple numbers", () => {
    expect(add("1,2,3,4")).to.equal(10);
  });

  it("supports newline as a delimiter", () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it("supports custom delimiter (e.g., //;\n1;2)", () => {
    expect(add("//;\n1;2")).to.equal(3);
  });

  it("throws error for single negative number", () => {
    expect(() => add("1,-2")).to.throw("negative numbers not allowed: -2");
  });

  it("throws error for multiple negative numbers", () => {
    expect(() => add("2,-4,3,-5")).to.throw(
      "negative numbers not allowed: -4,-5"
    );
  });
});
