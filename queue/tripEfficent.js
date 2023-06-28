function trip(p, n) {
  let start = 0;
  let currentPetrol = 0;
  prevPetrol = 0;
  for (let i = 0; i < n; i++) {
    currentPetrol += p.petrol - p.distance;
    if (currentPetrol < 0) {
      start = i + 1;
      currentPetrol = 0;
      prevPetrol += currentPetrol;
    }
  }
  return currentPetrol + prevPetrol >= 0 ? start + 1 : -1;
}

class Pump {
  constructor(p, d) {
    this.petrol = p;
    this.distance = d;
  }
}
let p = [
  new Pump(55, 52),
  new Pump(33, 100),
  new Pump(77, 61),
  new Pump(40, 69),
];
console.log(trip(p, p.length));
