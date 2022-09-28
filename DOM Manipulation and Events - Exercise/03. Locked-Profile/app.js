function lockedProfile() {
  Array.from(document.querySelectorAll('.profile button'))
    .forEach((el) => el.addEventListener('click', toggle));

  function toggle(event) {
    let profile = event.target.parentElement;
    let isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;

    if (!isLocked) {
      let div = profile.querySelector('div');

      if (event.target.textContent == 'Show more') {
        div.style.display = 'block';
        event.target.textContent = 'Hide it';
      } else {
        div.style.display = 'none';
        event.target.textContent = 'Show more';
      }
    } 
  }
}
