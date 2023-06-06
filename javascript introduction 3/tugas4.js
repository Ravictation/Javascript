function cekPalindrom (kata){

//validasi input berupa kata
if (typeof(kata) !== 'string') {
    return console.log ('input harus berupa kata')
}


const kataLC = kata.toLowerCase()
const arrKata = kataLC.split('');

//membuat array baru arrKataReverse untuk menyimpan array kata yang sudah dibalik
const arrKataReverse = [...arrKata].reverse()

//membandingkan array kata asli dengan array kata yang sudah dibalik
if (arrKataReverse.join('') === arrKata.join('')){
    return console.log (`kata ${kata} adalah palindrom`)
} else {
    return console.log (`kata ${kata} bukan palindrom`)
}
}

cekPalindrom("makan")