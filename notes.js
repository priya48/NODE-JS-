//console.log("File is running");

var addNote=(title,body)=>{
console.log('Adding note',title,body);
};

var getAll=(title,body)=>{
console.log('Getting all nodeds',title,body);
};

var getNote =(title,body)=>
{
console.log('Getting node',title,body);
};


var removeNote =(title,body) =>
{
console.log('Removing node',title,body);
};

//Removing node undefined


module.exports ={
addNote,
getAll,
getNote,
removeNote
}