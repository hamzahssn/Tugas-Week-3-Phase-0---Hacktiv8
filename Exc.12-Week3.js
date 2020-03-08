function tentukanDeretGeometri(arr) {
    var x, y = 0;
    var i = 1;
    var modResult = [];
    var result;
    
    
    x = arr[0];
    y = arr[1];
    
    for (i; i<arr.length; i++) {
        var res = arr[i]%y;
        modResult.push(res);
    }
    
    for (i=0; i<modResult.length; i++) {
        if (modResult[i] === 0) {
          result = true;
        } else {
          result = false;
          break;
        }
    }
    return result;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false