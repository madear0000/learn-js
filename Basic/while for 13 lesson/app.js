//1. 1

// 2. {
//     1. 1 2 3 4 
//     2. 1 2 3 4 5
// }

//3

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//4

let i = 0;
while (i < 3) {
    i++;
    alert( `number ${i}!` );
}

//5

while (true) {
    let userNumber = prompt("Введите число больше 100", "") 
    if (+userNumber > 100) {
        break;
    } else {
        continue
    }

}

//6

let ourNumber = 10;
outer: for (let i = 2; i < ourNumber; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue outer
        }
    }
    console.log(i)
}


