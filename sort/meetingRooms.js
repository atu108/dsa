const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const r = intervals.reduce((res, [i, j]) => {
  res.push({ time: i, start: true });
  res.push({ time: j, start: false });
  return res;
}, []);

console.log(r.sort((a, b) => a.time - b.time));
