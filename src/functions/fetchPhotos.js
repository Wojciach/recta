export function fetchPhotos() {
  const production = 'https://www.recta.website/php/getImagesURLs.php';
  const development = 'http://localhost/recta2/recta2/public/php/getImagesURLs.php';
  return fetch(development, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
} 