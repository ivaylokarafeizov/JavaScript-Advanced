function daysInAMonth(month, year) {
  let date = new Date(year, month, 0);
  let days = date.getDate();

  return days;
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);