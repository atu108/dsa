const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();

rl.on("line", (input) => {
  let [firstName, lastName] = input.split(" ");
  rl.setPrompt(`Hello Mr. ${firstName} ${lastName}`);
}).on("close", () => {
  console.log("closed");
});
