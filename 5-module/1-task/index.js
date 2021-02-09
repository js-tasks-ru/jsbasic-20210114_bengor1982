function hideSelf() {
  //ввести переменную отвечающую за кнопку
  document.querySelector('.hide-self-button').onclick = function() {
    //подвесить на клик хидден тру
    document.querySelector('.hide-self-button').hidden = true;
  };
  //let zButton = document.getElementsByClassName('hide-self-button');
  //zButton.onclick = (zButton.hidden = true);
  //onclick = "this.hidden=true" value="Нажми, чтобы спрятать"></input>

}
