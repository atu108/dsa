/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
*/

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = [];
  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];
    if (output.length && current[0] <= output[output.length - 1][1]) {
      output[output.length - 1][1] = Math.max(
        current[1],
        output[output.length - 1][1]
      );
    } else {
      output.push(current);
    }
  }
  return output;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
