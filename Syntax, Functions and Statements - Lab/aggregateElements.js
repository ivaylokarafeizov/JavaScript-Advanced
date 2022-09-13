function aggregateElements(arr) {  
  let sum = (arr) => {
    let arrSum = arr.reduce((a, b) => a + b);
    return arrSum;
  };

  let inverseSum = (arr) => {
    let arrInverseSum = 0; 
    for (let i = 0; i < arr.length; i++) {
      arrInverseSum += 1 / arr[i];
    }
    return arrInverseSum; 
  };

  let concat = (arr) => {
    let arrConcat = arr.join('');
    return arrConcat; 
  };

  console.log(`${sum(arr)}\n${inverseSum(arr)}\n${concat(arr)}`); 
}

aggregateElements([1, 2, 3]); 