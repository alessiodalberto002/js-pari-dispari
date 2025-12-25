function separaNumeri(array) {
    // ARRAY PER NUMERI PARI E DISPARI //
    const pari = [];
    const dispari = [];

    // SCORRIAMO L'ARRAY //
    for (let i = 0; i < array.length; i++) {
        // SE IL NUMERO E' DIVISIBILE DUE E' PARI //
        if (array[i] % 2 === 0) {
            pari.push(array[i]);
        } else {
            dispari.push(array[i]);
        }
    }
}

// CALCOLIAMO LE SOMME //
let sommaPari = 0;
for (let i = 0; i < pari.length; i++) {
    sommaPari += pari[i];
}

let sommaDispari = 0;
for (let i = 0; i < dispari.length; i++) {
    sommaDispari += dispari[i];
}