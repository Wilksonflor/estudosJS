// Funções

// São Blocos reutilizaveis 
// para evitar a repetição na logica de um programa em diversas partes do codigo
// a função precisa ser invocada para ser executada


function primeiraFuncao(){
 console.log("hello, world das funções");
}

primeiraFuncao();

function dizerNome(nome){
console.log("O nome é :" + nome)
}

dizerNome("Wilkson")




function soma(a,b){
var soma = a + b
return soma;
}

var somaUm = soma(2,7)
console.log(somaUm)