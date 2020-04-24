console.log('.js');

var command=process.argv[2];
console.log('Command',command);
console.log(process.argv);

console.log("Adding new note");


if (command=='add')
{
console.log('Adding a note');
}

else if(command=='list'){
console.log("Listing all nodes");
}

else if(command=='read'){
console.log("Reading notes");
}

else if(command=='remove'){
console.log("Removing notes");
}

else
{
console.log("Command not recognized");
}