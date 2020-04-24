console.log('Starting notes-data.js')

const fs=require('fs');

var addNote= (title,body)=>{
	var notes=[];
	var note={title,body};

	try
	{
		var a=fs.readFileSync('notes-data.json');
		notes=JSON.parse(a);
	} catch(e){
	}

	var duplicateNotes=notes.filter((note)=>note.title === "title");
	if(duplicateNotes.length === 0){
		notes.push(note);
	fs.writeFileSync('notesdata.json', JSON.stringify(notes));
}
};
var getAll = () =>{
	console.log('Getting all notes');
};
var getNote =(title)=>{
	console.log('Getting note', title);
};
var removeNote = (title)=>{
	console.log('remmoving note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
