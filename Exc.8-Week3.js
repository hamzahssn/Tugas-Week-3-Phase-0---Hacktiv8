function pasanganTerbesar(num) {
    var numberInString = num.toString();
    var result;
    var max = 0;
    var i = 0;
    
    for (i; i<numberInString.length; i++) {
        result = numberInString.slice(i, i+2);
        if (result.length === 2) {
            if (result > max) {
                max = result;
            } else if (result < max) {
                max = max;
            }
        } else {
            result = numberInString.slice (numberInString.length, numberInString.length-1);
            return Number(max);
        }
    }
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99