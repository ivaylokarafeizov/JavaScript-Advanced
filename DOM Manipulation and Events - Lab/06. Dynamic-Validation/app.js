function validate() {
  let email = document.getElementById('email');
  const pattern = /([a-z]+@[a-z]+.[a-z]+)/;

  email.addEventListener('change', () => {
    if (!pattern.test(email.value)) {
      email.className = 'error';
      return;
    }
    
    email.className = '';
  });
}
