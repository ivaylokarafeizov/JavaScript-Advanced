function validate() {
  let submitBtn = document.querySelector('#submit');
  submitBtn.type = 'button';
  submitBtn.addEventListener('click', validate);

  let checkbox = document.querySelector('#company');
  checkbox.addEventListener('change', () => { 
    document.querySelector('#companyInfo').style.display = checkbox.checked ? 'block' : 'none';
  });

  function validate() {
    let isValid = [];
    let userName = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPass = document.querySelector('#confirm-password');
    let checkbox = document.querySelector('#company');
    let userTest = /^[A-Za-z0-9]{3,20}$/;
    let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    let passTest = /^[\w]{5,15}$/;

    if (userTest.exec(userName.value) === null) {
      userName.style.borderColor = 'red'; 
    } else {
      userName.style.borderColor = ''; 
    }
    userName.style.borderColor == 'red' ? isValid.push(false) : isValid.push(true); 

    if (emailTest.exec(email.value) === null) {
      email.style.borderColor = 'red'; 
    } else {
      email.style.borderColor = ''; 
    }
    email.style.borderColor == 'red' ? isValid.push(false) : isValid.push(true);

    if (password.value === confirmPass.value &&
      passTest.exec(confirmPass.value) != null &&
      passTest.exec(password.value) != null
    ) {
      confirmPass.style.borderColor = '';
      password.style.borderColor = '';
      isValid.push(true);
    } else {
      confirmPass.style.borderColor = 'red';
      password.style.borderColor = 'red';
      isValid.push(false);
    }

    if (checkbox.checked) {
      let company = document.querySelector('#companyNumber');
      if (company.value < 1000 || company.value > 9999) {
        company.style.borderColor = 'red'; 
      } else {
      company.style.borderColor = ''; 
      }
      company.style.borderColor == 'red' ? isValid.push(false) : isValid.push(true);
    }  
    document.querySelector('#valid').style.display = !isValid.includes(false) ? 'block' : 'none';
  }
}
