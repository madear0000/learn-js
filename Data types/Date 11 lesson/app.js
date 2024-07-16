//1 new Date(year, month, date, hours, minutes, seconds, ms)

let newData = new Date(2012, 2, 20, 3, 12);

//2

const getWeekDay = (date) => {
    Weekday = [
        "ВС", 
        "ПН",
        "ВТ", 
        "СР",
        "ЧТ", 
        "ПТ", 
        "СБ",
    ];
    return Weekday[date.getDay()];
}


//3

const getLocalDay = (date) => {
    Weekday = [
        "ПН", 
        "ВТ",
        "СР", 
        "ЧТ",
        "ПТ", 
        "СБ", 
        "ВС",
    ];
    if (date.getDay() == 0) {
        return Weekday[0];
    } else {
        return Weekday[date.getDay() - 1];
    }
}

//4

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);

    return date.getDate();
}

//5

 function getLastDayOfMonth(year, month) {
    let newDate = new Date();
    newDate.setFullYear(year, month + 1, 0);
    alert(newDate);
 }


 //6

 const getSecondsToday = () => {
    let time = new Date();
    return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
 }

//7

const getSecondsToTomorrow = () => {
    let timeTomorrow = new Date();
    return 86400 - timeTomorrow.getHours() * 3600 + timeTomorrow.getMinutes() * 60 + timeTomorrow.getSeconds();
}


