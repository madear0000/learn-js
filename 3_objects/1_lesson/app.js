//1

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2

function isEmpty(obj) {
    for (key in obj) {
        return false;
    } 
    return true;
}

//3 да

//4 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;

for (key in salaries) {
    sum += salaries[key];   
}

//5

function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        }
    }
}
