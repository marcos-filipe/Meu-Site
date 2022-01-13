let imagens= document.querySelectorAll('.c-img');
let modal = document.querySelector('.enlarge');
let modalImg = document.querySelector('.img-modal');
let btClose = document.querySelector('.btn-close2');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal-v');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal-v');
});