const fs = require('fs');

console.log("Adding the patient_id and patient_name in JSON file ");

console.log("Running");

var originalNote ={patient_id : '1456' ,patient_name:'Aman Kumar'};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('CAfile.json',originalNoteString);

var noteString = fs.readFileSync('CAfile.json');

var obj = JSON.parse(noteString);


console.log(" Patient id :-"+ obj.patient_id);
console.log(" Patient name:-" +obj.patient_name);
