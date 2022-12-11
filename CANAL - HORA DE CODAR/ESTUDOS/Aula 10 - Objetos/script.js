var obj ={//pode criar um objeto em uma variável.
nome: "Wilkson",//é uma string então tem que está em áspas e separar por vírgulas
idade: 28,
profissao: "Programador",
estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj); //saber o tipo

console.log(obj.nome);//saber o que esta no campo NOME
console.log(obj.idade);

console.log(`O meu nome é ${obj.nome} e minha idade é ${obj.idade}`);

obj.nome = "Pedro"; //mudando o OBJETO nome de Wilkson para pedro
console.log(obj.nome)
obj.graduacao = true; //estou criando um objeto de graduação.

console.log(obj)