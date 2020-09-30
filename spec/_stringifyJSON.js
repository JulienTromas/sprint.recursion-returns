const { expect } = require("chai");
const { stringifyJSON } = require("../src/stringifyJSON");

describe("stringifyJSON", () => {
  describe("basic stuff", () => {
    it.only("should return an array as string", () => {
      expect(stringifyJSON([])).to.equal("[]");
    });
  });

  // FIXME: Write your tests
  describe("StringifyJSON", () => {
    it.only("should return a string for a number", () => {
      expect(typeof stringifyJSON(3)).to.equal("string");
    });
    it.only("should return a string for a boolean", () => {
      expect(typeof stringifyJSON(true)).to.equal("string");
    });
    it.only("should return a stringified array with values inside", () => {
      expect(stringifyJSON([3, "false", false])).to.equal("[3,false,false]");
    });
    it.only("should return a stringified object", () => {
      expect(stringifyJSON({ x: 5, y: 6 })).to.equal("{ x: 5, y: 6 }");
    });
  });
});
