function heroicInventory(heroes) {
  let result = [];

  for (const hero of heroes) {
    let [name, level, items] = hero.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];

    result.push({ name: name, level: level, items: items });
  }

  const jsonConvert = JSON.stringify(result);
  console.log(jsonConvert);
}

heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
