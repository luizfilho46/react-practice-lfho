import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES).then((response) => response.json());
}

export default {
  getAllWithVideos,
};
