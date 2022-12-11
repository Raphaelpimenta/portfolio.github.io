//Menu Mobile
const btnMobile = document.getElementById('btn-mobile');

function ativaMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }

    const nav = document.querySelector('nav');
    nav.classList.toggle('ativa');
}

btnMobile.addEventListener('click', ativaMenu);
btnMobile.addEventListener('touchstart', ativaMenu);



//Efeito de Máquina de Escrever
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}

const titulo1 = document.querySelector('.texto-1');
typeWriter(titulo1)