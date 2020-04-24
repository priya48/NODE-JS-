console.log('starting notes.js');

var addnote = (id, name)=>{
	
return id+ "" + name;}

var getAll =()=> {
console.log('Name');
	
};

var getNumber =(id)=>{
	console.log('Number');
	
};



var removeNote =(id,name)=>{
	console.log('Removing note');
}

module.exports = {
	addnote,
	getAll,
	getNumber,
	removeNote
}