const fs=require ('fs');
const yargs= require('yargs');
const notes=require('./stu2.js');//file name

const idOptions={
describe:'Student-id ',
demand:true,
alias:'i'
};


const nameOptions={
describe:'Name of student ',
demand:true,
alias:'n'
};

const courseOptions={
describe:'Course for student',
demand:true,
alias:'c'
};

const argv=yargs.command('add','Add a new note',{name:nameOptions,course:courseOptions,id:idOptions})
.command('list','List all notes')
.command('read','Read a note ',{name:nameOptions})
.command('remove','Remove a note',{name:nameOptions})
.help()
.argv;

var command=argv._[0];

if (command==='add'){
  var note = notes.addNote(argv.name,argv.course,argv.id);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  }else {
    console.log('Note title taken');
  }
}
else if(command==='list')
{
  var allNotes= notes.getAll();
  console.log(`priniting ${allNotes.length} notes(s).`);
  allNotes.forEach((note)=> notes.logNote(note));
}

else if(command==='read')
{
  var note =notes.getNote(argv.name);
  if (note){
    console.log('Note Found');
    notes.logNote(note);
  }else {
    console.log('Note not found');
  }
}

else if(command==='remove')
{
  var noteRemoved=notes.removeNote(argv.name);
  var message=noteRemoved ?'Note was removed':'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}


/*
name=title,
body=course

const titleOptions={
describe:'Title of note '
demand:true,
alias:'t'
};


const bodyOptions={
describe:'body of note '
demand:true,
alias:'b'
};


const argv=yargs.command('add','Add a new note'{
title:titleOptions,
body:bodyOptions
})

.command('list','List all notes');

.command('read','Read a note '{
title:titleOptions
})

.command('remove','Remove a note',{
title:titleOptions
})
.help()
.argv;

*/
