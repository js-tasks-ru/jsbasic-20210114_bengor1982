/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


//let str = '1, -5.8 ,или, 10, хотя,,,, 34 + -5.3 и 73';

function getMinMax(str) {
  // Заменим во входной строке все запятые пробелами
  let spaсeStr = str.replace(/,/g," ");
  //console.log(spaсeStr);
  // Разобрать строку в массив по пробелам
  let massStr = spaсeStr.split(' ');
  //console.log(massStr);
  //массив привести к числовому виду 
  // Ну хз, я привожу все лишнее к НАН
  let numberStr = massStr.map(item => item !== '' ? item : item - NaN);
  //console.log(numberStr);
  //Избавляемся от всего, что дает NAN
  let cleanNumberStr = numberStr.filter(item => (-Infinity < item && item < Infinity));
  //console.log(cleanNumberStr);
  //отобрать максимум и минимум
  let maxStr = Math.max(...cleanNumberStr);
  //console.log(maxStr);
  let minStr = Math.min(...cleanNumberStr);
  //console.log(minStr);
  //превратить в обьект с задаными параметрами
return {min: minStr, max: maxStr,};

}
//getMinMax(str);
//console.log(getMinMax(str));