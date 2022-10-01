function argumentInfo() {
  let typeCounter = {};
  for (const arg of arguments) {
    console.log(`${typeof arg}: ${arg}`);

    typeCounter[typeof arg]++; 
    if (!typeCounter[typeof arg]) {
      typeCounter[typeof arg] = 1;
    } 
  }

  let sortedKeys = Object.keys(typeCounter)
    .sort((a, b) => typeCounter[b] - typeCounter[a]);
  sortedKeys.forEach((key) => console.log(`${key} = ${typeCounter[key]}`));
}

argumentInfo('cat', 42, function () {
  console.log('Hello world!');
});
