//condicionais

let horario = 22;

// if (horario < 18) {
//  console.log('dia')
// } else {
//   console.log('noite')
// }

//operador ternário

// horario < 12 ? console.log('dia') : console.log('noite')

// if(horario >= 0 && horario < 6) {
//   console.log('madrugada')
// } else if(horario >= 6 && horario < 12) {
//   console.log('manhã')
// } else if(horario >= 12 && horario < 18) {
//   console.log('tarde')
// } else if(horario >= 18 && horario < 24) {
//   console.log('noite')
// } else {
//   console.log('hora inválida')
// }


let regiao = 'nordeste';

switch(regiao) {
  case 'nordeste':
    console.log('possui 9 estados')
    break;
  case 'norte':
    console.log('possui 7 estados')
    break;
  case 'centro-oeste':
    console.log('possui 3 estados + DF')
    break;
  case 'sudeste':
    console.log('possui 4 estados')
    break;
  case 'sul':
    console.log('possui 3 estados')
    break; 
  default:
    console.log('região inválida')  
}
