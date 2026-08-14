// 🇩🇴 CATÁLOGO DE CINE DOMINICANO
// ================================================================
// Añade películas aquí sin tocar index.html.
// El catálogo puede crecer a cientos de películas.
// ================================================================
//
// Formato:
//
// {
//     id: 1,
//     title: "Título de la película",
//     year: 2026,
//     category: "drama",
//     featured: false,
//     poster: "ruta-o-url-del-poster",
//     videoId: "ID-DE-YOUTUBE"
// },
//
// Categorías actuales:
// scifi, horror, drama, comedy, animation
//
// Para YouTube:
// https://www.youtube.com/watch?v=ABC123
// videoId: "ABC123"

const peliculas = [
    {
        id: 1,
        title: "Nueba Yol: ¡Por fin llegó Balbuena!",
        year: 1995,
        category: "comedy",
        featured: true,
        poster: "https://m.media-amazon.com/images/M/MV5BNzc2YmU3MmMtNGJlZS00ODMxLTg2N2EtYzdiMDc2YzY4ZTdlXkEyXkFqcGdeQXVyODU4MjAxOQ%40%40._V1_FMjpg_UX1000_.jpg",
        videoId: "qDcNLIrmFOE"
    }
];

window.peliculas = peliculas;
