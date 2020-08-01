import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then((response) => response.json());
}

function getAll() {
  return fetch(URL_CATEGORIES).then((response) => response.json());
}

export default {
  getAll,
  getAllWithVideos,
};
