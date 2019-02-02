function reverseString(string) {
    string = string.split('');
    let strReversed = [];

    for (let i = 0; i < string.length; i++) {
        strReversed[i] = string[string.length - i - 1];
    }

    console.log(strReversed.join(''));
}