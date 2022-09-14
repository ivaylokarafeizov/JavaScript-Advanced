function previousDay(year, month, day) { 
  let date = new Date(year, month - 1, day - 1);
  let datePattern = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  console.log(datePattern); 
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);