let express = require("express");
let app = express();

app.get("/slowSync", (req, res) => {
  let sum = heavyComputation();
  console.log("called");
  res.status(200).send({ sum });
});

app.get("slowASync", async (req, res) => {
  let sum = await heavyComputationAsync();
  res.statusCode(200).send({ sum });
});

app.get("/fastMulti", (req, res) => {
  let { fork } = require("child_process");
  let child = fork("./childProcess.js");
  child.send({ startTill: 1e9 });
  child.on("message", (message) => {
    res.send({ sum: message });
  });
});

app.get("/fastThreaded", (req, res) => {
  const { Worker, workerData } = require("worker_threads");
  const worker = new Worker("./threaded.js", { workerData: { sumTill: 1e9 } });
  worker.once("message", (data) => {
    res.send({ sum: data });
  });
  worker.on("exit", () => {
    console.log("exited");
  });
  worker.on("error", (code) => {
    console.log("exited", code);
  });
});

app.listen(3000, () => {
  console.log("Started at 3000");
});

function heavyComputation() {
  let sum = 0;
  for (let i = 1; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

function heavyComputationAsync() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 1; i < 1e9; i++) {
      sum += i;
    }
    resolve(sum);
  });
}
