exports.tosimchick = (program) => {
    return program
        .split('\r\n')
        .map(chickenToWord)
        .join('\r\n');
}

const chickenToWord = (chicken) => {
    const numberOfChicken = chicken
        .replace(/ /g, '')
        .split('chicken')
        .length - 1;
    switch (numberOfChicken) {
        case 0:
            return 'axe';
        case 1:
            return 'chicken';
        case 2:
            return 'add';
        case 3:
            return 'fox';
        case 4:
            return 'rooster';
        case 5:
            return 'compare';
        case 6:
            return 'pick';
        case 7:
            return 'peck';
        case 8:
            return 'fr';
        case 9:
            return 'BBQ';
    }
    return 'push ' + numberOfChicken;
}