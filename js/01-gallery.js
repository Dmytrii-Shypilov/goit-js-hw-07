import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")

console.group(galleryEl)

function createGalleryMarkup (array) {
    const markup = array.map((image) => {
     return `<div class="gallery__item">
     <a class="gallery__link" href="${image.original}">
       <img
         class="gallery__image"
         src="${image.preview}"
         data-source="${image.original}"
         alt="${image.description}"
       />
     </a>
   </div>`;
    }).join("")
    
   return galleryEl.insertAdjacentHTML("beforeend", markup)
}

createGalleryMarkup(galleryItems)

galleryEl.addEventListener("click", (event) => {
    event.preventDefault()

    if (event.target !== event.currentTarget) {
        const modalWindow = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`)
        modalWindow.show()
    }  
})

