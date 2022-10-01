function solution() {
  let recipesLibrary = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  }; 

  let storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };

  let result = ''; 
  let instructionProcess = {
    restock: (microelement, quantity) => {
      storage[microelement] += quantity;
      result = 'Success';
    },
    prepare: (recipe, quantity) => {
      let isEnough = true;

      Object.entries(recipesLibrary[recipe]).forEach((entry) => {
        let [microelement, count] = entry;
        if (isEnough && storage[microelement] < count * Number(quantity)) {
          isEnough = false;
          result = `Error: not enough ${microelement} in stock`;
        }
      });

      if (isEnough) {
        Object.entries(recipesLibrary[recipe]).forEach((entry) => {
          let [microelement, count] = entry;
          storage[microelement] -= count * quantity;
        });

        result = 'Success';
      }
    },
    report: () => {
      result = ''; 
      Object.entries(storage).forEach((entry) => {
        let [microelement, quantity] = entry;
        result += `${microelement}=${quantity} `;
      }); 
      result = result.trimEnd();
    },
  };

  return function manager(input) {
    let [command, product, quantity] = input.split(' ');
    quantity = Number(quantity);
    instructionProcess[command](product, quantity);
    return result;
  };
}

let manager = solution();
console.log(manager('prepare turkey 1')); // Error: not enough protein in stock
console.log(manager('restock protein 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success   
console.log(manager('prepare turkey 1')); // Error: not enough fat in stock 
console.log(manager('restock fat 10')); // Success   
console.log(manager('prepare turkey 1')); // Error: not enough flavour in stock
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare turkey 1')); // Success  
console.log(manager('report')); // protein=0 carbohydrate=0 fat=0 flavour=0   