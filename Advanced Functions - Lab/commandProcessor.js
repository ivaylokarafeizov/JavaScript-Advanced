function solution() {
  let initStr = '';

  return {
    append: (str) => initStr += str,
    removeStart: (n) => initStr = initStr.slice(n),
    removeEnd: (n) => initStr = initStr.slice(0, -n),
    print: () => console.log(initStr),
  };
}

let firstZeroTest = solution(); 
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution(); 
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

