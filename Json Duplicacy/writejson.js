const _=require('lodash');
const yargs= require('yargs');
const notes=require('./notes-data.js');
const argv = yargs.argv;
var command = argv._[0];

console.log('Command:', command);
console.log('yargs',argv);
if(command ==='add'){
	notes.addNote(argv.title,argv.body);
}
else if( command === 'list'){
	notes.getAll();
}
else if( command ===' read'){
	notes.getNote(argv.title);
}
else if( command ===' remove'){
	notes.removeNote(argv.title);
}
else
{
console.log('Command not recognised');
}
