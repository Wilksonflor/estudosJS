// function lampOn(){
//     const on = document.getElementById('on');
//     document.getElementById('lampadaOff').src = 'lampada-on.jpg'
// }


// function lampOff(){
//     const off = document.getElementById('off');
//     document.getElementById('lampadaOff').src = 'lampadaApagada.jpg'
// }

document.getElementById('lampadaOff').addEventListener('mouseenter', () =>{
    document.getElementById('lampadaOff').src = 'lampada-on.jpg'
})

document.getElementById('lampadaOff').addEventListener('mouseout', () =>{
    document.getElementById('lampadaOff').src ='lampadaApagada.jpg'
})