const chicken = require('./chicken')

function decode(octBytes) {
    return octBytes
        .split(';')
        .map(s => s.replace('&#', ''))
        .map(s => parseInt(s, 10))
        .map(i => String.fromCharCode(parseInt(i, 10)))
        .join('');
}

const CHICKEN = "chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken\r\nchicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken\r\n\r\nchicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken\r\n\r\nchicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken\r\nchicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken\r\n\r\nchicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken\r\n\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken\r\n\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken\r\nchicken chicken chicken chicken chicken chicken\r\n";

const Chick = chicken.chicken("Hello hack in the wood 2019", CHICKEN);
console.log(decode(Chick));