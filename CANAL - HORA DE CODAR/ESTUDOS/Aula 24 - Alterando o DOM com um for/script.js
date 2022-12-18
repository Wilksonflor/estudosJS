var lista = ['Laranja', 'Pera', 'Uva', 'Manga'];//criei um array com frutas

var listaUl = document.createElement('ul')//para criar a tag UL (Lista);

var body = document.getElementsByTagName('body');//criei uma variável para pegar a tag BODY

body[0].appendChild(listaUl);//para a variavel body ser inserido a lista

var listaNoBody = document.getElementsByTagName('ul')//A variavel vai pegar a tag criada anteriormente(LISTAUL)

console.log(listaNoBody[0]);
for(var i=0; i < lista.length;i++){//para mostrar todos os itens da lista(length)

    var liFor = document.createElement('li');
    var textLi = document.createTextNode(lista[i]);

    liFor.appendChild(textLi);

    listaNoBody[0].appendChild(liFor);
console.log(liFor);
}