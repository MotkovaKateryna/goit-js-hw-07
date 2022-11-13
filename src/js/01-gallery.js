import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
    <div class="modal">
    <img>    
    </div>
`)

const galleryList = document.querySelector('.gallery');


function galleryCreator(gallery) {
  return gallery
  .map((image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`)
  .join("");
}
galleryList.insertAdjacentHTML("afterbegin", galleryCreator(galleryItems));
  
galleryList.addEventListener("click", openModal);


function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const source = event.target.dataset.source;
  instance.element().querySelector('img').src = source;
  instance.show();
  window.addEventListener('keydown', closeModalClickEsc);
   
}

instance.element().querySelector('img').addEventListener("click", closeModal);
function closeModal(e) {
  if (e = instance.element().querySelector('img')) {
    instance.close();
  }
}
 

function closeModalClickEsc(event) {
  if (!(instance.visible() && event.code === "Escape")) {
    return;
  }
  instance.close();
  window.removeEventListener("keydown", closeModalClickEsc);
}


console.log(galleryItems);