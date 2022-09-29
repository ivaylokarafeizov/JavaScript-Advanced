function listProcessor(input) {
  let collection = [];

  let commands = {
    add: (str) => collection.push(str),
    remove: (str) => collection = collection.filter((e) => e != str),
    print: () => console.log(collection.join(',')),
  };
  
  for (const line of input) {
    let [command, value] = line.split(' '); 
    commands[command](value); 
  } 
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);