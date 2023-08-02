const MinHeap = require("./minHeap");

function buyMaximumItem(arr, sum) {
  const minHeap = new MinHeap(arr);
  minHeap.buildHeap();
  let count = 0;
  while (true) {
    sum -= minHeap.extractMin();
    if (sum >= 0) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

const arr = [1, 12, 5, 111, 200];
console.log(buyMaximumItem(arr, 1));
