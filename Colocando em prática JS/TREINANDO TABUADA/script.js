let saida = document.querySelector('#result')

function calcular() {
  //Pedir numero ao usuário
  //converter numero
  //criar a variavel para servir de incice
  var numero = document.getElementById('numero').value
  var mensagem = ''
  for (var i = 0; i <= 10; i++) {
    mensagem += `${numero} x ${i} = ${i * numero}<br>`
  }
  saida.innerHTML = mensagem
}

function limpar() {
  saida.innerHTML = ''
}
