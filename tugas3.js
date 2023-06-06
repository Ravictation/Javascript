let baris=5;
let angka="";
if (baris > 0) {

//perulangan pertama untuk baris
for (let i=1; i <= baris; i++){
//perulangan kedua untuk angka dalam baris
  for (let j=1; j <= baris-i+1 ; j++){
    angka += j;
  }
    angka += "\n";
}

console.log (angka);
}   else {
    console.log("input harus berupa nomor dan harus angka positif")
}