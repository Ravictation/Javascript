function divideAndSort (angka){

  //membuat array baru dengan angka '0' sebagai pemisah
    const divide = String(angka).split('0')
    let arrayDivide = Array.from(divide)
    
  //mengurutkan angka pada setiap index dalam array sortNumber
    let sortNumber=[]
    arrayDivide.forEach(number => {
    const sortedNumber =  Array.from(number).sort((a,b)=> a-b)
      sortNumber = sortNumber.concat(sortedNumber)
    })

  //menggabungkan angka setiap index pada array dan menampilkannya
  console.log(sortNumber.join(''))
}
divideAndSort (519553041950312)