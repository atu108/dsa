const { Worker } = require("worker_threads");

let workerData = { length: 20_00_00_00 };
let worker = new Worker("./worker.js", { workerData });

worker.on("message", (data) => {
  console.log("Message received: ", data);
});

worker.on("error", (data) => {
  console.error("Error received: ", data);
});

worker.on("exit", (code) => {
  console.warn(" Exited: ", code);
});

worker.emit("exit", 1);
