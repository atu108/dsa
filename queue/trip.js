function trip(p) {
  let remaining = 0;
  let start = 0;
  let count = 0;
  let n = p.length;
  for (let i = 0; i < n * 2; i++) {
    let index = i % n;
    let petrol = p[index].petrol + remaining;
    if (petrol < p[index].distance) {
      count = 0;
      remaining = 0;
      start = (i + 1) % n;
    } else {
      remaining = petrol - p[index].distance;
      count++;
    }
    if (count == p.length / 2) {
      return start;
    }
  }
  return -1;
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
console.log(trip(p));
