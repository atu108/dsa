function* generatorFun() {
  let i = 1;

  while (true) {
    let increment = yield i;
    if (increment) {
      i = i + increment;
    } else {
      i++;
    }
  }
}

let idGnerator = generatorFun();
//console.log(generatorFun().return());
console.log(idGnerator.next());
console.log(idGnerator.next(3));
