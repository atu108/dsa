function countingSort(arr, range) {
  /*
        Create an array of size range if upper bound is exclusive
    */
  const counts = new Array(range + 1).fill(0);

  /*
    Count occurences  of the every number
  */
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i].charCodeAt(0)] += 1;
  }

  /*
    Modify counting array to store 
    the index of the last occurence of the number in count array
  */
  for (let i = 1; i <= range; i++) {
    counts[i] = counts[i - 1] + counts[i];
  }

  /*
  Traverse the original array
  place the digits in temp array the index stored in counts array
  Every time storing at the last index decrement the count
  */
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] > 0) {
      temp[counts[arr[i]] - 1] = arr[i];
      counts[arr[i]] -= 1;
    }
  }
  return temp;
}

const arr = [5, 6, 5, 9, 10, 10, 0, 99, 98, 78, 34, 46];
console.log(countingSort(arr, 100));
