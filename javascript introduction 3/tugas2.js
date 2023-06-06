const getMonth = (callback) => {
    setTimeout (() =>  {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}
  
 function displayMonths (error,month) {
    if(error){
      console.log (error)
    } else {
      const months = month.map (month => month)
      console.log(months)
    }

}
  
getMonth(displayMonths);