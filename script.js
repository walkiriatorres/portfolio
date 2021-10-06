/* MENU*/
$(function() {
    $(window).on("scroll", function() {
    	if($(window).scrollTop() == 0 ) {
    		$("#navbar").addClass("borda-branca");
    		$("#navbar").removeClass("menu-mexendo");
    	}
        if($(window).scrollTop() > 1) {
            $("#navbar").addClass("menu-mexendo");
            $("#navbar").removeClass("borda-branca");
        } else {
            

        }
    });
});

/* BACKGROUND SLIDE SHOW WELCOME SECTION */
var imageCount = 0;
var currentImage = 0;
var photos = new Array();
var welcomeSection = document.getElementById("welcome-section");

 
photos[0] = './img/coder1.jfif';
photos[1] = './img/coder2.jfif';
photos[2] = './img/coder3.jfif';
photos[3] = './img/coder4.jfif';
 
var preLoadImages = new Array();
for (var i = 0; i < photos.length; i++)
{
   if (photos[i] == "")
      break;
 
   preLoadImages[i] = new Image();
   preLoadImages[i].src = photos[i];
   imageCount++;
}
 
function startSlideShow()
{
   if (welcomeSection && imageCount > 0)
   {
      welcomeSection.style.backgroundImage = "url("+photos[currentImage]+")";    
      welcomeSection.style.backgroundAttachment = "fixed";
      welcomeSection.style.backgroundRepeat = "repeat";
      welcomeSection.style.backgroundPosition = "left top";
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout('startSlideShow()', 3000);
   }
}
startSlideShow();

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
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

