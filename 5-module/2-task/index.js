function toggleText() {
  let Tuk = document.querySelector('#text');
  document.querySelector('.toggle-text-button').onclick = function() {
    if (Tuk.hidden == false) {
      Tuk.hidden = true;
    } else {
      Tuk.hidden = false;
    }};}