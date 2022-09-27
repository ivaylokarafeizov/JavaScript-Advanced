function focused() {
  Array.from(document.querySelectorAll('input')).forEach((element) => {
    element.addEventListener('focus', () => {
      element.parentElement.classList.add('focused');
    });

    element.addEventListener('blur', () => {
      element.parentElement.classList.remove('focused');
    });
  });
}
