const cekHariKerja = (day) => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
            let cek = dataDay.find ((item) => {
                return item === day
            })
            if (cek){
                resolve(cek)
            } else {
                reject(new Error("Hari ini bukan hari kerja"))
            }
        },3000)
    })
}

// cekHariKerja('minggu').then((value) => {
//     console.log(`value from resolve = ${value}`)
// }).catch ((error)=> {
//     console.log(`value from reject = ${error}`)
// })

async function cekHari() {
    try {
    //menggunakan variabel hariKerja untuk memanggil method cekHariKerja diatas
        const hariKerja = await cekHariKerja("selasa");
        console.log(hariKerja);
    } catch (error) {
        console.log(error.message);
    }
}

cekHari();