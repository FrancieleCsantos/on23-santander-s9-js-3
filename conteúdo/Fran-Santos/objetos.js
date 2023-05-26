const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Barbosa" },
  idade: 21,
  cidade: "Palmas",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
};

// console.log(aluna.idade)
// aluna.saudacao()
// console.log(aluna.interesses)
// console.log(aluna.nome.segundo)
// console.log(aluna)

// console.log(aluna["nome da aluna"])

const { nome, idade } = aluna

console.log(nome)
console.log(idade)
console.log(aluna)

console.log(document.getElementById("demo"))
console.log(document.querySelector("#demo"))

const divDemo = document.getElementById("demo")
  divDemo.setAttribute("class", "demostracao")
  console.log(divDemo)
