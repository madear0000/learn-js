//1

function unique(arr) {
    let NewArray = new Set(arr);
    return NewArray;
  }
  
//2

function aclean(arr) {
   let lst = new Map();
   let chageLst = [];

   for (let key of arr) {
        lst.set(key, key.toLowerCase().split('').sort().join(''));
   }
   for (let amount of lst.values()) {
        chageLst.push(amount)
  } 

   newLst = new Set(chageLst);

   console.log(Array.from(newLst));
}

//3 Array from

