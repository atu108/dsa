const Queue = require("../queue/qlinkl");
const root = require("./tree");

function leftView(root){
  if (!root) return;
  let q = new Queue();
  q.enqueue(root)
  while(!q.isEmpty()){
    const size = q.getSize();
    for(let i = 0; i < size; i++){
      const front = q.getFront().data;
      q.dequeue()
      if(i == 0) process.stdout.write(front.data.toString() + " ")
      if(front.left) q.enqueue(front.left)
      if(front.right) q.enqueue(front.right)
    }
   
  }
  console.log()
}

let maxLevel = 0
function leftViewRec(root, level){
  if(!root) return;
  if(maxLevel < level){
    process.stdout.write(root.data + " ");
    maxLevel = level;
  }
    leftViewRec(root.left, level+1);
    leftViewRec(root.right, level+1);
}


console.time("queue")
leftView(root);
console.timeEnd("queue")

console.time("rec")
leftViewRec(root, 1);
console.log()
console.timeEnd("rec")