const Queue = require("../queue/qlinkl");
const root = require("./tree");

function isBalanced(root){
  if(!root) return 0;
  let lt = isBalanced(root.left)
  if(!lt) return -1;
  let rt = isBalanced(root.right)
  if(!rt) return -1;
  if(Math.abs(lt - rt) > 1) return -1;
  else return Math.max(lt,rt) + 1
}


console.log(isBalanced(root))