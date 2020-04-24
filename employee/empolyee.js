const fs=require ('fs');
const yargs= require('yargs');
const notes=require('./employee2.js');
const idOptions={
describe:'emp-id',
demand:true,
alias:'i'
}
const argv=yargs.command('add','Add a new note for id ',{id:idOptions})
.command("list all notes ").help().argv;
var command=argv._[0];
if (command==='add'){
  var note = notes.addNote(argv.id);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  }else {
    console.log('Note not created taken');
  }
}
else if(command==='list')
{
  var allNotes= notes.getAll();
  console.log(`priniting ${allNotes.length} notes(s).`);
  allNotes.forEach((note)=> notes.logNote(note));
}
else {
  console.log('Command not recognized');
}
