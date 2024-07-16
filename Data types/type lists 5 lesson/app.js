//1

function camelize(str) {
    return str.split('-').join('');   
}

//2
function filterRange(arr, a, b) {
    let newArr = [];
    for (let key of arr) {
        if (key >= a || key <= b) {
            newArr.push(key)
        }
    }
    return newArr

}


//3

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            delete arr[i]
        }
    }
}

//4


function compare(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  }
  
//arr.sort(compare);

//5

function copySorted(arr) {
    let newArray = arr.sort();
    return newArray;
}

//6

function Calculator() {
    this.calculate = function(str) {
        if (str[2] == "+") {
            return +str[0] + +str[4];
        } else if (str[2] == "-") {
            return +str[0] - +str[4];
        } else if (str[2] == "*") {
            return +str[0] * +str[4];
        } else if (str[2] == "/") {
            return +str[0] / +str[4];
        } else if (str[2] == "**") {
            return (+str[0]) ** +str[4];
        } 
    }

    this.newMethod = {

    };

    this.addMethod = function(name, func) {      
        this.newMethod[name] = func;
    }
}

//7

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

//let names = users.map(item => item.name);

//8


// let usersMapped = users.map(item => ({
//     fullName : item.name + " " + item.surname,
//     id : item.id
// }));

//9

function sortByAge(arr) {
    function sor(a, b) {
         return a.age - b.age
    }

    arr.sort(sor);
    
}


//10 вопрос

//11

function getAverageAge(arr) {
    let sum = 0;
    let count = 0;
    for (let key of arr) {
        sum += key.age
        count++
    }
    return sum / count;
}


//12

function unique(arr) {
    let newArray = [];
    
    for (let key of arr) {
        if (!newArray.includes(key)) {
            newArray.push(key)
        }
    }
    return newArray;
  }


//13

function groupById(users) {
    let group = users.reduce((a, v) => {
        a[v.id] = v;
        return a
    }, {});

    return group

}






