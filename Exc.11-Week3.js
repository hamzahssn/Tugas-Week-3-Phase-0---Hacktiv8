function tentukanDeretAritmatika(arr) {
    var x, y = 0;
    var i = 0;
    var jarak = [];
    var result;
    
    for (i; i<arr.length; i++) {
        if (i === arr.length-1) {
            break;
        } else {
            x = arr[i];
            y = arr[i+1];  
            jarak.push(x-y); 
        }
    }
  
    for (i=0; i<jarak.length; i++) {
        var pembanding = jarak[0];
        if (jarak[i] !== pembanding) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false