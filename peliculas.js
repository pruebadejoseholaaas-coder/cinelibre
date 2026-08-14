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
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFe_rrQiJvxQ4ueafy6CiUWWBZevGXQFtKGwM-S7ZQ-A&s=10",
        videoId: "b-ExSznPdhc"
    },

    {
        id: 5,
        title: "Ponchao",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVwhqVGrpoQqB-PxaF1WQHSRTWvFqXSBDuL2RIY-Llg&s=10",
        videoId: "C35xofb3dFQ"
    },

    {
        id: 6,
        title: "Perico Ripiao",
        year: 2003,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMjpLsoaI0pLIpognbRowdBgh0pGjJ8nC7mkMYM_-5Q&s=10",
        videoId: "fMhQUoTzCoM"
    },

    {
        id: 7,
        title: "Cristo Rey",
        year: 2013,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXApZ_8yz_r6-v5LvUE1lsPalzYPrTtKu6iPyJtBTj5Q&s=10",
        videoId: "ZgxHLU2JMOk"
    },

    {
        id: 8,
        title: "Flor del Sol",
        year: 2016,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qP9tWeg_d7m41Ga9Wn4tXcw0w2Ez1giZC9xwVecROA&s=10",
        videoId: "e3ELetowtSE"
    },

    {
        id: 9,
        title: "Tubérculo Presidente",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnqwU0-Sw6eIxdpNtFZhG8ifE31P2_DcQ4TN8we0wwQ&s=10",
        videoId: "PHzPjMxP9lk"
    },

    {
        id: 10,
        title: "Profe por accidente",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPKhE-bg3qs1yc_aCD6TtY8sZFRIiTO5tOpO0-bWulA&s=10",
        videoId: "MGdZXqIfAws"
    },

    {
        id: 11,
        title: "Duarte, Traición y Gloria",
        year: 2014,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRDwIhhXx9hYKUlUjOfVAXUbnneys6vZ5ufdnsOOW3w&s=10",
        videoId: "roaTxgdnr30"
    },

    {
        id: 12,
        title: "Sanky Panky",
        year: 2007,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kiOhXANfwWMGFwwOLQafmlsrELzW26eE6x3dJX_X_A&s=10",
        videoId: "G-aSUuWc51Y"
    },

    {
        id: 13,
        title: "Vamos de Robo",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNGUB5ovIZF26_-5ZU2eQUYMAD0EvUq-9Cgqc3etN0g&s=10",
        videoId: "dwfL8l-wHIc"
    },

    {
        id: 14,
        title: "Hotel Coppelia",
        year: 2021,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjYvEiEha5P4yPrdutSZZv68P7oSlCBw75oQjU_bHsw&s=10",
        videoId: ""
    },

    {
        id: 15,
        title: "Sanky Panky 2",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0h1OZ-heM4Ta4Fd05Xi_tCElgFoVem9zNKG-691XMQ&s=10",
        videoId: "kpiH0kVI6RA"
    },

    {
        id: 16,
        title: "Sanky Panky 3",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0enTjgLvuj_C2FVbMf5tnmsqwk76YNEk9S1KsFC1bQ&s=10",
        videoId: "f5CzQ1UxkB4"
    },

    {
        id: 17,
        title: "La Maravilla",
        year: 2019,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmn7xVYiSNHYK07d2Qmwmv46fzx4vLtSmHbDuqt3lUNg&s=10",
        videoId: "GZ9XiqWzYqM"
    },

    {
        id: 18,
        title: "La Vida de los Reyes",
        year: 2021,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3U5-aHg0-8vVMioH-9ak9_zQgvpuL9617fZDX5CpPg&s=10",
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
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiGbcwpmbt3VT48oOwt29vSHJcSiE4sO7fFJRdvyJpA&s=10",
        videoId: "rIva_BAFGtU"
    },

    {
        id: 21,
        title: "Negocios son negocios",
        year: 2004,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNb0IciY0fZ9bm5aBCovF1tsh04eqZHTytU5bXCEVyA&s=10",
        videoId: "P9lyiONXDTM"
    },

    {
        id: 22,
        title: "Pa' Qué Me Casé",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6NgKq5b-MC8HoRDvL_VgGcB4-Qf24a43kMqj0yBm6Q&s",
        videoId: "6_BoYVCeLlg"
    },

    {
        id: 23,
        title: "Súper Papá",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlQYB_sUS1zr7qAmf8HCyilDizVhvj2yeD5HCVkUZCQ&s=10",
        videoId: "IrG2fg4_h-c"
    },

    {
        id: 24,
        title: "El Plan Perfecto",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv56OoNexpebQoJzrbRVNTD2iMoqIKzehn88H6KpMmDQ&s=10",
        videoId: "jwVv1Ee9z-8"
    },

    {
        id: 25,
        title: "I Love Bachata",
        year: 2011,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDL3n1NbTX0b8m2BCW4yKE9Lhdf8yZPY_2leA7S86aGQ&s=10",
        videoId: "vyXOcF1n3wE"
    },

    {
        id: 26,
        title: "Pobres Millonarios",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRROGZJ3RNBa3_Ygz9aoBKV6YBzU9wt1fNr33rcpRGQ&s=10",
        videoId: "-F-Sr5br67s"
    },

    {
        id: 27,
        title: "Jugando a Bailar",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7kCBgZOlLUiKJps8Ot2YvkfZY3aM2mmMuPh7j26IsA&s=10",
        videoId: "8MLkID-9J2w"
    },

    {
        id: 28,
        title: "Lotoman 003",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafCkBt5R-y-VgF_0XN8D1PINNk96y5bj_hOqE3J4K8g&s=10",
        videoId: "ulSWQw0hd58"
    },

    {
        id: 29,
        title: "Nueba Yol 3: Bajo la nueva ley",
        year: 1997,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcUPF8-GqX32JArK6iYWNLQrT57cVjU7JE6MtjSIiMg&s=10",
        videoId: "6N2HyCwyfJs"
    },

    {
        id: 30,
        title: "Boca Chica",
        year: 2024,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMsIyuVP1K6wBpQBlg61mXFZos9OfmKefRbo1aIYq2A&s=10",
        videoId: "ndYYroRNMOg"
    },

    {
        id: 31,
        title: "El Heredero",
        year: 2024,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/2024/11/19/pmf10987.jpg",
        videoId: "hIdiStJN1kw"
    },

    {
        id: 32,
        title: "Colao 2",
        year: 2023,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/2023/11/28/whatsapp-image-2023-11-28-at-12.41.24-pm.jpeg",
        videoId: "HY5RmPWd6qs"
    },

    {
        id: 33,
        title: "La lucha de Ana",
        year: 2012,
        category: "drama",
        featured: false,
        poster: "https://resources.diariolibre.com/images/imagenes/2012/24/234835.jpg",
        videoId: "uhzWX3E4G5Y"
    },

    {
        id: 34,
        title: "La Soga 3: Venganza",
        year: 2023,
        category: "drama",
        featured: false,
        poster: "https://resources.diariolibre.com/images/2023/09/26/manny-perez-la-soga.png",
        videoId: "fw2jc-JxYXE"
    },

    {
        id: 35,
        title: "Mi Angelito Favorito",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "Lr1MORjvgh4"
    },

    {
        id: 36,
        title: "Liborio",
        year: 2020,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "uH8ajcWjKJg"
    },

    {
        id: 37,
        title: "Danny 45",
        year: 2022,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "8zeXvfIaZd8"
    },

    {
        id: 38,
        title: "Teacher Mechy",
        year: 2023,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "eJ0c4wV2_ps"
    },

    {
        id: 39,
        title: "Los Rechazados",
        year: 2025,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "aRyAEfZPf4Y"
    },

    {
        id: 40,
        title: "La Trampa",
        year: 2022,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "fsCkuHpqXGo"
    },

    {
        id: 41,
        title: "Pa'l Campamento",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "Z0i-FXTekqE"
    },

    {
        id: 42,
        title: "Pueto Pa' Mi",
        year: 2015,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "WASqpqnTrWE"
    },

    {
        id: 43,
        title: "Andrea: La Venganza de un Espíritu",
        year: 2005,
        category: "horror",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "v9r_HmguaZc"
    },

    {
        id: 44,
        title: "La Soga",
        year: 2009,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "ZDTW_lbkSho"
    },

    {
        id: 45,
        title: "Talento de Barrio",
        year: 2008,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "csrnvBNmUQc"
    },

    {
        id: 46,
        title: "Urgente",
        year: 2014,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "o4eEy7__Iwg"
    },

    {
        id: 47,
        title: "Carta Blanca",
        year: 2021,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "WSw2WhGWGWQ"
    },

    {
        id: 48,
        title: "Los Locos También Piensan",
        year: 2005,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "E7mL51TdrN4"
    },

    {
        id: 49,
        title: "Lotoman 2",
        year: 2012,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "We4fstvmpKE"
    },

    {
        id: 50,
        title: "Me Gusta Tu Hermana",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "rRq7oKNwPeo"
    },

    {
        id: 51,
        title: "Al Fin y al Cabo",
        year: 2008,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "Q_A1wBFRLpk"
    },

    {
        id: 52,
        title: "Tubérculo Gourmet",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "dkrzdZzpljM"
    },

    {
        id: 53,
        title: "La Bruja",
        year: 2021,
        category: "horror",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "8T-_jpKd-Eg"
    },

    {
        id: 54,
        title: "A Ritmo de Fe",
        year: 2013,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "28Hsux5HKlg"
    },

    {
        id: 55,
        title: "Mi Novia Está de Madre",
        year: 2007,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "FTmipsT-JMU"
    },

    {
        id: 56,
        title: "La Hija Natural",
        year: 2011,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "jaDmstDIND8"
    },

    {
        id: 57,
        title: "La Fiesta del Chivo",
        year: 2005,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "6efEKPrmeCo"
    },

    {
        id: 58,
        title: "El Hoyo del Diablo",
        year: 2012,
        category: "horror",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "Icvkq0lhAfs"
    },

    {
        id: 59,
        title: "Héroes de Junio: La Historia Prohibida",
        year: 2019,
        category: "war",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "hcOfV35XFWE"
    },

    {
        id: 60,
        title: "La Vida de Peña Gómez",
        year: 2016,
        category: "documentary",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "O400SlOHJbU"
    },

    {
        id: 61,
        title: "Pinky y Mole",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "HfFb7GYGAlQ"
    },

    {
        id: 62,
        title: "Malcriados",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "RLYVlCOiiJk"
    },

    {
        id: 63,
        title: "Muerte en el Paraíso",
        year: 2019,
        category: "drama",
        featured: false,
        poster: "URL_DEL_POSTER",
        videoId: "Xrw9Jxkme4c"
    },

   {
    id: 64,
    title: "Héctor El Father",
    year: 2018,
    category: "documentary",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "GCjwGfdnHqQ"
},

{
    id: 65,
    title: "Lotoman",
    year: 2011,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "5fOOmkF3ROs"
},

{
    id: 66,
    title: "Ladrones a domicilio",
    year: 2008,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "qXh_3OBq1EM"
},

{
    id: 67,
    title: "Nueba Yol: Balbuena en Nueva York",
    year: 1995,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "1zTAAmWx_Ik"
},

{
    id: 68,
    title: "El fantasma de mi novia",
    year: 2018,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "bMl6XrQbmvI"
},

{
    id: 69,
    title: "Cristiano de la secreta",
    year: 2009,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "t2LVS8hAHrE"
},

{
    id: 70,
    title: "Dos policías en apuros",
    year: 2016,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "VS9BN2Az54A"
},

{
    id: 71,
    title: "Nueba Yol 2: La historia continúa",
    year: 1996,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "omI7pTxlAkM"
},

{
    id: 72,
    title: "Colao",
    year: 2017,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "TQU2hc753oU"
},

{
    id: 73,
    title: "Qué León",
    year: 2018,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "zH8d9UmIyx8"
},

{
    id: 74,
    title: "Código Paz",
    year: 2014,
    category: "action",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "SDj8RnRET30"
},

{
    id: 75,
    title: "Baile Urbano",
    year: 2018,
    category: "drama",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "KijOyndrk7c"
},

{
    id: 76,
    title: "La Máscara",
    year: 2020,
    category: "horror",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "nuUwusxMcAs"
},

{
    id: 77,
    title: "La Máscara 2",
    year: 2021,
    category: "horror",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "42HruccjsNU"
},

{
    id: 78,
    title: "El Rey de Najayo",
    year: 2012,
    category: "drama",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "hEDXnJGx_5I"
},

{
    id: 79,
    title: "Santi Clo... La vaina de la Navidad",
    year: 2008,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "67_CnSMYc00"
},

{
    id: 80,
    title: "De Pez en Cuando",
    year: 2014,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "cC0o77NZIBw"
},

{
    id: 81,
    title: "La Soga",
    year: 2009,
    category: "drama",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "ZDTW_lbkSho"
},

{
    id: 82,
    title: "Talento de Barrio",
    year: 2008,
    category: "drama",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "csrnvBNmUQc"
},

{
    id: 83,
    title: "Urgente",
    year: 2014,
    category: "drama",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "o4eEy7__Iwg"
},

{
    id: 84,
    title: "Al Fin y al Cabo",
    year: 2008,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "Q_A1wBFRLpk"
},

{
    id: 85,
    title: "La Bruja",
    year: 2021,
    category: "horror",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "irsUAe0crHo"
},

{
    id: 86,
    title: "Pinky & Mole",
    year: 2020,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "HfFb7GYGAlQ"
},

{
    id: 87,
    title: "Perdiendo el Juicio",
    year: 2023,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "NBISYc_O-84"
},

{
    id: 88,
    title: "La Gunguna",
    year: 2015,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "i9pWZQgb4RE"
},

{
    id: 89,
    title: "Quiero ser fiel",
    year: 2014,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "Wzd2FTFRJgE"
},

{
    id: 90,
    title: "No es lo que parece",
    year: 2021,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: ""
},

{
    id: 91,
    title: "Casi fiel",
    year: 2019,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: ""
},

{
    id: 92,
    title: "Todas las mujeres son iguales",
    year: 2017,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "c2xIUmd3yXg"
},

{
    id: 93,
    title: "Todos los hombres son iguales",
    year: 2016,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "o-SFwI5VCpQ"
},

{
    id: 94,
    title: "Trabajo Sucio",
    year: 2018,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "ZKrbDbYaNvk"
},

{
    id: 95,
    title: "Volvió Juanita",
    year: 2019,
    category: "comedy",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "kfR-AWI-cF4"
},

{
    id: 96,
    title: "La Mejor Película Dominicana",
    year: 2020,
    category: "drama",
    featured: false,
    poster: "URL_DEL_POSTER",
    videoId: "z0XdJl7WkOk"
},

];

window.peliculas = peliculas;
