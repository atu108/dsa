const Queue = require("../queue/qlinkl");
const root = require("./tree");

function maxWidth(root){
  if(!root) return 0;
  let q = new Queue();
  let maxCount = 0;
   q.enqueue(root)
   q.enqueue(-1)
   let current = 0;
   while(q.getSize() > 1){
    const front = q.getFront();
    if(front.data == -1){
      maxCount = Math.max(current, maxCount);
      current = 0;
      q.enqueue(-1)
    }else{
      current++
      if(front.data.left) q.enqueue(front.data.left)
      if(front.data.right) q.enqueue(front.data.right)
    }
    q.dequeue()
   }
   return maxCount;
}

console.log(maxWidth(root))