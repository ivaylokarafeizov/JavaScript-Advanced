function townPopulation(townsData) {
  const townsPopulation = {};

  for (const townData of townsData) {
    let [town, population] = townData.split(' <-> '); 
    
    if (townsPopulation.hasOwnProperty(town)) {
      townsPopulation[town] += Number(population);
    } else {
      townsPopulation[town] = Number(population);
    } 
  }

  Object.entries(townsPopulation).forEach(([key, value]) =>
    console.log(`${key} : ${value}`)
  );
}

townPopulation([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);
townPopulation([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000',
]);
