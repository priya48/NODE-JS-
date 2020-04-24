console.log("hi how are you");
const fs=require('fs');

const _= require('lodash');
const array= _.chunk(['abc',1,2,3,'abc','de',2]);
const array1= _.uniq(['abc',1,2,3,'abc','de',2],2);

var other = _.concat('qwerty', [3], [[4]]);

console.log(other);
console.log(array1);
console.log(array);



console.log(_.isstring(true));
console.log(_.isstring('Priya'));