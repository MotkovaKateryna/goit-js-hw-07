import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

function galleryCreator(gal) {
  return gal
    .map(
      (image) => `<div class="gallery__item">
    <a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" 
    alt="${image.description}" />
    </a>
    </div>`
    )
    .join("");
}
galleryList.insertAdjacentHTML("afterbegin", galleryCreator(galleryItems));

galleryList.addEventListener("click", openModal);
function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.6,

  });
  gallery.on('show.simplelightbox', function () {
   
  
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
});


// let gallery = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
	
// });
 
   
}








console.log(galleryItems);
