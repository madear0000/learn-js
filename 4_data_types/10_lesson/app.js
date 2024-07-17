let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxLst = [];
    for (let value of Object.values(salaries)) {
        maxLst.push(value);
    }
    for (let [key, value] of Object.entries(salaries)) {
        if (value == Math.max(...maxLst)) {
            alert(key);
        }
        
    }
}

topSalary(salaries);