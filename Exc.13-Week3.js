function targetTerdekat(arr) {
    var i = 0;
    var objectO, objectX;
    var dist;
    
    function searchXO() {
        for (i; i<arr.length; i++) {
            if (arr[i] === 'o') {
                objectO = i;
                break;
            }
        }
        
        for (i=0; i<arr.length; i++) {
            if (arr[i] === 'x') {
                objectX = i;
                break;
            }
        }
    }
    
    searchXO();
    
    console.log(objectX);
    console.log(objectO);
    
    if (objectX > objectO) {
        dist = objectX - objectO;
    } else if (objectO > objectX) {
        dist = objectO - objectX;
    } else {
        dist = 0;
    }
    
    return dist;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2