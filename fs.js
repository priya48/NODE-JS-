
const fs= require('fs');

fs.appendFile('priya.txt','Hello',function(err)
{
if (err)
{
console.log('File can not be executed');
}

else 
{
	console.log("File is running");
}

});