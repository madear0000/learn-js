//1, выведено будет так как "0" является true

//2
let officalName = prompt("Какое «официальное» название JavaScript?", "");

if (officalName == "ECMAScript") {
    alert("Верно");
} else {
    alert("Не знаете? ECMAScript!");
}

//3 
let userNumber = prompt("Введите число", "");
if (+userNumber > 0) {
    alert("1");
} else if (+userNumber < 0) {
    alert("-1");
} else {
    alert("0");
}

//4
let result = (a + b < 4) ? "Много" : "Мало";

//5
let message = (login == "Сотрудник") ? 'Привет':
(login == "Директор") ? 'Здравствуйте':
(login == "") ? 'Нет логина':
"Нет логина";





