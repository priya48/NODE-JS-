// ridhima.24015@lpu.co.in


const fs=require ('fs');
const yargs= require('yargs');
const notes =require('./module.js');

const argv =yargs.argv;
var command=argv._[0];

console.log('Command',command);
console.log('Yargs',argv);

if(command==='add')
{
console.log('Adding a note');
notes.addNote(argv.title,argv.body);
 notes.fet();//calling the reading functions
}


else
{
console.log("Command not recognized");
}
