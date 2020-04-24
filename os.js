console.log("File is successfully running");
const fs=require('fs');
const os=require('os');
const notes=require('./ownfile.js')
//var user=os.userInfo();
console.log('Result:',notes.add(9,-2));

/*

fs.appendFile('priya.txt',`hello ${user.username} ${notes.age}!`,function(err,data)
{
if(err)
{
console.log('abc');
}

});
*/
