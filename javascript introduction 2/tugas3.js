

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

//validasi input berupa number
if (isNaN(nilaiAwal) || isNaN(nilaiAkhir)){
   return console.log ("nilai awal dan nilai akhir harus berupa angka")
}
//validasi nilaiAwal < nilaiAkhir
if (nilaiAwal >= nilaiAkhir) {
   return console.log("nilai akhir harus lebih besar dari nilai awal")
}

//validasi jumlah data array lebih dari 5

if (dataArray.length <=5 ) {
   return console.log ("jumlah data dalam array harus lebih dari 5")
}

//mencari data dalam array yang berada di antara nilai awal dan akhir

const cariData = dataArray.filter((data)=> data >= nilaiAwal && data <= nilaiAkhir)

//mengurutkan hasil data

const hasilData = cariData.sort((a,b) => a-b);

//menampilkan hasil data yang telah diurutkan 
if (hasilData.length === 0 ){
    console.log("nilai tidak ditemukan")
} else { 
    console.log(hasilData)
}
return 
}

seleksiNilai(5, 15, [5, 3, 1, 15, 16, 53, 19, 95, 30, 25, 2, 10, 9, 6])
seleksiNilai(15, 5, [5, 6, 10, 40, 23])
seleksiNilai(5, 10, [3, 4, 12, 15, 23, 2])
seleksiNilai("dua", 10, [3, 4, 12, 15, 23, 2])