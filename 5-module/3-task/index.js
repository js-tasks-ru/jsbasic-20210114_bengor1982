function initCarousel() {
  
  /* Определить ширину слайда через offsetWidth */
  let width = document.querySelector('.carousel__img').offsetWidth; 
  
  /*собрать коллекцию в list*/
  let list = document.querySelector('.carousel__inner');
  
  //function (hide)
  
  // положение ленты прокрутки. я бы сделал рандом, что бы менялось при каждом заходе
  let position = 0; 
  //Парочка доп переменных
  let left = document.querySelector('.carousel__arrow_left');
  let righ = document.querySelector('.carousel__arrow_right');
  let i = 0;
  //Позиция О, значит убираем левую кнопку
  left.style.display = 'none';
  
  //Функции и действия для кликов по правой и левой стрелке

  document.querySelector('.carousel__arrow_left').onclick = function() {
    position += width;
    i--;
    list.style.transform = `translateX(${position}px)`;
    if (i == 0) {
      left.style.display = 'none';
      righ.style.display = '';
    } else {
      left.style.display = '';
      righ.style.display = '';
    }
  };

  document.querySelector('.carousel__arrow_right').onclick = function() {
    position -= width;
    i++;
    list.style.transform = `translateX(${position}px)`;
    if (i == 3) {
      righ.style.display = 'none';
      left.style.display = '';
    } else {
      left.style.display = '';
      righ.style.display = '';
    }
  };
  
}
