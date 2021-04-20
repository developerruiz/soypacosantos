let btnCerrar = document.querySelectorAll('.btn-cerrar');
let img1 = document.getElementById('contimg1');
let modal1 = document.getElementById('cont_modal1');
let img2 = document.getElementById('contimg2');
let modal2 = document.getElementById('cont_modal2');
let img3 = document.getElementById('contimg3');
let modal3 = document.getElementById('cont_modal3');
let img4 = document.getElementById('contimg4');
let modal4 = document.getElementById('cont_modal4');
let img5 = document.getElementById('contimg5');
let modal5 = document.getElementById('cont_modal5');
let img6 = document.getElementById('contimg6');
let modal6 = document.getElementById('cont_modal6');


img1.addEventListener('click',function(){
modal1.className = 'cont-modal1 active'
})
img2.addEventListener('click',function(){
modal2.className = 'cont-modal2 active'
})
img3.addEventListener('click',function(){
modal3.className = 'cont-modal3 active'
})
img4.addEventListener('click',function(){
modal4.className = 'cont-modal4 active'
})
img5.addEventListener('click',function(){
modal5.className = 'cont-modal5 active'
})
img6.addEventListener('click',function(){
modal6.className = 'cont-modal6 active'
})


for (let i = 0; i < btnCerrar.length; i++) {
    btnCerrar[i].addEventListener('click', function () {
        modal1.className = 'cont-modal1'
        modal2.className = 'cont-modal2'
        modal3.className = 'cont-modal3'
        modal4.className = 'cont-modal4'
        modal5.className = 'cont-modal5'
        modal6.className = 'cont-modal6'
    })

}

