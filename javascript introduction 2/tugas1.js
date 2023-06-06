//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya


//1. forEach,  metode bawaan pada JavaScript yang digunakan untuk melakukan iterasi atau perulangan pada setiap elemen dalam sebuah array.

const makanan = ["nasi goreng", "mie ayam", "mie goreng", "ayam goreng"]

makanan.forEach((listMakanan) => {
    console.log("-" + listMakanan)
})

//2. push, metode bawaan pada objek Array di JavaScript yang digunakan untuk menambahkan satu atau lebih elemen baru ke akhir array
const buah = ["mangga", "jeruk", "apel"]
buah.push('pisang', 'manggis')

console.log(buah)

//3. pop, metode bawaan pada objek Array di JavaScript yang digunakan untuk menghapus elemen terakhir dari sebuah array

buah.pop();

console.log(buah)

//4. toString, metode bawaan pada JavaScript yang digunakan untuk mengubah variabel menjadi string

const minuman = ["teh", "kopi", "jeruk"]
const minumanString = minuman.toString()
console.log(minumanString)

const angka = 99
const angkaString = angka.toString()

console.log(angkaString)
console.log (typeof(angkaString))

//5. Date, metode bawaan pada javascript untuk memanggil tanggal dan waktu saat ini

const tanggal = Date()

console.log(tanggal)

//6. toLowerCase, metode bawaan pada javascript yang mengubah semua karakter dalam sebuah string menjadi huruf kecil

const nama = "KRISNA ADJIE DEWANTARA"
const lowerCaseNama = nama.toLowerCase()

console.log(lowerCaseNama)

//7. toUpperCase, metode bawaan pada javascript yang mengubah semua karakter dalam sebuah string menjadi huruf kapital

const bootcamp = "fazztrack"
const upperCaseName = bootcamp.toUpperCase()

console.log(upperCaseName)

//8. split, metode bawaan pada JavaScript yang digunakan untuk membagi sebuah string menjadi sebuah array substring berdasarkan pemisah yang ditentukan

const kalimat = "saya belajar javascript"
const kata = kalimat.split(" ")

console.log(kata)

//9. slice, metode bawaan pada javascript yang digunakan untuk mengambil bagian dari string dan mengembalikan bagian yang dislice sebagai string yang baru

const slicedKalimat = kalimat.slice(13,23)
console.log (slicedKalimat)

//10. length, metode bawaan pada javacsript yang digunakan untuk menghitung panjang dari sebuah string atau array

const kalimatLength = kalimat.length

console.log (kalimatLength)

const arrNegara = ["indonesia", "filipina", "kamboja"]
const arrNegaraLength = arrNegara.length
console.log(arrNegaraLength)