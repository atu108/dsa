const Q = require("./qlinkl");
function generateNumber(n) {
  let q = new Q();
  q.enqueue("1");
  for (let i = 0; i < n; i++) {
    console.log(q.getFront().data);
    const current = q.getFront().data;
    q.dequeue();
    q.enqueue(current + "0");
    q.enqueue(current + "1");
  }
}

generateNumber(5);
