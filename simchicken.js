exports.simchicken = (input) => {
    return input
        .split('\r\n')
        .map(wordToChicken)
        .join('\r\n');
}

const wordToChicken = (word, index) => {
    switch (word) {
        case 'axe':
            return howMuchChicken(0);
        case 'chicken':
            return howMuchChicken(1);
        case 'add':
            return howMuchChicken(2);
        case 'fox':
            return howMuchChicken(3);
        case 'rooster':
            return howMuchChicken(4);
        case 'compare':
            return howMuchChicken(5);
        case 'pick':
            return howMuchChicken(6);
        case 'peck':
            return howMuchChicken(7);
        case 'fr':
            return howMuchChicken(8);
        case 'BBQ':
            return howMuchChicken(9);
    }
    if (word.startsWith('push')) {
        const splitted = word.split(' ');
        return howMuchChicken(parseInt(splitted[1]));
    }
    throw new Error(`impossible to parse ${word} at line ${index}`);
}

const howMuchChicken = (nbr) => {
    result = "";
    let first = true;

    for (var i = 0; i < nbr; i++) {
        if (!first) result += ' ';
        first = false;
        result += 'chicken';
    }
    return result;
}