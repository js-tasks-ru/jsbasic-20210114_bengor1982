/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

/*let user1 = {
    "balance": "$1,725.65",
    "picture": "https://placehold.it/32x32",
    "age": 14,
    "name": "Goasdasdsalden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
  };
  let user2 = {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
  };
  let user3 = {
    "balance": "$1,925.65",
    "picture": "https://placehold.it/32x32",
    "age": 18,
    "name": "n sdasadsBranch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
  };
  let user4 = {
    "balance": "$2,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 30,
    "name": "lden Basfafsfasfasfaranch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
  };

  let users = [user1, user2, user3, user4,]
  */
//let workMassiv

//console.log(users)
function showSalary(users, age) {
  //Создадим копию массива

  //удалим обьекты с неподходящим возрастом
  let workMassiv = users.slice();

  let workGoMassiv = workMassiv.filter(item => item.age <= age);
  //console.log(workGoMassiv);
  /*let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
      ];
      
      // возвращает массив, состоящий из двух первых пользователей
      let someUsers = users.filter(item => item.id < 3);
      
      alert(someUsers.length); // 2
    return workMassiv*/
  //Отбросить лишние значения и привести к одной строке обьекты
  let workMapped = workGoMassiv.map(user => ({
    name: `${user.name}, ${user.balance}`,
  }));
  /*let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
      }));*/
  //console.log(workMapped);

  let workFin = workMapped.concat();
  //console.log(workFin);
    
  let result = workFin.map(e => e.name).join('\n');

  //console.log(result);

  return result


}
//showSalary (users, 18)
//console.log(workMassiv)