// Serve para determinar o fluxo de uma aplicação
// Muito usado para deixar o software dinâmicos
// Ex: if, else, else if;

function somar() {
    let idade = document.getElementById("idade").value;
    if (idade >= 18) {
        console.log("Pode tirar CNH");
    } else {
        console.log("Não pode tirar CNH");
    }
}