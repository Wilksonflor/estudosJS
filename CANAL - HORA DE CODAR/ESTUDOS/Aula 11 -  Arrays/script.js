//Arrays são considerados objetos, porém servem como listas.
//Podendo ter itens de qualquer tipo.
//Não podendo ser por chave e valor, mas sim por indice.

var arr = [5, "wilkson", true, {text:1, teste:2}];// a sintaxe do array é > 

console.log(arr);

var arr2 = [2,3,4,5,6];
console.log(arr2)
console.log(arr[1], arr2[0]);

arr2[6] = 10// para inserir um array
console.log(arr2[6])

arr2[2] = "José"//modificando elementos do array
console.log(arr2[2])