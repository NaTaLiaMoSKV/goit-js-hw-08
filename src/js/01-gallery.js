import { galleryItems } from './gallery-items';

import simplelightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
const lightbox = new simplelightbox('.gallery a', {});

function createGalleryItemsMarkup(items) {
    return items.map( ({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
`;
    }).join('');
}
