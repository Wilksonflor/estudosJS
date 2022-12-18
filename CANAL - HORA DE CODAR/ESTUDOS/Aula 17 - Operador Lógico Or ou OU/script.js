// O Operador Lógico || é conhecido como OR(ou)
// Ele retorna true caso uma das operações retorne verdadeiro
// O OR retorna apenas se duas expressões são falsas;
// Go code


var nome = "wilkson";
var idade = 20;

if(nome == "wilkson" || idade >= 18){
console.log("Pode entrar na aula")
}else{
console.log("não pode")
}

if(nome == "Pedro" && idade == 20 || 20==30){
console.log("testando")
}else{
console.log("Falhou")
}