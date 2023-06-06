const bahasaIndonesia = 80;
const bahasaInggris = 80;
const matematika = 80;
const ipa=80;

if (isNaN(bahasaIndonesia) || isNaN(bahasaInggris) || isNaN(matematika) || isNaN(ipa)) {
    console.log("Input harus berupa angka.");
} else {
    // Proses penghitungan nilai rata-rata dan grade
    let nilaiRataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;
    let grade;
    if (nilaiRataRata >= 90 && nilaiRataRata <=100 ){
        grade ="A";
    } else if (nilaiRataRata >=80 && nilaiRataRata <90){
        grade = "B";
    } else if (nilaiRataRata >=70 && nilaiRataRata < 80){
        grade = "C";
    } else if (nilaiRataRata >=60 && nilaiRataRata < 70){
        grade = "D"
    } else {
        grade = "E"
    }
    //menampilkan nilai dan grade
    console.log (`nilai rata-rata adalah ${nilaiRataRata} dan gradenya adalah ${grade}`);
}