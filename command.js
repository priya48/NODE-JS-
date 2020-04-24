
//node command.js add name="priya"
//File is running
//Command add
//npm install yarges@4.7.1 --save 
//npm yarges -v


console.log('File is running');
//const notes=require('./notes.js');
var command = process.argv[2];
console.log('Command',command);
console.log(process.argv);


if(command==='add')
{
console.log('Adding a note');
}


else if(command==='list')
{
console.log("Listing all nodes");
}

else if(command==='read')
{
console.log("Reading all nodes");
}

else if(command==='remove')
{
console.log("Removing notes");
}

else
{
console.log("Command not recognized");
}



/*
console.log("File is running");
notes .js 
var addNote=(title,body)=>{
console.log('Adding note',title,body);
};

var getAll=()=>{
console.log('Getting all nodeds');
};

var getNote =(title) =>
{
console.log('Getting node',title);
};


var removeNote =(title) =>
{
console.log('Removing node',title);
};


module.exports ={
addNote,
getAll,
getNote,
removeNote
}*/