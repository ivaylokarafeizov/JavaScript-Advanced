function cars(input) {
  let cars = {};

  let functionalities = {
    create: (name, inherits, parentName) => {
      cars[name] = inherits ? Object.create(cars[parentName]) : {};
    },
    set: (name, key, value) => {
      cars[name][key] = value;
    },
    print: (name) => {
      const entry = [];

      for (const key in cars[name]) {
        entry.push(`${key}:${cars[name][key]}`);
      }

      console.log(entry.join(','));
    },
  };

  for (const line of input) {
    let [command, name, key, value] = line.split(' ');
    functionalities[command](name, key, value);
  } 
}

cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
