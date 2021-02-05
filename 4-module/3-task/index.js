/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
  //проверяем 3 ячейку каждой строки на наличие атрибута data-available
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let k = 3;
    if (row.cells[k].hasAttribute('data-available')) {
      if (row.cells[k].getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', '');
    }}
    
  //проверяем s m и добавляем стиль
  for (let n = 1; n < table.rows.length; n++) {
    let ron = table.rows[n];
    let m = 2;
    if (ron.cells[m].innerHTML === 'm') {
        ron.classList.add('male');
      //ron.cells[m].classList.add('male');
    } else {
        ron.classList.add('female');
      //ron.cells[m].classList.add('female');
    }}

  //проверяем 1 ячейку каждой строки, сравниваем с 18
  for (let n = 1; n < table.rows.length; n++) {
    let ron = table.rows[n];
    let m = 1;
    
    if (ron.cells[m].innerHTML < 18) {
        ron.style = "text-decoration: line-through";
      //ron.cells[m].style = "text-decoration: line-through";
    }}

}
