function sumOfNumbersNToM(n, m) {
  n = Number(n);
  m = Number(m);

  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }

  return sum;
}

sumOfNumbersNToM('1', '5');
sumOfNumbersNToM('-8', '20');