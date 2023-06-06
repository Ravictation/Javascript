const arrayAngka = ['595656', '159466', '56'];

// Mengurutkan angka dalam setiap indeks array secara ascending
arrayAngka.forEach((elemen, indeks) => {
  const angkaTerurut = elemen.split('').sort((a, b) => parseInt(a) - parseInt(b)).join('');
  arrayAngka[indeks] = angkaTerurut;
});

console.log("Angka dalam setiap indeks array terurut: ", arrayAngka);