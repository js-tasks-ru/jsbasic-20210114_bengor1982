/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

let str = prompt(`Введите вашу фразу`);
let maxlength = +(`Введите длину строки`, `20`);
function truncate(str, maxlength) {
<<<<<<< HEAD
  // сравнить заданную длину с длиной строки;

  if (maxlength >= str.length) {
  // вывести сроку если она меньше;
    return str;
  } else {
    //вывести строку меньше на 1 разрешенной длины + многоточие
    return (str.slice(0, --maxlength) + `…`);
  }

  //str.substr(start [, length]);

=======
  let strLength = str.length;
  let isExceedMaxlength = strLength > maxlength;

  if (isExceedMaxlength) {
    let shortenStr = str.slice(0, maxlength - 1);

    return `${shortenStr}…`;
  }

  return str;
>>>>>>> 220ed813772345675c5b511c62e3554542b3d117
}

truncate();