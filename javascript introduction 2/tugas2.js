
const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']


 function searchName (keyword, limit, callback) {
    //validasi input berupa string
    if (typeof(keyword) == 'string'){

    //filter nama dan keyword ke lowercase
    const nameLC = names.map(str => str.toLowerCase())
    const keywordLC = keyword.toLowerCase()
    

    //filter nama berdasarkan keyword yang diinputkan
    const filterNames = nameLC.filter(name => name.includes(keywordLC))


    //filter maksimum nama yang akan ditampilkan 
    const limitName = filterNames.slice(0, limit)
    callback(limitName);
         }   else {
    console.log("keyword harus berupa huruf")
        }       
    }

    //menampilkan nama berdasarkan keyword dan limit yang diinputkan
    function displayName(limitName) {
        if (limitName.length === 0) {
            console.log("nama tidak ada")
        }   else {
                console.log(limitName)
        }
    }


searchName (7, 5, displayName)