function heavyComputation(sumTill) {
  let sum = 0;
  for (let i = 1; i < sumTill; i++) {
    sum += i;
  }
  return sum;
}

process.on("message", (message) => {
  console.log("called", typeof message);
  let sum = heavyComputation(message.startTill);
  process.send(sum);
});
