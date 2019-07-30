const chicken = require('./chicken')
const simchicken = require('./simchicken')
const chickenToSim = require('./tosimchick');
const fs = require('fs');

function decode(octBytes) {
    return octBytes
        .split(';')
        .map(s => s.replace('&#', ''))
        .map(s => parseInt(s, 10))
        .map(i => String.fromCharCode(parseInt(i, 10)))
        .join('');
}

const CHICKEN = fs.readFileSync('./helloWorld.chk' , {encoding: 'utf8'});

const Chick = chicken.chicken("", CHICKEN);
console.log(decode(Chick));