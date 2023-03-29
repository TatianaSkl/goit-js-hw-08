import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const listEl = document.querySelector(`.gallery`);

const liEl = galleryItems.reduce(
  (acc, image) =>
    (acc += `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"></a></li>`),
  ''
);
listEl.insertAdjacentHTML('afterbegin', liEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
