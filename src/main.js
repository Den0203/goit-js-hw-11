// import './styles.css';
import 'loaders.css/loaders.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.getElementById('search-form');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const input = e.currentTarget.elements['search-text'];
  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();
      const hits = data.hits || [];

      if (hits.length === 0) {
        // Текст, що вказаний в ТЗ
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(err => {
      hideLoader();
      console.error('API error', err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    });
}
