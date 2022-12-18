// Com o break podemos encerrar a instrução
// com o continue podemos pular uma instrução
// Utilizados na maioria das vezes em loops;

for (var i = 10; i > 0; i--) { //decremento
    console.log(i);
    if (i === 5) {
        break;
    }
}
console.log('deu o break')



var x = 20
while (x <= 130) {
    x += 10;

    if (x === 100) {
        break;
    }

    console.log("Testando o continue "+ x)
}