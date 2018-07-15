const Block = require("util/Block");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "01/01/2018", "GenesisBlock", "0");
  }

  getLastestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLastestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash != currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash != previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Blockchain;
