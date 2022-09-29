function attachEventsListeners() {
  document.getElementById('convert').addEventListener('click', convert);

  function convert() {
    let fromUnit = document.getElementById('inputUnits').value;
    let toUnit = document.getElementById('outputUnits').value;

    let metricUnits = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };

    let inputDistance = Number(document.getElementById('inputDistance').value);
    let valueInMeters = inputDistance * metricUnits[fromUnit];
    let convertedValue = valueInMeters / metricUnits[toUnit];

    document.getElementById('outputDistance').value = convertedValue;
  }
}
