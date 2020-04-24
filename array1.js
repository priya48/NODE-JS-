const op=require('./array2.js');


console.log('array from',op.declr());

var val1=op.declr();
console.log('Sum from',op.sum(val1));



var val2=op.sum(val1);
console.log('Sum from',op.avg(val2));


var val3=op.avg(val2);
var output =op.show(val1,val2,val3);

console.log("Final output");

console.log("original output"+output[0]);
console.log("Sum of element "+output[1]);
console.log("Avg of elements "+output[2]);
