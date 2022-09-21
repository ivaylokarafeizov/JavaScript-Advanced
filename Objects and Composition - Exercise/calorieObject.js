function calorieObject(array) {
  const caloriesObj = {};

  for (let i = 0; i < array.length; i += 2) {
    const calories = Number(array[i + 1]);
    const product = array[i];

    caloriesObj[product] = calories;
  }
  
  console.log(caloriesObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
