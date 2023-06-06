function fazzFood (harga, voucher, jarak, pajak){
    let diskon = 0
    let totalHarga = harga
    let hargaPajak = 0


    //validasi input
    if (isNaN(harga) || harga <= 0) {
        return console.log ('Harga yang anda masukkan tidak valid')
    }

    //menghitung pajak pembelian
    if (pajak) {
        hargaPajak = totalHarga * 0.05
        totalHarga += hargaPajak
   }

    // menghitung diskon berdasarkan voucher yang diinput
    if ( voucher === 'FAZZFOOD50' && harga >= 50000){
         diskon = Math.min(harga * 0.5, 50000);
    } else if(voucher === 'DITRAKTIR60' && harga >= 25000){
         diskon = Math.min (harga * 0.6, 30000);
    } else if (voucher === null || voucher === 0) {
        diskon = 0
    } else {
        return console.log ('kode voucher yang anda masukkan salah')
    }

    //menghitung totalHarga setelah diskon
    totalHarga = totalHarga - diskon

    //menghitung biaya pengiriman
    if ( jarak > 2 ){
        biayaKirim = 5000 + ((jarak-2) * 3000)
    } else if (jarak > 0 && jarak <= 2){
        biayaKirim = 5000
    } else {
        return console.log('masukkan jarak pengiriman yang valid')
    }

    totalHarga += biayaKirim

    return console.log(`rincian biaya 
    harga = ${harga}
    ongkir = ${biayaKirim} 
    diskon = ${diskon} 
    pajak = ${hargaPajak}
    total harga yang dibayar = ${totalHarga}`)
}

fazzFood(20000,null ,5,true)