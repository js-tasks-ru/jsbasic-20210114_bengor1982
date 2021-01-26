/**
 * checkSpam
 * @param {string} str
 * @returns {boolean}
 */
<<<<<<< HEAD
function checkSpam() {
  // ваш код...
  let str //= prompt(`Введите слово`);

  str = str.toLowerCase();

  let xbet = str.indexOf('1xbet');
  let xxxx = str.indexOf('xxx');

  return (!(xbet === -1) || !(xxxx === -1));

//alert (str)
//alert (xbet)
//alert (xxxx)
//alert (!(xbet === -1) || !(xxxx === -1))
//((xbet === -1) || (xxxx === -1) ? 'true' : 'false');
=======
function checkSpam(str) {
  let strLowerCase = str.toLowerCase();

  return strLowerCase.includes('1xbet') || strLowerCase.includes('xxx');
>>>>>>> 220ed813772345675c5b511c62e3554542b3d117
}

checkSpam();





