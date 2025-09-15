import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52302073-d61d50c7fb08e45dcd07f0efb';

export function getImagesByQuery(query, page = 1, per_page = 40) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page,
    page,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data); // .then та .catch використовуємо у main.js
}
