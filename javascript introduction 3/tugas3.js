fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  
  //mengakses key name pada object dan menampilkannya 
  .then( (data) => {
    const names = data.map(user => user.name)
    console.log(names)
    data.forEach(data => {
        console.log(data.name)
    })
  })
