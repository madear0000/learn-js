//1 да будет

//2

function checkAge(age) {
    let check = (age > 18) ? true : confirm('Родители разрешили?');
    return check;
}

function checkAges(age) {
    let cheeck = (age > 18) || confirm('Родители разрешили?');
    return cheeck;
}

//3

function min(a, b) {
    let m = (a > b) ? b : a;
    return m;
}


//4

function pow(a, b) {
    return a ** b;
}

let a = prompt("Введите основание степени", "");
let b = prompt("Введите степнь", "");

if (b >= 1 && b % 1 == 0) {
    alert(pow(a, b)) 
} else {
    alert("Неверно")
}