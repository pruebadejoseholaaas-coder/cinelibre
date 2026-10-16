/* CineLibre - datos estructurados (schema.org) generados desde peliculas.js */
(function () {
  'use strict';

  var cats = {
    comedy: 'Comedia', drama: 'Drama', horror: 'Terror', action: 'Acción',
    animation: 'Animación', scifi: 'Ciencia ficción', war: 'Guerra',
    documentary: 'Documental'
  };

  var list = Array.isArray(window.peliculas) ? window.peliculas : [];
  if (!list.length) return;

  var items = list.map(function (m, i) {
    var movie = {
      '@type': 'Movie',
      'name': m.title,
      'dateCreated': String(m.year),
      'inLanguage': 'es'
    };
    if (m.synopsis) movie.description = m.synopsis;
    if (m.poster) movie.image = m.poster;
    var genre = m.genre || cats[m.category];
    if (genre) movie.genre = genre;
    if (m.country) movie.countryOfOrigin = { '@type': 'Country', 'name': m.country };
    return { '@type': 'ListItem', 'position': i + 1, 'item': movie };
  });

  var tag = document.createElement('script');
  tag.type = 'application/ld+json';
  tag.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Catálogo de películas dominicanas y del Caribe',
    'numberOfItems': items.length,
    'itemListElement': items
  });
  document.head.appendChild(tag);
})();
