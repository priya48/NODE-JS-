
const fs=require ('fs');
const yargs= require('yargs');
const notes =require('./noteadd.js');
const argv =yargs.argv;
var command=argv._[0];
console.log('Command',command);
console.log('Yargs',argv);
if(command==='add')
{
console.log('Adding a note');
notes.addNote(argv.title,argv.body);
}
else if(command === 'remove'){
notes.removeNote(argv.title,argv.body);
}

else
{
console.log("Command not recognized");
}
