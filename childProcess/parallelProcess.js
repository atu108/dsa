// Do any work in parallel to main
// event loop or main process
console.log("Child Process Starts");
process.on("message", (message) => {
  console.log("Message Received");
  console.log(message);
});

process.send("Accknowlgeds");
