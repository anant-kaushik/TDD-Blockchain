const assert = require("chai").assert;
const Blockchain = require("util/Blockchain");
const Block = require("util/Block");

describe("Blockchain", function() {
  beforeEach(function() {
    this.notecoin = new Blockchain();

    this.notecoin.addBlock(
      new Block(1, "01/01/2018", {
        amount: 10
      })
    );

    this.notecoin.addBlock(
      new Block(2, "01/01/2018", {
        amount: 11
      })
    );
  });

  afterEach(function() {
    this.notecoin = null;
  });

  it("invalidates when data gets tampered", function() {
    assert(
      this.notecoin.isChainValid(),
      "Chain should be valid before data is tampered"
    );

    this.notecoin.chain[1].data = { amount: 20 };

    assert.isFalse(
      this.notecoin.isChainValid(),
      "Chain should be invalid after data is tampered"
    );
  });

  it("invalidates when data gets tampered and hash is updated too", function() {
    assert(
      this.notecoin.isChainValid(),
      "Chain should be valid before data is tampered"
    );

    this.notecoin.chain[1].data = { amount: 20 };
    this.notecoin.chain[1].hash = this.notecoin.chain[1].calculateHash();

    assert.isFalse(
      this.notecoin.isChainValid(),
      "Chain should be invalid after data is tampered"
    );
  });
});
