
const fs=require ('fs');
//const os=require('os');
const yargs= require('yargs');
const notes =require('./ownfile1.js');
console.log('Added ',notes.addNote());





fs.appendFile('new file.txt',`${notes.title}`,function(err)
{
if(err)
{
console.log('File not write successfuly');
}
else {
console.log('File write successfuly');
	
}

});




const argv =yargs.argv;
var command=argv._[0];
console.log('Command',command);
console.log('Yargs',argv);




if(command==='add')
{
console.log('Adding a note');
notes.addNote(argv.title,argv.body);
}


else if(command==='list')
{
console.log("Listing all nodes");
notes.getAll(argv.title,argv.body);
}

else if(command==='read')
{
console.log("Reading all nodes");
notes.getNote(argv.title,argv.body);
}

else if(command==='remove')
{
console.log("Removing notes");
notes.removeNote(argv.title,argv.body);
}

else
{
console.log("Command not recognized");
}



