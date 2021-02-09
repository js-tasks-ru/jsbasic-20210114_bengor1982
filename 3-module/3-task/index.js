/**
 * @param {string} str
 * @returns {string}
 * 
 * 
 *  
 */


/*camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
*/

//str = 'bac-kground-color'/* == 'backgroundColor';
//camelize('list-style-image') == 'listStyleImage';
//camelize('-webkit-transition') == 'WebkitTransition';
//*/

//console.log(111111);


function camelize(str) {
  //Разбиваем строку на массив букв
  //Ищем ,-, если находим, то индекс +1 меняем на заглавную
  //Удаляем дефисы из массива
  //возвращаем строку через join
  
  
  
  //let massivLetter = str.split('');
  //let i
  //console.log (massivLetter)
  
  //for ( , (massivLetter.indexOf('-') === -1) , (massivLetter[i + 1].toUpperCase(),
  //massivLetter.splice(i, 1) )) {
    //let i = massivLetter.indexOf('-'),
    //console.log (massivLetter),
    //massivLetter[i + 1].toUpperCase(),
    //massivLetter.splice(i, 1)
  //}
  /*let i
  let redonLetter = massivLetter.map((item, index) => 
      item !== '-' ? 
      item :
  //massivLetter = massivLetter.splice(index[1]),
      //i = massivLetter.indexOf('-'),
      item = (massivLetter[index + 1].toUpperCase(),
        //i = massivLetter.indexOf('-'),
      //console.log (massivLetter),
      
      ///console.log (massivLetter),
      //redonLetter.splice(i, 1)
      //massivLetter = massivLetter.splice(index, 1)
    //console.log(item), 
      massivLetter = massivLetter.splice(index + 1, 1))
      //item = massivLetter[+i + +1].toUpperCase()
) //; */
  //return redonLetter;
  //Я НИХУЯ НЕ ПОНЯЛ, ПОЧЕМУ МОЙ КОД НЕ РАБОТАЛ. В ПИЗДУ ДЖАВУ СКРИПТ. УБИЛ ВЫХОДНОЙ. ЗАТО НАУЧИЛСЯ УДАЛЯЯТЬ К ХУЯМ ПРОЕКТЫ ИЗ ГИТ ХАБА.
  return str
  .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
  .map(
    // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
    // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'

}

//camelize(str);

//console.log(camelize(str));


