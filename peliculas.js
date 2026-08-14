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
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzyOkws-KZjmqMyhRDSQePe-2YES_buUGWx_NLU7jRg&s=10",
        videoId: "qDcNLIrmFOE"
    },

    {
        id: 2,
        title: "Dos compadres y una yola",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexWOg7331XhHVr4gmPZtTUiq49lRoVTTJt2ttjYHuTA&s=10",
        videoId: "96ZOzrOmMx4"
    },

    {
        id: 29,
        title: "Nueba Yol 3: Bajo la nueva ley",
        year: 1997,
        category: "comedy",
        featured: false,
        poster: "PONER_URL_DEL_POSTER_AQUI",
        videoId: "6N2HyCwyfJs"
    },

    {
        id: 3,
        title: "Los Paracaidistas",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "https://m.media-amazon.com/images/M/MV5BMTgzNTM4NTE1Ml5BMl5BanBnXkFtZTgwODcwODI0NDE%40._V1_FMjpg_UX1000_.jpg",
        videoId: "qygP3GFshQo"
    },

    {
        id: 4,
        title: "Un Lío en Dólares",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "b-ExSznPdhc"
    },

    {
        id: 5,
        title: "Ponchao",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "C35xofb3dFQ"
    },

    {
        id: 6,
        title: "Perico Ripiao",
        year: 2003,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "fMhQUoTzCoM"
    },

    {
        id: 7,
        title: "Cristo Rey",
        year: 2013,
        category: "drama",
        featured: false,
        poster: "https://resources.diariolibre.com/images/imagenes/2013/26/307615.jpg",
        videoId: "ZgxHLU2JMOk"
    },

    {
        id: 8,
        title: "Flor del Sol",
        year: 2016,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "e3ELetowtSE"
    },

    {
        id: 9,
        title: "Tubérculo Presidente",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "PHzPjMxP9lk"
    },

    {
        id: 10,
        title: "Profe por accidente",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/imagenes/2013/18/263062.jpg",
        videoId: "MGdZXqIfAws"
    },

    {
        id: 11,
        title: "Duarte, Traición y Gloria",
        year: 2014,
        category: "drama",
        featured: false,
        poster: "https://resources.diariolibre.com/images/imagenes/2014/08/318381.jpg",
        videoId: "roaTxgdnr30"
    },

    {
        id: 12,
        title: "Sanky Panky",
        year: 2007,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "G-aSUuWc51Y"
    },

    {
        id: 13,
        title: "Vamos de Robo",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "dwfL8l-wHIc"
    },

    {
        id: 14,
        title: "Hotel Coppelia",
        year: 2021,
        category: "drama",
        featured: false,
        poster: "https://resources.diariolibre.com/images/2022/02/18/hotel-edaf857c.png",
        videoId: ""
    },

    {
        id: 15,
        title: "Sanky Panky 2",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/imagenes/2013/18/286632.jpg",
        videoId: "kpiH0kVI6RA"
    },

    {
        id: 16,
        title: "Sanky Panky 3",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "f5CzQ1UxkB4"
    },

    {
        id: 17,
        title: "La Maravilla",
        year: 2019,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "GZ9XiqWzYqM"
    },

    {
        id: 18,
        title: "La Vida de los Reyes",
        year: 2021,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "WcsQCjzqxIs"
    },

    {
        id: 19,
        title: "Súper Familia",
        year: 2021,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/binrepository/unnamed-1_17523516_20211029113830.jpg",
        videoId: "0XEUUOimmoI"
    },

    {
        id: 20,
        title: "Padre se busca",
        year: 2022,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "rIva_BAFGtU"
    },

    {
        id: 21,
        title: "Negocios son negocios",
        year: 2004,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "P9lyiONXDTM"
    },

    {
        id: 22,
        title: "Pa' Qué Me Casé",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "6_BoYVCeLlg"
    },

    {
        id: 23,
        title: "Súper Papá",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "IrG2fg4_h-c"
    },

    {
        id: 24,
        title: "El Plan Perfecto",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "jwVv1Ee9z-8"
    },

    {
        id: 25,
        title: "I Love Bachata",
        year: 2011,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "vyXOcF1n3wE"
    },

    {
        id: 26,
        title: "Pobres Millonarios",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "-F-Sr5br67s"
    },

    {
        id: 27,
        title: "Jugando a Bailar",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/binrepository/image_content_10293476_20180713145421.jpg",
        videoId: "8MLkID-9J2w"
    },

    {
        id: 28,
        title: "Lotoman 003",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "ulSWQw0hd58"
    }
];

window.peliculas = peliculas;
