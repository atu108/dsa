function test() {
  try {
    throw new Error("helloo", { cause: "Just testing" });
  } catch (e) {
    console.log(e);
  } finally {
    console.log("runs verytime");
  }
}

test();
