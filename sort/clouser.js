function clouser() {
  let i = 1;
  return () => console.log(i++);
}

const a = clouser();
a();
a();
clouser()();
