const { expect } = require("chai");
const { stringifyJSON } = require("../src/stringifyJSON");

describe("stringifyJSON", () => {
  describe("basic stuff", () => {
    it("should return an array as string", () => {
      expect(stringifyJSON([])).to.equal("[]");
    });
  });

  // FIXME: Write your tests
  describe("StringifyJSON", () => {
    it("should return a string for a number", () => {
      expect(typeof stringifyJSON(3)).to.equal("string");
    });
    it("should return a string for a boolean", () => {
      expect(typeof stringifyJSON(true)).to.equal("string");
    });
    it("should return a stringified array with values inside", () => {
      expect(stringifyJSON([3, "false", false])).to.equal("[3,false,false]");
    });
    it("should return a stringified object", () => {
      expect(stringifyJSON({ x: 5, y: 6 })).to.equal("{ x: 5, y: 6 }");
    });
  });
});
