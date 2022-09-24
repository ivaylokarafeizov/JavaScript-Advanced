function generateReport() {
  let headers = Array.from(document.querySelectorAll('thead tr th input'));
  let rows = Array.from(document.querySelectorAll('tbody tr'));

  let result = [];
  rows.forEach((row) => {
    let employee = {};
    let data = Array.from(row.getElementsByTagName('td')).map(
      (e) => e.textContent
    );

    headers.forEach((header, z) => {
      if (header.checked) {
        employee[header.name] = data[z];
      }
    });
    result.push(employee);
  });
  document.getElementById('output').value = JSON.stringify(result, null, 2);
}
