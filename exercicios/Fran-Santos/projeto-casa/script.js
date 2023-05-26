const json = [
  {
    "imagem": "./images/pose.jpg",
    "titulo": "Pose",
    "ano": "2018",
    "diretor": "Ryan Murphy",
    "generos": ["Drama"],
    "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
    "instagram": "https://www.instagram.com/poseonfx/"
  },
  {
    "imagem": "./images/manhas.jpg",
    "titulo": "Manhãs de Setembro",
    "ano": "2021",
    "diretor": "Luis Pinheiro",
    "generos": ["Drama"],
    "elenco": ["Liniker", "Linn da Quebrada"], 
    "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
  },
  {
    "imagem": "./images/euphoria.jpg",
    "titulo": "Euphoria",
    "ano": "2019",
    "diretor": "Sam Levinson",
    "generos": ["Drama"],
    "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
    "instagram": "https://www.instagram.com/euphoria/"
  },
  {
    "imagem": "./images/veneno.jpeg",
    "titulo": "Veneno",
    "ano": "2020",
    "diretor": "Javier Ambrossi",
    "generos": ["Drama", "Biografia"],
    "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
    "instagram": "https://www.instagram.com/venenolaserie/"
  },
  {
    "imagem": "./images/legendary.jpg",
    "titulo": "Legendary",
    "ano": "2020",
    "diretor": "Rik Reinholdtsen",
    "generos": ["Reality Show", "Competição"],
    "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
    "instagram": "https://www.instagram.com/legendarymax/"
  }
]

/* 
O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma array, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;
*/


const container = document.getElementById('demo')

function preencherPagina(series) {
  series.forEach((serie) => {
    container.innerHTML += `
     <section class="cards">
      <img class="covers" src=${serie.imagem}>
      <h2 class="titles">${serie.titulo}</h2>
      <p class="contents">Ano: <span class="dynamic-text">${serie.ano}</span></p>
      <p class="contents">Direção: <span class="dynamic-text">${serie.diretor}</span></p>
      <p class="contents">Gêneros: <span class="dynamic-text">${serie.generos.join(' - ')}</span></p>
      <p class="contents">Elenco: <span class="dynamic-text">${serie.elenco.join(' - ')}</span></p>
      <a href=${serie.instagram} target=_blank><i class="fab fa-instagram"></i></a>
     </section>
    `
  })
}

preencherPagina(json)


//  MODO 2

// const container = document.getElementById('demo');

// function fillPages(series) {
//   series.map((serie) =>{

//     const card = document.createElement("section");
//     card.classList.add("cards")
//     container.appendChild(card)

//     const cover = document.createElement("img")
//     cover.classList.add("covers")  
//     cover.setAttribute('src',serie.imagem)
//     card.appendChild(cover)

//     const title = document.createElement("h2")
//     title.classList.add("titles")
//     title.innerText = serie.titulo
//     card.appendChild(title)

//     const year = document.createElement("p")
//     year.classList.add("contents")
//     title.innerHTML=" Ano: <span class = dynamic-text">  '  + serie.ano ' + '</span>'
//     card.appendChild(year)

//     const director = document.createElement("p")
//     year.classList.add("contents")
//     title.innerHTML=" Direção: <span class = dynamic-text">  '  + serie.director ' + '</span>'
//     card.appendChild(director)

//     const genders = document.createElement("p")
//     genders.classList.add("contents")
//     title.innerHTML=" Gêneros: <span class = dynamic-text">  '  + serie.generos.join(" _ ") ' + '</span>'
//     card.appendChild(genders)

//     const cast = document.createElement("p")
//     cast.classList.add("contents")
//     title.innerHTML=" Gêneros: <span class = dynamic-text">  '  + serie.elenco.join(" _ ") ' + '</span>'
//     card.appendChild(cast)

//     const instagram = document.createElement("a")
//     instagram.setAttribute("href", serie.instagram)
//     instagram.setAttribute("target", "_blank")
//     instagram.innerHTML = ""
//     card.appendChild(cast)
//   })
// }

// fillPages(json)



