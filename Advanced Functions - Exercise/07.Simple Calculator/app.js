function calculator() {
  return {
    init: (selector1, selector2, resSelector) => {
      this.s1 = document.querySelector(selector1);
      this.s2 = document.querySelector(selector2);
      this.resS = document.querySelector(resSelector);
    },
    add: () =>
      (this.resS.value = Number(this.s1.value) + Number(this.s2.value)),
    subtract: () =>
      (this.resS.value = Number(this.s1.value) - Number(this.s2.value)),
  };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
