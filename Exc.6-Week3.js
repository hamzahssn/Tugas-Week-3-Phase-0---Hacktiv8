function angkaPalindrome(num) {
    var z = num+1;
    var x = z.toString();
    var y = '';
    var i = x.length-1; 
    
    palindromeCheck(x);
    
    function palindromeCheck(palindrome) {
            for (i; i>=0; i--) {
                y = y + x[i];
        }
    }
    
    
    
    if (x === y) {
        return Number(x);
    } else {
        num = num + 1;
        angkaPalindrome(num);
    }
    
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001