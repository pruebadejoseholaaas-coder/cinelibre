// 🇩🇴 CATÁLOGO DE CINE DOMINICANO
// ================================================================
// Catálogo de películas dominicanas para CineLibre.
// ================================================================
//
// Cada película contiene:
// id          -> Identificador
// title       -> Título
// year        -> Año
// category    -> Categoría
// featured    -> Película destacada
// poster      -> Póster
// videoId     -> ID del video de YouTube
// synopsis    -> Sinopsis
//
// Categorías:
// scifi, horror, drama, comedy, animation,
// war, documentary, action
// ================================================================

const peliculas = [

    {
        id: 1,
        title: "Nueba Yol: ¡Por fin llegó Balbuena!",
        year: 1995,
        category: "comedy",
        featured: true,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzyOkws-KZjmqMyhRDSQePe-2YES_buUGWx_NLU7jRg&s=10",
        videoId: "qDcNLIrmFOE",
        synopsis: "Balbuena viaja desde República Dominicana hasta Nueva York buscando una vida mejor. Allí se enfrenta a situaciones inesperadas, diferencias culturales y numerosos problemas que convierten su aventura en una divertida experiencia."
    },

    {
        id: 2,
        title: "Dos compadres y una yola",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexWOg7331XhHVr4gmPZtTUiq49lRoVTTJt2ttjYHuTA&s=10",
        videoId: "96ZOzrOmMx4",
        synopsis: "Dos amigos se embarcan en una aventura que los lleva a enfrentar situaciones inesperadas mientras intentan alcanzar sus objetivos. La amistad y el humor son protagonistas de esta historia."
    },

    {
        id: 3,
        title: "Los Paracaidistas",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "https://m.media-amazon.com/images/M/MV5BMTgzNTM4NTE1Ml5BMl5BanBnXkFtZTgwODcwODI0NDE%40._V1_FMjpg_UX1000_.jpg",
        videoId: "qygP3GFshQo",
        synopsis: "Un grupo de amigos busca una manera de resolver sus problemas económicos y termina involucrándose en una situación tan arriesgada como divertida."
    },

    {
        id: 4,
        title: "Un Lío en Dólares",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFe_rrQiJvxQ4ueafy6CiUWWBZevGXQFtKGwM-S7ZQ-A&s=10",
        videoId: "b-ExSznPdhc",
        synopsis: "Una serie de enredos relacionados con dinero pone a varios personajes en situaciones complicadas. Sus intentos por salir del problema provocan numerosos momentos de humor."
    },

    {
        id: 5,
        title: "Ponchao",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVwhqVGrpoQqB-PxaF1WQHSRTWvFqXSBDuL2RIY-Llg&s=10",
        videoId: "C35xofb3dFQ",
        synopsis: "Un joven sueña con convertirse en una figura destacada del béisbol. Su camino está lleno de obstáculos, decisiones difíciles y situaciones cómicas."
    },

    {
        id: 6,
        title: "Perico Ripiao",
        year: 2003,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMjpLsoaI0pLIpognbRowdBgh0pGjJ8nC7mkMYM_-5Q&s=10",
        videoId: "fMhQUoTzCoM",
        synopsis: "Tres presos escapan y comienzan una inesperada aventura mientras intentan encontrar una nueva oportunidad. La música, la amistad y el humor dominicano acompañan su recorrido."
    },

    {
        id: 7,
        title: "Cristo Rey",
        year: 2013,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXApZ_8yz_r6-v5LvUE1lsPalzYPrTtKu6iPyJtBTj5Q&s=10",
        videoId: "ZgxHLU2JMOk",
        synopsis: "En un barrio marcado por conflictos y diferencias sociales, dos hermanos se encuentran enfrentados por sus circunstancias y por el amor de una joven."
    },

    {
        id: 8,
        title: "Flor del Sol",
        year: 2016,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qP9tWeg_d7m41Ga9Wn4tXcw0w2Ez1giZC9xwVecROA&s=10",
        videoId: "e3ELetowtSE",
        synopsis: "Una historia marcada por las relaciones humanas, los sueños y las dificultades que deben superar sus protagonistas para encontrar un nuevo camino."
    },

    {
        id: 9,
        title: "Tubérculo Presidente",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSceYy2Hrxj0KIKeX-tai9j-_Eu-EwmreOoPnpTnau_Fg&s=10",
        videoId: "PHzPjMxP9lk",
        synopsis: "Tubérculo se encuentra en una situación completamente inesperada cuando termina involucrado en el mundo de la política y llega a ocupar una posición de gran poder."
    },

    {
        id: 10,
        title: "Profe por accidente",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPKhE-bg3qs1yc_aCD6TtY8sZFRIiTO5tOpO0-bWulA&s=10",
        videoId: "MGdZXqIfAws",
        synopsis: "Un hombre termina convirtiéndose en profesor de manera inesperada y debe enfrentarse a los retos de trabajar con estudiantes mientras intenta adaptarse a su nueva responsabilidad."
    },

    {
        id: 11,
        title: "Duarte, Traición y Gloria",
        year: 2014,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRDwIhhXx9hYKUlUjOfVAXUbnneys6vZ5ufdnsOOW3w&s=10",
        videoId: "roaTxgdnr30",
        synopsis: "La historia presenta una mirada dramatizada a Juan Pablo Duarte y a los acontecimientos que rodearon la lucha por la independencia dominicana."
    },

    {
        id: 12,
        title: "Sanky Panky",
        year: 2007,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kiOhXANfwWMGFwwOLQafmlsrELzW26eE6x3dJX_X_A&s=10",
        videoId: "G-aSUuWc51Y",
        synopsis: "Genaro sueña con conseguir una mejor vida y decide trabajar como animador turístico. Sus planes lo llevan a vivir divertidas situaciones mientras intenta conquistar el amor y alcanzar sus metas."
    },

    {
        id: 13,
        title: "Vamos de Robo",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNGUB5ovIZF26_-5ZU2eQUYMAD0EvUq-9Cgqc3etN0g&s=10",
        videoId: "dwfL8l-wHIc",
        synopsis: "Un grupo de personajes se ve involucrado en un robo que desencadena una cadena de problemas, engaños y situaciones inesperadas."
    },

    {
        id: 14,
        title: "Hotel Coppelia",
        year: 2021,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjYvEiEha5P4yPrdutSZZv68P7oSlCBw75oQjU_bHsw&s=10",
        videoId: "https://ok.ru/video/2452376259270",
        synopsis: "En un hotel de Boca Chica, varias personas quedan atrapadas por las circunstancias y deben enfrentar sus propios conflictos mientras el mundo exterior atraviesa momentos difíciles."
    },

    {
        id: 15,
        title: "Sanky Panky 2",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0h1OZ-heM4Ta4Fd05Xi_tCElgFoVem9zNKG-691XMQ&s=10",
        videoId: "kpiH0kVI6RA",
        synopsis: "Genaro y sus amigos regresan con nuevas aventuras, problemas y situaciones amorosas mientras intentan encontrar una mejor vida."
    },

    {
        id: 16,
        title: "Sanky Panky 3",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0enTjgLvuj_C2FVbMf5tnmsqwk76YNEk9S1KsFC1bQ&s=10",
        videoId: "f5CzQ1UxkB4",
        synopsis: "La historia continúa con nuevos retos para sus protagonistas, quienes vuelven a enfrentarse a problemas, romances y situaciones llenas de humor."
    },

    {
        id: 17,
        title: "La Maravilla",
        year: 2019,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmn7xVYiSNHYK07d2Qmwmv46fzx4vLtSmHbDuqt3lUNg&s=10",
        videoId: "GZ9XiqWzYqM",
        synopsis: "Una situación inesperada cambia la vida de varios personajes y los lleva a enfrentarse a una serie de acontecimientos cargados de humor."
    },

    {
        id: 18,
        title: "La Vida de los Reyes",
        year: 2021,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3U5-aHg0-8vVMioH-9ak9_zQgvpuL9617fZDX5CpPg&s=10",
        videoId: "WcsQCjzqxIs",
        synopsis: "La película cuenta la historia de dos reconocidos comediantes dominicanos y presenta diferentes momentos de sus vidas y carreras."
    },

    {
        id: 19,
        title: "Súper Familia",
        year: 2021,
        category: "comedy",
        featured: false,
        poster: "https://resources.diariolibre.com/images/binrepository/unnamed-1_17523516_20211029113830.jpg",
        videoId: "0XEUUOimmoI",
        synopsis: "Una familia intenta mantenerse unida mientras enfrenta los retos de la vida cotidiana, el amor y las responsabilidades familiares."
    },

    {
        id: 20,
        title: "Padre se busca",
        year: 2022,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiGbcwpmbt3VT48oOwt29vSHJcSiE4sO7fFJRdvyJpA&s=10",
        videoId: "rIva_BAFGtU",
        synopsis: "Una situación familiar inesperada lleva a sus protagonistas a buscar una figura paterna, provocando una serie de encuentros y situaciones divertidas."
    },

    {
        id: 21,
        title: "Negocios son negocios",
        year: 2004,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNb0IciY0fZ9bm5aBCovF1tsh04eqZHTytU5bXCEVyA&s=10",
        videoId: "P9lyiONXDTM",
        synopsis: "Los intereses económicos ponen a prueba las relaciones entre varios personajes, generando conflictos, negociaciones y situaciones llenas de humor."
    },

    {
        id: 22,
        title: "Pa' Qué Me Casé",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6NgKq5b-MC8HoRDvL_VgGcB4-Qf24a43kMqj0yBm6Q&s",
        videoId: "6_BoYVCeLlg",
        synopsis: "Una pareja descubre que el matrimonio puede ser mucho más complicado de lo que imaginaba y debe enfrentar problemas que ponen a prueba su relación."
    },

    {
        id: 23,
        title: "Súper Papá",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlQYB_sUS1zr7qAmf8HCyilDizVhvj2yeD5HCVkUZCQ&s=10",
        videoId: "IrG2fg4_h-c",
        synopsis: "Un padre debe asumir nuevas responsabilidades y demostrar que puede cuidar de su familia mientras enfrenta situaciones inesperadas."
    },

    {
        id: 24,
        title: "El Plan Perfecto",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv56OoNexpebQoJzrbRVNTD2iMoqIKzehn88H6KpMmDQ&s=10",
        videoId: "jwVv1Ee9z-8",
        synopsis: "Un grupo de personajes diseña lo que parece ser un plan perfecto, pero una serie de imprevistos amenaza con arruinarlo todo."
    },

    {
        id: 25,
        title: "I Love Bachata",
        year: 2011,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDL3n1NbTX0b8m2BCW4yKE9Lhdf8yZPY_2leA7S86aGQ&s=10",
        videoId: "vyXOcF1n3wE",
        synopsis: "La música y el amor se mezclan en una historia donde varios personajes buscan encontrar su lugar mientras la bachata ocupa un papel central."
    },

    {
        id: 26,
        title: "Pobres Millonarios",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRROGZJ3RNBa3_Ygz9aoBKV6YBzU9wt1fNr33rcpRGQ&s=10",
        videoId: "-F-Sr5br67s",
        synopsis: "Un grupo de personas pasa de tener dificultades económicas a encontrarse con una oportunidad inesperada que cambia completamente sus vidas."
    },

    {
        id: 27,
        title: "Jugando a Bailar",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7kCBgZOlLUiKJps8Ot2YvkfZY3aM2mmMuPh7j26IsA&s=10",
        videoId: "8MLkID-9J2w",
        synopsis: "Un grupo de jóvenes encuentra en el baile una oportunidad para perseguir sus sueños y demostrar su talento mientras enfrentan diferentes obstáculos."
    },

    {
        id: 28,
        title: "Lotoman 003",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafCkBt5R-y-VgF_0XN8D1PINNk96y5bj_hOqE3J4K8g&s=10",
        videoId: "ulSWQw0hd58",
        synopsis: "Los protagonistas vuelven a involucrarse en una nueva aventura llena de problemas, planes improvisados y situaciones cómicas."
    },

    {
        id: 29,
        title: "Nueba Yol 3: Bajo la nueva ley",
        year: 1997,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcUPF8-GqX32JArK6iYWNLQrT57cVjU7JE6MtjSIiMg&s=10",
        videoId: "6N2HyCwyfJs",
        synopsis: "Balbuena continúa enfrentando las dificultades de vivir en Nueva York mientras intenta adaptarse a nuevas circunstancias y encontrar estabilidad."
    },

    {
        id: 30,
        title: "Boca Chica",
        year: 2024,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMsIyuVP1K6wBpQBlg61mXFZos9OfmKefRbo1aIYq2A&s=10",
        videoId: "ndYYroRNMOg",
        synopsis: "Una joven que vive en Boca Chica enfrenta una realidad difícil mientras intenta encontrar oportunidades y construir un futuro diferente."
    },

    {
        id: 31,
        title: "El Heredero",
        year: 2024,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgcV3ePAvczk8CGBx2d2bcHtmtA3cW8xhofJQ0G4vqQ&s=10",
        videoId: "hIdiStJN1kw",
        synopsis: "Una herencia inesperada coloca a un personaje en una situación que cambia su vida y lo obliga a enfrentar conflictos familiares y económicos."
    },

    {
        id: 32,
        title: "Colao 2",
        year: 2023,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHeof3TQhufujZ5IHqFsyqZ3z-lpkvtCxB66cvTzZPg&s=10",
        videoId: "HY5RmPWd6qs",
        synopsis: "Los protagonistas continúan sus aventuras mientras intentan alcanzar sus objetivos y mantener sus relaciones en medio de nuevos problemas."
    },

    {
        id: 33,
        title: "La lucha de Ana",
        year: 2012,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDB5vqJy6T2gIz9ed8yS-7-AY2-s0ZQiGpGr3sD-Jgw&s=10",
        videoId: "uhzWX3E4G5Y",
        synopsis: "Ana atraviesa una situación dolorosa que la obliga a luchar por su familia y por una oportunidad de reconstruir su vida."
    },

    {
        id: 34,
        title: "La Soga 3: Venganza",
        year: 2023,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5WuWrC1MCbFKfqE8ZUyi96IZ438mf5gmjWHwh9ZIkg&s=10",
        videoId: "fw2jc-JxYXE",
        synopsis: "Luisito regresa enfrentándose a nuevos enemigos y conflictos mientras busca hacer justicia y resolver asuntos pendientes de su pasado."
    },

    {
        id: 35,
        title: "Mi Angelito Favorito",
        year: 2013,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmIk4hQLxaeMUOjoiPrCBR-0YYHsRzm4WwHb_4TDbDg&s=10",
        videoId: "Lr1MORjvgh4",
        synopsis: "Un personaje recibe una inesperada ayuda que cambia su manera de ver la vida y lo lleva a vivir una serie de situaciones divertidas."
    },

    {
        id: 36,
        title: "Liborio",
        year: 2020,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK3WxrlBK8IvMD-Jq2WpR9M9EMxA7MUdRejqqB3Q8fw&s=10",
        videoId: "uH8ajcWjKJg",
        synopsis: "La historia se inspira en la figura de Liborio Mateo y en el movimiento religioso y social que surgió alrededor de su figura en la región sur de República Dominicana."
    },

    {
        id: 37,
        title: "Danny 45",
        year: 2022,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwHYr8CCVRK2_u3pu8xZA4hzfTLkg7TIPZp0EXn5GsQ&s=10",
        videoId: "8zeXvfIaZd8",
        synopsis: "Un hombre marcado por circunstancias difíciles debe enfrentar las consecuencias de sus decisiones mientras intenta cambiar el rumbo de su vida."
    },

    {
        id: 38,
        title: "Teacher Mechy",
        year: 2023,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2ifAThiEHHR2BPItbMXXzAIG2bZvzuqH6Rz18FwhBw&s=10",
        videoId: "eJ0c4wV2_ps",
        synopsis: "Una maestra debe enfrentarse a los retos de su trabajo y a las situaciones que surgen dentro y fuera del aula."
    },

    {
        id: 39,
        title: "Los Rechazados",
        year: 2025,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfi-RD4ROSne5WAOk4z57-qoAV80Km7Lx7-ft9YpOlQ&s=10",
        videoId: "aRyAEfZPf4Y",
        synopsis: "Un grupo de personas consideradas diferentes debe demostrar que sus circunstancias no determinan su valor mientras atraviesan una serie de situaciones inesperadas."
    },

    {
        id: 40,
        title: "La Trampa",
        year: 2022,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuHpHveKxoX2xYbRr0jDhWWnvugh_FEEQoVqdX_UjRA&s=10",
        videoId: "fsCkuHpqXGo",
        synopsis: "Una situación aparentemente sencilla se convierte en una complicada cadena de engaños y problemas que obliga a los protagonistas a buscar una salida."
    },

    {
        id: 41,
        title: "Pa'l Campamento",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlNWFm5ETwgUnBkuPmDNvq3PCP6dPPFro7mttFCJ4Gw&s=10",
        videoId: "Z0i-FXTekqE",
        synopsis: "Un grupo de personajes llega a un campamento donde las actividades y la convivencia provocan una serie de situaciones inesperadas y divertidas."
    },

    {
        id: 42,
        title: "Pueto Pa' Mi",
        year: 2015,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBcBNxbXOAOkEZGtNch-ht2YHkScS5iOrxB8qnAJLhg&s=10",
        videoId: "WASqpqnTrWE",
        synopsis: "Dos jóvenes de un barrio popular buscan salir adelante y alcanzar sus sueños a pesar de las dificultades que encuentran en el camino."
    },

    {
        id: 43,
        title: "Andrea: La Venganza de un Espíritu",
        year: 2005,
        category: "horror",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeachrFCAEssTa1YkjGkArcgVi-sOHySbrngp1eFnBw&s=10",
        videoId: "v9r_HmguaZc",
        synopsis: "Una presencia sobrenatural comienza a atormentar a una familia, relacionada con una historia del pasado que busca revelar sus secretos y reclamar justicia."
    },

    {
        id: 44,
        title: "La Soga",
        year: 2009,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYLB_E-Watw_r2R4L-bTY2pdbVRIEu_ciBZjtpV8_fQ&s=10",
        videoId: "ZDTW_lbkSho",
        synopsis: "Luisito es un hombre que busca hacer justicia por su cuenta después de sufrir una tragedia. Su camino lo lleva a enfrentarse a la violencia y a los conflictos de su entorno."
    },

    {
        id: 45,
        title: "Talento de Barrio",
        year: 2008,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBG9uBtvykVBjccluwnhueHz-qAL-vX68ks_vcPrmUw&s=10",
        videoId: "csrnvBNmUQc",
        synopsis: "Un joven talentoso intenta abrirse camino en un ambiente difícil mientras busca una oportunidad para demostrar sus habilidades y cambiar su vida."
    },

    {
        id: 46,
        title: "El año del tigre poster",
        year: 2014,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrlDZofUyMMRPaAKY7rGc9weHCSy9e21yVObStsRPXA&s=10",
        videoId: "o4eEy7__Iwg",
        synopsis: "Una historia de personajes que deben enfrentar cambios y conflictos personales mientras intentan encontrar nuevas oportunidades."
    },

    {
        id: 47,
        title: "Carta Blanca",
        year: 2021,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBfhMe3jk-GP5X-NV6AdxrNNJ5Ui1JSblu2koO9EqfA&s=10",
        videoId: "WSw2WhGWGWQ",
        synopsis: "Un hombre relacionado con el mundo criminal intenta resolver asuntos pendientes mientras enfrenta las consecuencias de sus decisiones."
    },

    {
        id: 48,
        title: "Los Locos También Piensan",
        year: 2005,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrahM11xiC-jqF_aQtEYbz_MNt5BdyfhEp2eDYstNe4g&s=10",
        videoId: "E7mL51TdrN4",
        synopsis: "Un grupo de personajes se enfrenta a diferentes problemas mientras intenta demostrar que sus ideas, aunque parezcan absurdas, pueden funcionar."
    },

    {
        id: 49,
        title: "Lotoman 2",
        year: 2012,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCs07keq3fiUEZPcs8oxfnhAP1tyeYjbvr7QL14sGl7w&s=10",
        videoId: "We4fstvmpKE",
        synopsis: "Los protagonistas regresan para enfrentar nuevos problemas y aventuras mientras intentan conseguir dinero y mejorar sus vidas."
    },

    {
        id: 50,
        title: "Me Gusta la Tuya",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zHjPdD3y-q5GQd_hUk4iNYVT5lP4dsDdgHP7Ej1IzQ&s=10",
        videoId: "rRq7oKNwPeo",
        synopsis: "Los problemas sentimentales y las relaciones entre parejas generan una serie de situaciones cómicas donde los personajes descubren que el amor no siempre es sencillo."
    },

    {
        id: 51,
        title: "Al Fin y al Cabo",
        year: 2008,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHoueuQtlDSd8KhTw47n5l28cpLSxg_KPhq8Er4m_gQ&s=10",
        videoId: "Q_A1wBFRLpk",
        synopsis: "Varias personas se encuentran envueltas en situaciones inesperadas que ponen a prueba sus relaciones y provocan divertidos malentendidos."
    },

    {
        id: 52,
        title: "Tubérculo Gourmet",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_abz8zIz6Ej4P6E1jrTSjs5pD5D8d3VwJg2TI7JcXHg&s=10",
        videoId: "dkrzdZzpljM",
        synopsis: "Tubérculo se encuentra con nuevas oportunidades y desafíos mientras intenta mantener su particular manera de ver la vida y disfrutar de las cosas sencillas."
    },

    {
        id: 53,
        title: "La Bruja",
        year: 2021,
        category: "horror",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdakjavC4mMtNcX5P0Fg8duC7WKTVZ_LDylD_eo2V7Yg&s=10",
        videoId: "8T-_jpKd-Eg",
        synopsis: "Una comunidad comienza a enfrentarse a acontecimientos extraños relacionados con una figura misteriosa a la que muchos consideran una bruja."
    },

    {
        id: 54,
        title: "A Ritmo de Fe",
        year: 2013,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShu4d6YeGMipsz3ZLeTBQNwfS0Z9jGrqr5KQin3uLZjA&s=10",
        videoId: "28Hsux5HKlg",
        synopsis: "Un joven encuentra en la música y en su fe una forma de superar los obstáculos y buscar una nueva dirección para su vida."
    },

    {
        id: 55,
        title: "Mi Novia Está de Madre",
        year: 2007,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5JnvxsoXtN2vE56JyKDAy57lIigxu_Ocv0pvE01bYA&s=10",
        videoId: "FTmipsT-JMU",
        synopsis: "Una relación de pareja se complica cuando los protagonistas deben enfrentarse a situaciones familiares inesperadas."
    },

    {
        id: 56,
        title: "La Hija Natural",
        year: 2011,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9pFHSIVgU4nD2lVWeDB-f4nNihk2kbof_y2rOftYUQ&s=10",
        videoId: "jaDmstDIND8",
        synopsis: "Una joven descubre aspectos desconocidos de su familia y debe enfrentarse a secretos del pasado que cambian su manera de comprender su propia historia."
    },

    {
        id: 57,
        title: "La Fiesta del Chivo",
        year: 2005,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlI-YRjyZYHi7Y2QT6LUIMAB9P_s4jvZHlXzumElrgbg&s=10",
        videoId: "6efEKPrmeCo",
        synopsis: "La película presenta una historia relacionada con la dictadura de Rafael Trujillo y las consecuencias que dejó su régimen en la sociedad dominicana."
    },

    {
        id: 58,
        title: "El Hoyo del Diablo",
        year: 2012,
        category: "horror",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYgq-7FNj4eaPeXSYC2zygfg7SgT88sbQp4VD02Ab1w&s=10",
        videoId: "Icvkq0lhAfs",
        synopsis: "Un grupo de personas llega a un lugar marcado por acontecimientos sobrenaturales y descubre que escapar de allí será mucho más difícil de lo que imaginaban."
    },

    {
        id: 59,
        title: "Héroes de Junio: La Historia Prohibida",
        year: 2019,
        category: "war",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLxQu3JFSZ-AuvNpq2FVzC8IZHpXk3tM1nw6CkFMqQQ&s=10",
        videoId: "hcOfV35XFWE",
        synopsis: "La película recrea la historia de un grupo de dominicanos que luchó contra la dictadura de Trujillo y recuerda los acontecimientos de las expediciones de junio de 1959."
    },

    {
        id: 60,
        title: "La Vida de Peña Gómez",
        year: 2016,
        category: "documentary",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YQiXcrwQ6Wl5zVP8ZcU2kXWXJgqXDrLC-m65FQc6zw&s=10",
        videoId: "O400SlOHJbU",
        synopsis: "Documental dedicado a la vida, trayectoria política y legado de José Francisco Peña Gómez, una de las figuras políticas más importantes de la República Dominicana."
    },

    {
        id: 61,
        title: "Pinky y Mole",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl39w9b9eDgpKxvbGBTRPHQBSpO09fkxyO6xVZnCwCqg&s=10",
        videoId: "HfFb7GYGAlQ",
        synopsis: "Dos personajes se ven involucrados en una serie de aventuras y problemas que ponen a prueba su amistad y su capacidad para salir de situaciones complicadas."
    },

    {
        id: 62,
        title: "Malcriados",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUfCcNJWQa0LSJZdbtt8VSlCMuS2qIUawG-06UPXX7A&s=10",
        videoId: "RLYVlCOiiJk",
        synopsis: "Un grupo de jóvenes acostumbrados a tenerlo todo debe enfrentarse a situaciones que los obligan a madurar y descubrir nuevas responsabilidades."
    },

    {
        id: 63,
        title: "Muerte en el Paraíso",
        year: 2019,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9I-D8LM4SFgg-8lnMCae0KicZi1kkDcBPBWuDBfFhzQ&s=10",
        videoId: "Xrw9Jxkme4c",
        synopsis: "Una muerte inesperada altera la tranquilidad de un lugar aparentemente paradisíaco y obliga a los personajes a descubrir la verdad detrás de lo ocurrido."
    },

    {
        id: 64,
        title: "Héctor El Father",
        year: 2018,
        category: "documentary",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4pYXx25jwnw1kBq04PhR8QixEWpJIINVqtC4jkIqhA&s=10",
        videoId: "GCjwGfdnHqQ",
        synopsis: "Documental que presenta la trayectoria de Héctor El Father, su carrera musical, sus experiencias personales y los cambios que marcaron su vida."
    },

    {
        id: 65,
        title: "Lotoman",
        year: 2011,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQaEEHFfMzV4cA4cAOZun_Krsx3MFVRzD-tmQNHEV4A&s=10",
        videoId: "5fOOmkF3ROs",
        synopsis: "Tres hombres buscan mejorar su situación económica y terminan involucrándose en una aventura que cambia completamente sus vidas."
    },

    {
        id: 66,
        title: "Ladrones a domicilio",
        year: 2008,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0R-5AsA6F6mE9VVKTjwCoMDdc9TsOKCqQax0_4Zg0lg&s=10",
        videoId: "qXh_3OBq1EM",
        synopsis: "Un hombre desesperado por resolver sus problemas económicos termina involucrándose en un plan de robos que provoca consecuencias inesperadas."
    },

    {
        id: 67,
        title: "El fantasma de mi novia",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-pgddv2Cv3zKDLe88L_9uYhQtK4lyJTLKWeZvNU3Iw&s=10",
        videoId: "bMl6XrQbmvI",
        synopsis: "Un hombre se encuentra con el espíritu de su antigua novia y comienza a vivir una serie de situaciones extrañas mientras intenta comprender lo que está ocurriendo."
    },

    {
        id: 68,
        title: "Cristiano de la secreta",
        year: 2009,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglVXuHq1TKZO4eEbeljBxJ_F99fcNJAKOOcnmhUyCpA&s=10",
        videoId: "t2LVS8hAHrE",
        synopsis: "Un hombre lleva una doble vida mientras intenta ocultar sus hábitos y aparentar ser una persona diferente ante quienes lo rodean."
    },

    {
        id: 69,
        title: "Dos policías en apuros",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zcSsWje9DA2hBd1Bf8lHw2V1MU_iATMfJ9Y40sLPKQ&s=10",
        videoId: "VS9BN2Az54A",
        synopsis: "Dos policías se ven envueltos en una misión complicada y deben trabajar juntos para resolver el problema mientras enfrentan numerosos obstáculos."
    },

    {
        id: 70,
        title: "Nueba Yol 2: La historia continúa",
        year: 1996,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK84F8v6qIPK8RAQZZeszN9_cA8_IW-m2HDlIdNTM5Ng&s=10",
        videoId: "omI7pTxlAkM",
        synopsis: "Balbuena continúa su vida en Nueva York y vuelve a enfrentarse a nuevos problemas mientras intenta adaptarse a su entorno y mejorar su situación."
    },

    {
        id: 71,
        title: "Colao",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFg_dg_4wsKcVU2OIDpr-96gKxpEgtZE57Vetd4uA-A&s=10",
        videoId: "TQU2hc753oU",
        synopsis: "Un joven de una zona rural viaja a Santo Domingo buscando nuevas oportunidades y termina descubriendo el amor, la ciudad y nuevas experiencias."
    },

    {
        id: 72,
        title: "Qué León",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcTk-Si-4UCkmTjqEU0gNrsapLEJsHCuuoNEUgu-Fzw&s=10",
        videoId: "zH8d9UmIyx8",
        synopsis: "Nicole y José Miguel pertenecen a mundos sociales diferentes, pero el amor los une mientras sus familias y circunstancias intentan separarlos."
    },

    {
        id: 73,
        title: "Código Paz",
        year: 2014,
        category: "action",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXbWVD2ZCK5fWuABO47VTZk1q6AKZMST9Ybuy4kyIqg&s=10",
        videoId: "SDj8RnRET30",
        synopsis: "Pedro trabaja como ladrón y se ve involucrado en una peligrosa situación relacionada con dinero, delincuencia y traiciones."
    },

    {
        id: 74,
        title: "Baile Urbano",
        year: 2018,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBSWsCP1tJimR4PodeMG-g74lPSj7W_ZZz6MUwMi44Q&s=10",
        videoId: "KijOyndrk7c",
        synopsis: "Un grupo de jóvenes encuentra en el baile urbano una oportunidad para expresar su talento y luchar por sus sueños."
    },

    {
        id: 75,
        title: "La Máscara",
        year: 2020,
        category: "horror",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsusjz7c-GOIydA00qyLXNe5l6tBzTBwWbmfNnobhSQ&s=10",
        videoId: "nuUwusxMcAs",
        synopsis: "Una misteriosa máscara está relacionada con acontecimientos extraños que comienzan a poner en peligro a quienes entran en contacto con ella."
    },

    {
        id: 76,
        title: "La Máscara 2",
        year: 2021,
        category: "horror",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6Seil3o7jV-e_eOrikE8d3TqkTqFk0-Dx_bQm1cIuA&s=10",
        videoId: "42HruccjsNU",
        synopsis: "La historia continúa cuando nuevos personajes se enfrentan a los misterios y peligros relacionados con la inquietante máscara."
    },

    {
        id: 77,
        title: "El Rey de Najayo",
        year: 2012,
        category: "drama",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTc-N0YpJumRYHZkKJJoTFoDRzKlF0968mJH2c-auV_w&s=10",
        videoId: "hEDXnJGx_5I",
        synopsis: "Un hombre poderoso dentro de una prisión debe enfrentarse a conflictos, rivalidades y decisiones que pueden cambiar su posición y su futuro."
    },

    {
        id: 78,
        title: "Santi Clo... La vaina de la Navidad",
        year: 2008,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIbJQ0aF4yQmkCI3a4L30MphT3t3x7vh0lZmR7SOKyw&s=10",
        videoId: "67_CnSMYc00",
        synopsis: "Una historia navideña dominicana llena de humor donde diferentes personajes viven situaciones inesperadas durante la época de Navidad."
    },

    {
        id: 79,
        title: "De Pez en Cuando",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDn4454uaVJ1G01vho_2CHO2x4qhbpCiSRAlEWmVtVA&s=10",
        videoId: "cC0o77NZIBw",
        synopsis: "Un hombre lleva una vida aparentemente normal hasta que una serie de acontecimientos inesperados cambia su rutina y lo coloca en situaciones divertidas."
    },

    {
        id: 80,
        title: "Perdiendo el Juicio",
        year: 2023,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFSmE-p1X0F4IvZm1fHA6CLBrIY2Ztt41dPwHXBcGcA&s=10",
        videoId: "NBISYc_O-84",
        synopsis: "Una situación inesperada lleva a los protagonistas a enfrentarse a problemas legales y personales que generan una cadena de situaciones llenas de humor."
    },

    {
        id: 81,
        title: "La Gunguna",
        year: 2015,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_ZKAqGn4bDvHeqoBN3A2sRWtWR-E5BvR8AWNQb1qZg&s=10",
        videoId: "i9pWZQgb4RE",
        synopsis: "Una antigua pistola pasa de mano en mano y conecta las historias de diferentes personajes, provocando una cadena de acontecimientos inesperados."
    },

    {
        id: 82,
        title: "Quiero ser fiel",
        year: 2014,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVk8INNejWq9QiPnTWzFPlIwZZ8ztUMoQ1ybmZQ-iww&s=10",
        videoId: "Wzd2FTFRJgE",
        synopsis: "Un hombre casado intenta demostrar que puede ser fiel mientras enfrenta tentaciones, dudas y situaciones que ponen a prueba su relación."
    },

    {
        id: 83,
        title: "Todas las mujeres son iguales",
        year: 2017,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlA9jqyjR1tlJlUW90CB0u9dx3WbvF5Pov-64o_UFtAg&s=10",
        videoId: "c2xIUmd3yXg",
        synopsis: "Cuatro mujeres con personalidades muy diferentes forman una amistad mientras comparten experiencias amorosas, problemas y situaciones de la vida cotidiana."
    },

    {
        id: 84,
        title: "Todos los hombres son iguales",
        year: 2016,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbQjXKUTGj95bSBc7EtJlrT4lPu4B00MaZ_AbwlyBNA&s=10",
        videoId: "o-SFwI5VCpQ",
        synopsis: "Tres hombres divorciados comienzan una nueva etapa de sus vidas y terminan compartiendo experiencias sobre el amor, las relaciones y la convivencia."
    },

    {
        id: 85,
        title: "Trabajo Sucio",
        year: 2018,
        category: "comedy",
        featured: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCGSkijXUaO7Rq2Ck5N_XbkNn5jJuTKxD0j5bUqMutA&s=10",
        videoId: "ZKrbDbYaNvk",
        synopsis: "Dos amigos se ven involucrados en un trabajo que parece sencillo, pero rápidamente se convierte en una situación complicada llena de problemas."
    },

    {
    id: 86,
    title: "Volvió Juanita",
    year: 2019,
    category: "comedy",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbN96_Fj5UvaEyDjgNFe9rZk5J36dH_reMlRnMAFaTQ&s=10",
    videoId: "kfR-AWI-cF4",
    synopsis: "Juanita regresa después de varios años y su vuelta provoca una serie de cambios y situaciones inesperadas dentro de su familia."
},

{
    id: 95,
    title: "Volvió Juanita",
    year: 2019,
    category: "comedy",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbN96_Fj5UvaEyDjgNFe9rZk5J36dH_reMlRnMAFaTQ&s=10",
    videoId: "kfR-AWI-cF4",
    synopsis: "Juanita regresa después de varios años y su vuelta provoca una serie de cambios y situaciones inesperadas dentro de su familia."
},

{
    id: 96,
    title: "Y a Dios que me perdone",
    year: 2017,
    category: "drama",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0ncZCxe_attyKsf56ZwYOhFc19lkdH6_9bxxCugAsg&s=10",
    videoId: "w3F21uP6gzA",
    synopsis: "Un sargento de policía atraviesa una difícil situación familiar cuando su esposa enferma gravemente después del nacimiento de sus hijas. Ante las dificultades económicas y personales, deberá buscar una manera de mantener unida a su familia."
},

{
    id: 97,
    title: "Oro y Polvo: El Primer Cartel Dominicano",
    year: 2016,
    category: "action",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_v2Wv8V3w3Hse9myciV0OjH3FC4f-oqscPTSrJXGoQ&s=10",
    videoId: "fpv0SgpGWis",
    synopsis: "Una historia de acción y crimen que gira alrededor del surgimiento de una organización dedicada al narcotráfico y de los conflictos que aparecen entre sus integrantes y quienes intentan detenerlos."
},

{
    id: 98,
    title: "Yunior 2",
    year: 2024,
    category: "comedy",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IbCH9LnXo6i8-c85cx8lTKmqC1tLuGOEfvtqIFsGJQ&s=10",
    videoId: "3WZ6FfcjOko",
    synopsis: "Yunior regresa con nuevas aventuras y situaciones inesperadas que ponen a prueba su ingenio y su manera de enfrentar los problemas."
},

{
    id: 99,
    title: "Sonic 3",
    year: 2024,
    category: "animation",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXGj3wjWzOVbNhh-jVpNm33xnvsURwp4KXphqwZAfFg&s=10",
    videoId: "Ab7yYfDOCCM",
    synopsis: "Sonic, Knuckles y Tails vuelven a unir fuerzas para enfrentarse a Shadow, un misterioso y poderoso enemigo que representa una amenaza para el mundo. Los tres héroes deberán superar sus diferencias y trabajar juntos para detenerlo."
},

{
    id: 100,
    title: "Garfield",
    year: 2024,
    category: "animation",
    featured: false,
    poster: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLyvJHxfzq_GmVa5n_99fNpQPJsbHVW251WmXrPriO_YbpuJAz6Yus8ovsLdXV2YdoDPPR3XBUOVPotrlXr9tjvbCtGvJh3DRqLIbPMFPgIroUAgg&usqp=CAc",
    videoId: "hFfmJDKPxYs",
    synopsis: "Garfield vuelve a vivir una nueva aventura cuando se reencuentra inesperadamente con su padre, Vic. Junto a Odie, el famoso gato deberá abandonar su cómoda vida y enfrentarse a una divertida aventura llena de situaciones inesperadas."
},

{
    id: 101,
    title: "El Teniente Amado",
    year: 2013,
    category: "drama",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtJ1RDaQNonIJi8AbacXpfd0sMr6zAm7Bd7Q6j5LXWA&s=10",
    videoId: "7fCaVVWO8hU",
    synopsis: "La historia del teniente Amado García Guerrero, un militar dominicano que decidió enfrentarse a la dictadura de Rafael Leónidas Trujillo y terminó participando en el complot que llevó al ajusticiamiento del dictador."
},

{
    id: 102,
    title: "Un macho de mujer",
    year: 2006,
    category: "comedy",
    featured: false,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwHyX7uJ8_xogFM3_AMyabvBPo37KFQPs0So570S-Hw&s=10",
    videoId: "pIzzyVaH58g",
    synopsis: "Ramón es un hombre acostumbrado a salir de fiesta y dejar las responsabilidades del hogar en manos de su esposa. Un extraño amuleto provoca un cambio inesperado de roles que lo obliga a experimentar la vida desde la perspectiva de ella."
}
];

window.peliculas = peliculas;
