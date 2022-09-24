function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    let arr = JSON.parse(document.querySelector('#inputs textarea').value);
    let objWinner = findBestRestaurant(arr);
    document.querySelector('#bestRestaurant>p').textContent =
      getMessageRest(objWinner);
    document.querySelector('#workers>p').textContent = getMessageEmployee(
      objWinner.workers
    );
  }

  function getMessageRest(objWinner) {
    return `Name: ${
      objWinner.name
    } Average Salary: ${objWinner.avgSalary.toFixed(
      2
    )} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
  }

  function getMessageEmployee(workers) {
    return workers
      .map((w) => `Name: ${w.worker} With Salary: ${w.salary}`)
      .join(' ');
  }

  function findBestRestaurant(arr) {
    let resultRestaurants = arr.reduce((acc, e) => {
      let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
      workers = workers.map((w) => {
        let [worker, salary] = w.split(' ');
        return {
          worker: worker,
          salary: +salary,
        };
      });
      let foundRestaurant = acc.find((r) => r.name === restaurant);
      if (foundRestaurant) {
        foundRestaurant.workers = foundRestaurant.workers.concat(workers);
      } else {
        acc.push({
          name: restaurant,
          workers: workers,
        });
      }
      return acc;
    }, []);

    resultRestaurants.forEach((el, i) => {
      el.inputOrder = i;
      el.avgSalary =
        el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
      el.maxSalary = Math.max(...el.workers.map((w) => w.salary));
    });

    resultRestaurants.sort(
      (a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder
    );
    let bestRestaurant = resultRestaurants[0];
    bestRestaurant.workers.sort((a, b) => b.salary - a.salary); 
    return bestRestaurant;
  }
}
