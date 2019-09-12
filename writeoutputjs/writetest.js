// Requiring fs module in which 
// writeFile function is defined. 
const fs = require('fs') 

// Data which will write in a file. 
//let data = "Learning how to write in a file."
let count = 0;
let a = ';-;';

function repeat(item, times) {
	let rslt = [];
	for(let i = 0; i < times; i++) {
  	rslt.push(item)
  }
  fs.writeFile('Output.txt', rslt + '.', (err) => {
    // In case of a error throw err. 
    if (err) throw err; 
})
return rslt;
}

repeat(a, 16384);

// Write data in 'Output.txt' . 
/*fs.writeFile('Output.txt', a, (err) => {
    // In case of a error throw err. 
    if (err) throw err; 
})*/