import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")

function createGalleryMarkup (array) {
    const markup = array.map((image) => {
     return `<a class="gallery__item" href="${image.original}">
                <img class="gallery__image" 
                src="${image.preview}" 
                alt="${image.description}"
             />
            </a>`;
    }).join("")
    
   return galleryEl.insertAdjacentHTML("beforeend", markup)
}

createGalleryMarkup(galleryItems)


    
let lightbox = new SimpleLightbox('.gallery__item', {captionDelay: 250, captionsData: "alt"});
    
  
