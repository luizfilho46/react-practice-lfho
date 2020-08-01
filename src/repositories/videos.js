import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(video) {
  console.log({ video });
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  }).then((response) => response.json());
}

export default {
  create,
};
