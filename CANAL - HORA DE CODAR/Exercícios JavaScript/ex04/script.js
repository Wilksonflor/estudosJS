function apertou(){
    let nome = document.getElementById('nome').value
    let btnClick = document.getElementById('exibir')
    btnClick.addEventListner('click', alert(`Olá ${nome}`));
}
