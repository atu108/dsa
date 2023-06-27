const Q = require("./qlinkl");
function generateNumber(n) {
  let q = new Q();
  q.enqueue("5");
  q.enqueue("6");
  for (let i = 0; i < 30; i++) {
    console.log(q.getFront().data);
    const current = q.getFront().data;
    q.dequeue();
    q.enqueue(current + "5");
    q.enqueue(current + "6");
  }
}

generateNumber(4);
