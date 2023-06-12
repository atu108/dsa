let index = require("./index");
async function awaittest() {
  const test1 = index.test("first");
  const test2 = index.test("second");
  await test1;
  await test2;
}
awaittest();
