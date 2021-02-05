/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
/*
let friends = [
    {
        firstName: 'Artsiom',
        lastName: 'Mezin'
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor'
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael'
    }
  ];
  /*
function makeFriendsList(friends) {
   
//Исходный массив для удобства превратим в массив готовых имен

let friendsMapped = friends.map(friends => (`${friends.firstName} ${friends.lastName}`));
console.log(friendsMapped)
//Вводим переменную Html
let html = '<ul>';
//Перебором добавляем в html теги с текстом
friendsMapped.forEach(function(item, i, arr) {
  html += '<li>'+ item+'</li>';
});
html += '</ul>';
console.log(html)
return html;
};
makeFriendsList(friends)

*/
function makeFriendsList(friends) {
  //Исходный массив для удобства превратим в массив готовых имен
  
  let friendsMapped = friends.map(friends => (`${friends.firstName} ${friends.lastName}`));
  //console.log(friendsMapped)

  //Вводим переменную
  let list = document.createElement("ul");
  //Перебором добавляем в list теги с текстом
  for (let i = 0; i < friendsMapped.length; i++) {
    let newItem = document.createElement("li");
    let newText = document.createTextNode(friendsMapped[i]);
    newItem.appendChild(newText);
    list.appendChild(newItem);
  }
  // console.log(list)
  return list;
}
//makeFriendsList(friends)