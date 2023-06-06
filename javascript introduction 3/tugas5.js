function reverseWords(string) {

    if (typeof(string) !== 'string') {
        return console.log ('input harus berupa kalimat')
    }
    
    //mengubah input string menjadi array
    const arrKata = string.split(' ')
    
    //mengubah posisi kata menjadi terbalik
    const arrKataTerbalik = arrKata.reverse()

    //menggabungkan kata dalam index array menjadi sebuah kalimat
    const arrKataHasil = arrKataTerbalik.join(' ')
    return console.log(arrKataHasil)
}

reverseWords('saya tidak mau pergi')