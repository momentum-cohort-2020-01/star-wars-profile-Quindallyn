let starWarsData

const dataDiv = document.querySelector('#star-wars-data')

fetch('https://swapi.co/api/people/5/')
  .then(response => response.json())
  .then(function (data) {
    starWarsData = data
    renderData()
    console.log(data)
    // return data.url
  })

//   .then (url => fetch(url))
//   .then (repsonse => respone.json())
//   .then (function(data){
//       console.log(data)

//   })

function renderData () {
  let keys = Object.keys(starWarsData)
  console.log(keys)
  const h1El = document.createElement('h1')
  h1El.innerText = starWarsData.name
  h1El.classList.add('ml0', 'fw9')
  dataDiv.appendChild(h1El)
  keys = keys.slice(1)
  console.log(keys)
  for (const key of keys) {
    const h2El = document.createElement('h2')
    h2El.innerText = starWarsData[key]
    h2El.classList.add('ml0', 'gray')
    dataDiv.appendChild(h2El)
  }
}
https://diagnosislife.com/wp-content/uploads/2018/10/Princess-Leia-Carrie-Fisher-Star-Wars.jpg
