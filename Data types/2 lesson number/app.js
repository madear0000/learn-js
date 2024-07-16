//1

let firstNumber = prompt("first", "");
let secondNumber = prompt("second", "");

alert(+firstNumber + +secondNumber);

//2

Math.round(6.35 * 10) / 10

//3

while (true) {
    let userNumber = prompt("number", "");
    if (!isNaN(userNumber)) {
        break;
    } else {
        continue;
    }
}

//4 из за того что числа бесконечные и идут по типу 0.22222222222221 и ровно 10 никогда не получится

//5

function random(min, max) {
    alert(Math.random() * (max - min) + min);
}

random(1, 5)

//6

function randomInteger(min, max) {
    alert(Math.floor( Math.random() * (max + 1 - min) + min));
  }