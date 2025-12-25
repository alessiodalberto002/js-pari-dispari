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