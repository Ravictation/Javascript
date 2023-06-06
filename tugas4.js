let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }



let dataDiri = {
    name: "krisna adjie dewantara",
    email: "adjiedewantara24@gmail.com",
    hobby: "berenang"
}


//gabungkan object menggunakan spread operator
let dataBaru = {...data, ...dataDiri}
console.log(dataBaru);


//mengambil data street dan city menggunakan destructuring
const { address } = dataBaru
const {street, city} = address
console.log (street,city);