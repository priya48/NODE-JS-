const fs=require('fs');

var addNote =(title,body)=>{
var notes=[];
var note={title,body};
notes.push(note);
fs.writeFileSync('read.json', JSON.stringify(notes));

 let rawdata = fs.readFileSync('read.json');
 let student = JSON.parse(rawdata);
 console.log("WE are reading the file ",student);

};
var removeNote =(title,body)=>{
	console.log('Removing node',title,body);
};

module.exports={
	addNote,
	removeNote
};


// JSON.parse takes JSON data as input and returns a new JavaScript object.
// Otherwise, we would just have a string of data with properties we can’t access.
