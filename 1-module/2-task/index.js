/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(userName) {
  
  function space(username) {

    return ((userName.indexOf(` `) === -1) ? true : false);
  }
   


  return ((userName.length >= 4) && !(userName === null) && space()); 
              
              
}
  
  
  


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}


sayHello();