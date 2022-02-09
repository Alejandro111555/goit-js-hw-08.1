// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

const imgContainer = document.querySelector('div.gallery');
const cardMarkup = creteImgCard(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardMarkup);
// imgContainer.addEventListener('click', onImgContainerClick)

function creteImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
        <img class="gallery__image" src="${preview}" alt="Image description" title = "${description}" />
      </a>
    </div>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
