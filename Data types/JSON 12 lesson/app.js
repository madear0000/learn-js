//1

let user = {
    name: "Василий Иванович",
    age: 35
  };

let jso = JSON.stringify(user);

let js = JSON.parse(jso);

//2

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    if (value != meetup) {
        return value;
    } else {
        undefined;
    }
  }));