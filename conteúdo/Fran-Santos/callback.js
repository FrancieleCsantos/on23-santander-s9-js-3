// função

function somar(x, y) {
  console.log(x+y)
}

// somar(7, 4)
// somar(6, 1)

//callback

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// function calcular(a, b, callback) {
//   console.log(`a operação escolhida entre ${a} e ${b} é ${callback(a, b)}`)
// }

// concatenação e interpolação: 

let nome = "Fran"
let sobrenome = "Santos"
let idade = 28

console.log(nome + sobrenome + ' tem ' + idade + 'anos.') // concatenação
console.log(`${nome} ${sobrenome} tem ${idade} anos.`) // interpolação
