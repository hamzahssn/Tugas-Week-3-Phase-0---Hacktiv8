function perkalianUnik(arr) {
    var indexArr = 0;
    var i = 0;
    var newArray = [];
    var result = 1;
    var addArray = 0;
    
    for (indexArr; indexArr<arr.length; indexArr++) {
            result = result * arr[indexArr];
        }
    for (i; i<arr.length; i++) {
        addArray = result/arr[i];
        newArray.push(addArray);
    }
    return newArray;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]