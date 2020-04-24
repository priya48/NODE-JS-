const fs=require('fs');

var addNote =(title,body)=>{
var notes=[];
let  note={title,body};
notes.push(note);
fs.writeFileSync('read1.json', JSON.stringify(notes));
};


var fet=(title,body)=>{
 var rawdata = fs.readFileSync('read1.json');
 var student = JSON.parse(rawdata);
 console.log("WE are reading the file ",student);
};

module.exports={
	addNote,
  fet
};


// JSON.parse takes JSON data as input and returns a new JavaScript object.
// Otherwise, we would just have a string of data with properties we can’t access.
