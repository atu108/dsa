let { parentPort, workerData } = require("worker_threads");

function heavyComputation(sumTill) {
  let sum = 0;
  for (let i = 1; i < sumTill; i++) {
    sum += i;
  }
  return sum;
}

parentPort.postMessage(heavyComputation(workerData.sumTill));
