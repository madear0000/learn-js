//1 pete

//2 pete

//3 0, 1

//4 1, 2, 1

//5 undefinded

//6

function sum(a) {
    return function(b) {
        return a + b;
    }
}

//7 undefinded

//8
function inBetween(a, b) {
    return function(lst) {
        if (lst <= b && lst >= a) {
            return lst;
        }
    }
}

function inArray(lst2) {
    return function(lst1) {
        return lst2.includes(lst1);
    }
}

//9

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(str) {
    return function(x, y) {
        if (x[str] > y[str]) {
            return 1;
        } else {
            return -1;
        }
    }
}

