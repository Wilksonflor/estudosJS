const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const valorImc = (peso / (altura * altura)).toFixed(1)
  console.log(valorImc)
  const resultado = document.getElementById('resultado') //vai mostrar o resultado
  let classificacao = ''

  if (valorImc < 24) {
    classificacao = 'Peso ideal'
  } else if (valorImc < 29) {
    classificacao = 'Sobrepeso'
  } else if (valorImc < 34) {
    classificacao = 'Obesidade Grau I.'
  } else if (valorImc < 39) {
    classificacao = ' Obesidade Grau II. Procure um especialista'
  } else if (valorImc > 40) {
    classificacao = 'Obesidade Grau III,Procure um especialista URGENTE!'
  }
  resultado.textContent = `${nome}, você tem ${altura} de altura, seu peso atual é de ${peso}KG com IMC de ${valorImc} e sua classificação é ${classificacao}`
}

calcular.addEventListener('click', imc)
