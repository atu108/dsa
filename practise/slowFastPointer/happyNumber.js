function isNumberHappy(number) {
  let set = new Set();
  let current = number;
  while (true) {
    set.add(current);
    let newNum = findSquareSum(current);
    if (newNum == 1) {
      return true;
    } else if (set.has(newNum)) {
      return false;
    }
    current = newNum;
  }
}

function findSquareSum(number) {
  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, 2);
    number = Math.floor(number / 10);
  }
  return sum;
}

function isHappy(number) {
  let slow = number;
  let fast = number;

  while (true) {
    slow = findSquareSum(slow);
    fast = findSquareSum(findSquareSum(fast));
    if (slow == fast) {
      break;
    }
  }
  return slow == 1;
}
const number = 13;
console.log(isNumberHappy(number));

console.log(isHappy(number));
