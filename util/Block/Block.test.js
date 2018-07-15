const assert = require("chai").assert;
const Block = require("util/Block");

describe("Block", function() {
  it("should be difficult to mine", function() {
    let notecoin = new Block(0, "01-01-2018", { amount: 10 }, "0");

    let miningStartTimestamp = new Date().valueOf();
    notecoin.mineBlock(5);
    let miningStopTimestamp = new Date().valueOf();

    assert(
      miningStopTimestamp - miningStartTimestamp > 2000,
      "Minig should take more than 2 sec"
    );
  });
});
