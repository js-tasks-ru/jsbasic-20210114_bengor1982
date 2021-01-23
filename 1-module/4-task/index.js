/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
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
}

checkSpam();





