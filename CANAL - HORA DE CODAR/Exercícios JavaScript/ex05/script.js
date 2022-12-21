document.getElementById('exibir').addEventListener('click', () =>{
    const nomeCompleto = document.getElementById('nome').value;
    console.log(`Bem vindo ${nomeCompleto}`);
    console.log(`A quantidade de caractere é: ${nomeCompleto.length}`);
})