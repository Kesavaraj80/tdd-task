import { expect } from "chai";
import { add } from "../src/stringCalculator";

describe("String Calculator - TDD Kata", () => {
  it("returns 0 for empty string", () => {
    expect(add("")).to.equal(0);
  });
});
