function townsToJSON(arr) {
  let townsArr = [];

  for (let town of arr.slice(1)) { 
    let [_, townName, latitude, longitude] = town.split(/\s*\|\s*/);

    let townObj = {
      Town: townName,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    }; 
    
    townsArr.push(townObj);
  }

  console.log(JSON.stringify(townsArr));
}

townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
