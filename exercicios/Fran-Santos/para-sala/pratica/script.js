
const objetoJson = {
  "nome": "Liniker",
  "foto": "./images/liniker.webp",
  "generos": ["MPB", "Soul", "R&B", "Blues"],
  "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
  "instagram": "https://www.instagram.com/linikeroficial/"
}

// Suponha que nosso projeto consiste em um site de informações sobre cantoras brasileiras e na página em questão a usuária selecionou a cantora Liniker, e a API nos retornou um JSON com todas as informações que precisamos (armazenado na variável objetoJson acima), então devemos popular nosso HTML com essas informações utilizando JavaScript 

const photography = document.getElementById('photography')
const title = document.getElementById('title')
const genders = document.querySelector('#gender')
const discography = document.getElementById('discography')
const instagram = document.getElementById("instagram")

function setData(singer) {
  photography.setAttribute('src', singer.foto)
  title.innerText = singer.nome
  genders.innerHTML = singer.generos.join(' - ')
  discography.innerText = singer.discografia.join(' - ')
  instagram.setAttribute('href', singer.instagram)
}

setData(objetoJson)
