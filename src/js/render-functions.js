import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightboxInstance = null;

export function initLightbox() {
  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightboxInstance.refresh();
  }
}

export function createGallery(images) {
  const galleryEl = document.querySelector('.gallery');
  const markup = images
    .map(img => {
      return `
      <li class="photo-card">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${img.likes}</span></p>
          <p class="info-item"><b>Views</b><span>${img.views}</span></p>
          <p class="info-item"><b>Comments</b><span>${img.comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${img.downloads}</span></p>
        </div>
      </li>
    `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  initLightbox();
}

export function clearGallery() {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = '';
}

export function showLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.style.display = 'flex';
  loader.setAttribute('aria-hidden', 'false');
}

export function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.style.display = 'none';
  loader.setAttribute('aria-hidden', 'true');
}
