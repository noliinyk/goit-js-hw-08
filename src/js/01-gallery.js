// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';



// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
let instance; 


function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        
      `
      })
      .join('');
  };

  //Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
  //Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
  //Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.
  
  // Описан в документации
  //import SimpleLightbox from "simplelightbox";
  // Дополнительный импорт стилей
  //import "simplelightbox/dist/simple-lightbox.min.css";

galleryContainer.addEventListener('click', onGalleryContainerClick);
function onGalleryContainerClick (event){

    event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionDelay = 250;
lightbox.options.captionsData = "alt";
lightbox.options.captionType = "attr";

console.log(galleryItems);
