function characterPositioning(str) {
    str = str.toLowerCase().split(' ').join('');
    var letters = {};

    for (var i = 0; i < str.length; i++) {
        if (letters[str[i]] === undefined) {
            letters[str[i]] = i;
        } else {
            letters[str[i]] += ", " + i;
        }
    }
    return letters;
}

console.log(characterPositioning("lighthouse in the house"));


