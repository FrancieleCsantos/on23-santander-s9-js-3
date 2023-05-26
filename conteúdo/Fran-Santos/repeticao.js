const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

// console.log(numeros[3])
//for

// for(let i = 0; i < numeros.length; i++) {
//   let dobro = numeros[i] * 2
//   console.log(dobro)
// }

let i = 0;

// while(i < numeros.length) {
//   let dobro = numeros[i] * 2
//   console.log(dobro)
//   i++
// }

  for(let elemento of numeros) {
    let dobro = elemento * 2
    console.log(dobro)
  }
