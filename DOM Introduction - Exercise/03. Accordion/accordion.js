function toggle() {
  let extraContent = document.getElementById('extra');
  let button = document.getElementsByClassName('button')[0];

  if (button.textContent == 'More') {
    extraContent.style.display = 'block';
    button.textContent = 'Less';
  } else {
    extraContent.style.display = 'none';
    button.textContent = 'More';
  }
}
