var kata = 'katak';
var reverseOfKata = '';



function reverseKata(word) {
    if (word === undefined) {
    return false;
    } else {
    var left = 0;
    var right = word.length - 1;
    while (left<right) {
        if (word[left++] !== word[right--]) {
        return false;
    } else { return true;}
    }
    }
}
console.log(reverseKata(kata));