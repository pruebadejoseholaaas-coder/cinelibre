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
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcUPF8-GqX32JArK6iYWNLQrT57cVjU7JE6MtjSIiMg&s=10",
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
        poster: "URL_DEL_POSTER",
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
    }
];

window.peliculas = peliculas;
