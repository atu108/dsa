const { workerData, parentPort } = require("worker_threads");

let count = 0;
for (let i = 0; i < workerData.length; i++) {
  count++;
}
parentPort.postMessage(count);
