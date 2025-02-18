let changeColor = document.querySelector('.changeColor');
let body = document.querySelector('.body');
let whiteColor = document.querySelectorAll('h1, h2, input, i');

let textoOriginal = changeColor.textContent;

changeColor.addEventListener('click', ()=>{ 

    body.classList.toggle('newBackground')
    if(changeColor.textContent === textoOriginal){
        changeColor.textContent='light version'
        changeColor.classList.add('h1')
    }else{
        changeColor.textContent = textoOriginal;
        changeColor.classList.remove('h1')
    }

    whiteColor.forEach((percorre)=>{
        percorre.classList.toggle('coresBrancas')
    })
});

let btnConferirServicos = document.querySelector('.btnConferirServicos');
let conteudoServicos = document.querySelector('.servicos');
btnConferirServicos.addEventListener('click',()=>{
    conteudoServicos.classList.toggle('mostrar');
});

let cardImgs = document.querySelectorAll('.imgs');
let conteudoMensagens = document.querySelectorAll('.conteudoMensagem');
cardImgs.forEach((event, indice)=>{
    event.addEventListener('mouseover', ()=>{
        conteudoMensagens[indice].classList.add('ativada');
    })
})

cardImgs.forEach((e, indice)=>{
    e.addEventListener('mouseout', ()=>{
        conteudoMensagens[indice].classList.remove('ativada');
    })
})