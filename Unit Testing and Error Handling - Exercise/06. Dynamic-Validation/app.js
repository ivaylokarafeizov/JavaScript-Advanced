function validate() {
  let email = document.getElementById('email');
  let pattern = /([a-z]+@[a-z]+.[a-z]+)/;

  email.addEventListener('change', () => {
    !pattern.test(email.value) ? email.className = 'error' : email.className = ''; 
  });
}
