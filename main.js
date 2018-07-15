const Blockchain = require("util/Blockchain");
const Block = require("util/Block");

let notecoin = new Blockchain();

notecoin.addBlock(
  new Block(1, "01/01/2018", {
    amount: 10
  })
);

notecoin.addBlock(
  new Block(2, "01/01/2018", {
    amount: 10
  })
);

console.log(JSON.stringify(notecoin, null, 4));
