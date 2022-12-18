// Estas estruturas servem para repetir n de vezes uma operação;
// Ex: repetir uma determinada logica em cada elemento de um Array;
// as mais comuns são While e for;
// Cuidado com o loop infinito

// O While é a estrutura de repetição mais simples do JSO
var x = 0;
while(x < 5){
    console.log(`Testando a repetição ${x}`)
    x++
// Sempre que tiver um While tem que ter o incremento (x++)
}

var arr = [2,3,4,5];
var y = 0;

while(y <= 3){
    console.log(arr[y]);
    
    y++;
}

var palavra = "wilkson";
var i = 0;
while(i <= 6){
    console.log(palavra[i]);

    i++
}
