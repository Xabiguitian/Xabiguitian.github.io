// /src/data/photos.js

// 1. Las imágenes se importan correctamente
import cantabriaPlaya from '../assets/photos/cantabria_playa.jpg';
import castilloSantaCruz from '../assets/photos/castillo_santa_cruz.jpg';
import corunaTorreH from '../assets/photos/coruna_torre_h.jpg';
import fragasNiebla from '../assets/photos/fragas_niebla.jpg';
import fragasTunelH from '../assets/photos/fragas_tunel_arboles_horizontal.jpg';
import fragasTunelV from '../assets/photos/fragas_tunel_arboles_vertical.jpg';
import portinoTorre from '../assets/photos/portino_torre.jpg';
import torreFarola from '../assets/photos/torre_farola.jpg';

// 2. Llenamos el array de categorías para los botones de filtro
export const photoCategories = [
  'all',
  'beach',
  'castle',
  'city',
  'forest',
  'tower'
];

// 3. Llenamos el array de fotos con un objeto por cada imagen importada
export const photos = [
  { src: cantabriaPlaya, alt: 'Playa en Cantabria', category: 'beach' },
  { src: castilloSantaCruz, alt: 'Castillo de Santa Cruz', category: 'castle' },
  { src: corunaTorreH, alt: 'Torre en A Coruña', category: 'city' },
  { src: fragasNiebla, alt: 'Fragas con niebla', category: 'forest' },
  { src: fragasTunelH, alt: 'Túnel de árboles horizontal', category: 'forest' },
  { src: fragasTunelV, alt: 'Túnel de árboles vertical', category: 'forest' },
  { src: portinoTorre, alt: 'Torre en Portiño', category: 'tower' },
  { src: torreFarola, alt: 'Torre y farola', category: 'tower' }
];