/* menu*/

$(function() {
    $(window).on("scroll", function() {
    	if($(window).scrollTop() < 10) {
    		$("#navbar").addClass("borda-branca");
    		$("#navbar").removeClass("menu-mexendo");
    	}
        if($(window).scrollTop() > 10) {
            $("#navbar").addClass("menu-mexendo");
            $("#navbar").removeClass("borda-branca");
        } else {
            

        }
    });
});

/* FAQS */

var tema = document.getElementsByClassName('tema');

var i;
var tamanho = tema.length;
for(i = 0; i<tamanho; i++){
    tema[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var descricao = this.nextElementSibling;
        if(descricao.style.maxHeight){
            descricao.style.maxHeight = null;
        }else{
            descricao.style.maxHeight = descricao.scrollHeight + 'px';
        }
    })
}


/* SLIDE SHOW */

'use strict';

const images = [
    { 'id': '1', 'url':'./img/aqui-tem-saude.png' },
    { 'id': '2', 'url':'./img/professor-allocation.png' },
    { 'id': '3', 'url':'./img/palindromo.jpeg' },
    { 'id': '4', 'url':'./img/photo4.jfif' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);