const fs = require('fs');

//reading a file
let fileContent = fs.readFileSync('f1.txt');

console.log('data of file 1->'+ fileContent);

//writing in a file

fs.writeFileSync('f2.txt', 'This is a file2');

console.log('file has been written');

//append file

fs.appendFileSync('f3.txt', ' This is updated data');

console.log('file has been appended');

//deleting a file

fs.unlinkSync('f2.txt')

console.log('file hasbeen delted');

//creating a dorectory

fs.mkdirSync(('myDrectory'));

//check thecontent inside dir

let folderPath = '/home/basavaraj/Desktop/NodeJs_Learning/myDrectory';

let folderContent = fs.readdirSync(folderPath);

console.log(' ',folderContent);

//check whether a directory exists or not

let doesExist = fs.existsSync('3_path.js');

console.log(doesExist);

//remove dir

fs.rmdirSync('myDrectory')

console.log('dir has been Deleted');