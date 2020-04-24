const fs=require('fs');

var addNote =(title,body)=>{
let  note={title,body};
let data = JSON.stringify(note);
fs.writeFileSync('student.json', data);
};


var fet=(title,body)=>{
var rawdata = fs.readFileSync('student.json');
var student = JSON.parse(rawdata);
 console.log("WE are reading the file ",student);
};


module.exports={
	addNote,
  fet

};
