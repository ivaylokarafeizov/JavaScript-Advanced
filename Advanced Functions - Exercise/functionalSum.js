function add(n) {
  let sum = n;

  function calculate(num) {
    sum += num;
    return calculate;
  }

  calculate.toString = () => sum; 
  return calculate;
}

console.log(add(1).toString()); // 1
console.log(add(1)(6)(-3).toString()); // 4
