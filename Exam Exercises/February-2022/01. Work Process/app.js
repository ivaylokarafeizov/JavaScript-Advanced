function solve() {
  let firstName = document.querySelector('input[placeholder="First Name"]');
  let lastName = document.querySelector('input[placeholder="Last Name"]');
  let email = document.querySelector('input[placeholder="Email"]');
  let birthDate = document.querySelector('input[placeholder="Date of Birth"]');
  let position = document.querySelector('input[placeholder="Position"]');
  let salary = document.querySelector('input[placeholder="Salary"]');
  let totalBudget = 0;

  let hireWorkerBtn = document.querySelector('#add-worker');
  hireWorkerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      firstName.value == '' ||
      lastName.value == '' ||
      email.value == '' ||
      birthDate.value == '' ||
      position.value == '' ||
      salary.value == ''
    ) {
      return;
    }

    hireWorker();
  });

  function hireWorker() {
    let elements = [firstName, lastName, email, birthDate, position];

    let tableRow = document.createElement('tr');

    for (const element of elements) {
      let tableData = document.createElement('td');
      tableData.textContent = element.value;

      tableRow.appendChild(tableData);
    }

    let tableDataSalary = document.createElement('td');
    tableDataSalary.textContent = salary.value;

    let tableDataButtons = document.createElement('td');
    tableDataSalary.textContent = salary.value;

    let firedBtn = document.createElement('button');
    firedBtn.setAttribute('class', 'fired');
    firedBtn.textContent = 'Fired';
    firedBtn.addEventListener('click', (e) => {
      let data = e.target.parentElement.parentElement;
      let salary = data.querySelector('td:nth-of-type(6)').textContent;

      totalBudget -= Number(salary);

      let sum = document.querySelector('#sum');
      sum.textContent = `${Number(totalBudget).toFixed(2)}`;

      data.remove();
    });

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', (e) => {
      let data = e.target.parentElement.parentElement;

      let _salary = data.querySelector('td:nth-of-type(6)');

      firstName.value = data.querySelector('td:nth-of-type(1)').textContent;
      lastName.value = data.querySelector('td:nth-of-type(2)').textContent;
      email.value = data.querySelector('td:nth-of-type(3)').textContent;
      birthDate.value = data.querySelector('td:nth-of-type(4)').textContent;
      position.value = data.querySelector('td:nth-of-type(5)').textContent;
      salary.value = _salary.textContent;

      totalBudget -= Number(_salary.textContent);

      let sum = document.querySelector('#sum');
      sum.textContent = `${Number(totalBudget).toFixed(2)}`;

      data.remove();
    });

    tableDataButtons.appendChild(firedBtn);
    tableDataButtons.appendChild(editBtn);
    tableRow.appendChild(tableDataSalary);
    tableRow.appendChild(tableDataButtons);
    document.querySelector('#tbody').appendChild(tableRow);

    totalBudget += Number(salary.value);

    let sum = document.querySelector('#sum');
    sum.textContent = `${Number(totalBudget).toFixed(2)}`;

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    birthDate.value = '';
    position.value = '';
    salary.value = '';
  }
}

solve();
