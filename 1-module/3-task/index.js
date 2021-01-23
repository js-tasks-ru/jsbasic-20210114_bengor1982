/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
<<<<<<< HEAD
  
var str = prompt(`Введите слово`);
  if (str === ``) return(``);
    
  str = (str[0].toUpperCase()) + str.slice(1); 
    
  return(str);
    
=======
  let firstLetter = str.charAt(0);
  let firstLetterUpperCase = firstLetter.toUpperCase();
  let otherLetters = str.slice(1);

  return `${firstLetterUpperCase}${otherLetters}`;
>>>>>>> 89a17fcfc5b8f084c3d77813cda4a5d527815953
}
     

ucFirst();