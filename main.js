// const { default: axios } = require("axios")


console.log('connected')
const getButton = document.querySelector('button')
const buttonClick = (e) => {
    axios
    .get('https://swapi.dev/api/planets/2')
    .then(res => {
        // res.data.forEach(item => myArr.push(item))
        // console.log(myArr)
        for(let i = 0; i < res.data.residents.length; i++){
            // myArr.push(res.data.residents[i])
            // console.log(res.data)
            axios
            .get(res.data.residents[i])
            .then(response => {
                console.log(response.data)
                let headerName = document.createElement('h2')
                
                headerName.innerHTML = `${response.data.name} is ${response.data.height}cm tall, has a mass of ${response.data.mass}, a hair color of ${response.data.hair_color}, and was born in ${response.data.birth_year}`
                document.body.appendChild(headerName)
                

            })
        }
        console.log(res.data.residents)
        
      })
    .catch(err => console.log(err))

}
getButton.addEventListener('click', buttonClick) 