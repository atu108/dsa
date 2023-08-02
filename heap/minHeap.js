class MinHeap {
  constructor(arr = []) {
    this.arr = arr;
    this.size = this.arr.length;
  }
  getLeft(index) {
    return 2 * index + 1;
  }
  getRight(index) {
    return 2 * index + 2;
  }
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    // increase size
    // put value at last index
    // keep swapping with parent until reached root ie zero index or
    // parent is smaller
    this.size = this.size + 1;
    this.arr[this.size - 1] = value;
    let currentIndex = this.size - 1;
    while (
      currentIndex != 0 &&
      this.arr[this.getParent(currentIndex)] > this.arr[currentIndex]
    ) {
      this.swap(this.arr, currentIndex, this.getParent(currentIndex));
      currentIndex = this.getParent(currentIndex);
    }
  }

  minHeapify(index) {
    if (index < 0) return;
    let rightIndex = 2 * index + 2;
    let leftIndex = 2 * index + 1;
    let smallest = index;
    // right index and left index should not be out of bound
    // and findSmallest (min of three values) of index, right and left
    // and swap the current index with the smallest if current is smallest fo nothing
    if (rightIndex < this.size && this.arr[rightIndex] < this.arr[smallest]) {
      smallest = rightIndex;
    }

    if (leftIndex < this.size && this.arr[leftIndex] < this.arr[smallest]) {
      smallest = leftIndex;
    }
    if (smallest != index) {
      this.swap(this.arr, index, smallest);
      this.minHeapify(this.arr, smallest);
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  extractMin() {
    // if size decrease size and return first element
    if (this.size == 1) {
      this.size--;
      return this.arr[0];
    }
    // swap first element with the last element then
    // call minHeapify for root that is index 0
    let min = this.arr[0];
    this.swap(this.arr, 0, this.size - 1);
    this.size--;
    this.minHeapify(0);
    return min;
  }

  decreaseKey(value, index) {
    //decrease key at index with the value given then:
    // keep swapping this value with parent until parent is
    //greater or reached index zero.
  }

  deleteKey(index) {
    //replace value at index with -Infinity then:
    // swap this value till top to put -Infinity at top then:
    // call extract min
  }

  buildHeap() {
    // first minHeapify Bottom most right most internal node ie
    // parent of last leaf node (size - 1 ) that is ((size -1 ) - 1)/ 2
    // (formula for getting parent node)
    // keep decrementing i and call minHeapify for every i

    for (let i = (this.size - 2) / 2; i >= 0; i--) {
      this.minHeapify(this.arr, i);
    }
  }
}

module.exports = MinHeap;

// minHeap.insert(10);
// minHeap.insert(5);
// minHeap.insert(2);
// minHeap.insert(1);
// console.log(minHeap.arr);
// minHeap.extractMin();
// console.log(minHeap.arr);
// minHeap.insert(3);
// console.log(minHeap.arr);
// minHeap.extractMin();
// minHeap.insert(6);
// console.log(minHeap.arr);
// minHeap.extractMin();
// minHeap.insert(4);
// minHeap.insert(7);
// console.log(minHeap.arr);
