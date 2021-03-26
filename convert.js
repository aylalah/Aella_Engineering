const myArgs = process.argv.slice(2);
process.env
const outputJSON = 'output.json';
const yaml = require('js-yaml');
const fs = require('fs');
const obj = yaml.load(fs.readFileSync(myArgs[0], {encoding: 'utf-8'})); 
 
try {
    if(myArgs.length == 1){
        fs.writeFileSync(outputJSON, JSON.stringify(obj, null, 2));
    }
    else if(myArgs.length == 2){
        console.log(obj)
    }
} catch (error) {
    console.log(error)
}