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

const galleryRef = document.querySelector('.gallery');
// create html
const items = galleryItems
  .map(({ preview, original, description }) => {
    const listEl = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    return listEl;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', items);

//create event
galleryRef.addEventListener('click', onImageClick);

function onImageClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">
      `,
    {
      onShow: instance => console.log('onShow', instance),
      onClose: instance => console.log('onClose', instance),
    },
  );

  instance.show();

  if (basicLightbox.visible()) {
    window.addEventListener('keydown', onEscClose);
    //console.log('повесила слушатель');
  }

  function onEscClose(e) {
    //console.log(e);
    if (e.code === 'Escape') instance.close();
  }
}
