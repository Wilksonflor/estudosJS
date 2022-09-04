//Calcular os valores da tabuada que o usuário inserir
const div = document.querySelector('.app')
const input = document.querySelector('input')
let strings

function tabuada(number) {
  for (let i = 1; i <= 10; i++) {
    let template = `${number} x ${i} = ${i * number}<br/>`
    ;(strings && (strings += template)) || (strings = template)

    i == 10 && (div.innerHTML = strings)
  }
}
document.querySelector('#botao').addEventListener('click', () => {
  tabuada(input.value)
})
