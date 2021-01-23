/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  
var str = prompt(`Введите слово`);
  if (str === ``) return(``);
    
  str = (str[0].toUpperCase()) + str.slice(1); 
    
  return(str);
    
}
     

ucFirst();