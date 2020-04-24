const fs =require('fs');

var fetchNotes=()=>{
  try {
    var notesString=fs.readFileSync('stu.json');
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes=(notes)=>{
  fs.writeFileSync('stu.json',JSON.stringify(notes));
};

var addNote=(name,course,id)=>{
  var notes =fetchNotes();
  var note={
    name,
    course,
    id
};

var duplicateNotes=notes.filter((note)=> note.name===name);
if (duplicateNotes.length===0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};

var getAll=()=>{
  return fetchNotes();
}


var getNote=(name)=>{
  var notes=fetchNotes();
  var filteredNotes =notes.filter((note)=> note.name===name);
  return filteredNotes[0];
};

var removeNote=(name)=>{
  var notes=fetchNotes();
  var filteredNotes= notes.filter((note)=>note.name!==name);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote =(note)=>{
  console.log('---');
  console.log(`Reg no :${note.id}`);
  console.log(`Name:${note.name}`);
  console.log(`Course:${note.course}`);

};

module.exports={
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};


//node app.js read  --title="Priya"
//node app.js remove --title="Priya2" --body="priya"
//node app.js list
//node app.js add --title="Priya2" --body="priya"
