const Queue = require("../queue/qlinkl");
const root = require("./tree");

function childrenSum(root){
  if(!root) return true;
  if(!root.left && !root.right) return true;
  let sum = 0;
   sum += root.left?.data || 0
   sum += root.right?.data || 0
   if(sum == root.data){
    return childrenSum(root.left) && childrenSum(root.right)
  }else{
    return false
  } 
}

console.log(childrenSum(root))