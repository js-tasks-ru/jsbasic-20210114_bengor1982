/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
<<<<<<< HEAD
function isValid(userName) {
  
  function space(username) {

    return ((userName.indexOf(` `) === -1) ? true : false);
  }
   


  return ((userName.length >= 4) && !(userName === null) && space()); 
              
              
=======
function isValid(name) {
  return !!name && !name.includes(' ') && name.length >= 4;
>>>>>>> 89a17fcfc5b8f084c3d77813cda4a5d527815953
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