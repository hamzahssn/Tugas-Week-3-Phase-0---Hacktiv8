function hitungJumlahKata(kalimat) {
    var spasi = 0;
    var i = 0;
    var jumlahKata = 0;
    for (i; i<kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            spasi = spasi+1;
        }
    }
    
    jumlahKata = spasi+1;
    return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5