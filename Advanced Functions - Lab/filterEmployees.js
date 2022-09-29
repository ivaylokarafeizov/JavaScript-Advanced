function filterEmployees(data, criteria) {
  let employees = JSON.parse(data);
  let [key, value] = criteria.split('-');

  let filteredEmployees = [];
  for (const employee of employees) {
    let data = format(employee['first_name'], employee['last_name'], employee['email']);

    if (value == 'all' || employee[key] == value) {
      filteredEmployees.push(data);
    }
  }

  filteredEmployees.forEach((element, i) => console.log(`${i}. ${element}`));

  function format(firstName, lastName, email) {
    return `${firstName} ${lastName} - ${email}`;
  }

  /**
   * let employees = JSON.parse(data);
   *
   * let id = 0;
   * employees.forEach((employee) => format.call(employee));
   *
   *   function format() {
   *     let [key, value] = criteria.split('-');
   *
   *     if (value == 'all' || this[key] == value) {
   *       console.log(`${id++}. ${this.first_name} ${this.last_name} - ${this.email}`);
   *     }
   *   }
   */
}

filterEmployees(
  `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
  'gender-all'
);
