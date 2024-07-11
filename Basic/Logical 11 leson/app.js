// 1. 2
// 2. 1 а потом 2
// 3. null
// 4. 1 а потом undefind
// 5. 3
// 6. 30



//7
let age;

if (age >= 14 && age <= 90) {
    alert('Верно');
}




//8
if (age < 14 || age > 90) {
    alert('Верно');
}

if (!(age >= 14 && age <= 90)) {
    alert('Верно');
}




// 9 {
//     1. выполнится
//     2. не выполнится
//     3. выполнится
// }




//10
let whoAreYou = prompt("Кто там?", "");

if (whoAreYou == "Админ") {
    let password = prompt("Пароль", "");
    if (password == "Я главный") {
        alert('Здравствуйте!')
    } else if (password == "Отмена") {
        alert("Отменено")
    } else {
        alert("Неверный пароль")
    }
}else if (whoAreYou == "Отмена") {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}
