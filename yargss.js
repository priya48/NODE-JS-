console.log('staring  yargs.js');
//const fs =  require('fs');
const fs=require('fs');

const yargs = require('yargs');
const notes = require('./pat.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('command:', command);
console.log('Yargs', argv);


if(command === 'add'){
	
var fetchname =	notes.addnote(argv.id, argv.name);
	
 fs.appendFile('priya.txt',fetchname,function(err)
{
	if(err){
		console.log('abc');
	}
}

	);

}

else if (command === 'list'){
	notes.getAll();


		console.log(notes.getName());
		
}

else if (command === 'read'){
	
	notes.getNumber(argv.title);
}


 else if(command === 'remove'){
 notes.removeNote(argv.title);
 }

 else {
 console.log('command not recoginzed');
 }




 

