const fs=require('fs');
var fetchNotes=()=>{
  try {
    var notesString=fs.readFileSync('empoly.json');
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};
var saveNotes=(notes)=>{
  fs.writeFileSync('empoly.json',JSON.stringify(notes));
};
var addNote=(id)=>{
  var notes=fetchNotes();
  var note={ id};
    var duplicateNotes=notes.filter((note)=> note.id===id);
    if (duplicateNotes.length===0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }
  };
var logNote =(note)=>{
  console.log(`empolyee id :${note.id}`);
};
var getAll=()=>{
  return fetchNotes();
}
var getNote=(id)=>{
  var notes=fetchNotes();
  var filteredNotes =notes.filter((note)=> note.id===id);
  return filteredNotes[0];
};
module.exports={
  addNote,
  getAll,
  logNote,
  getNote,
};
