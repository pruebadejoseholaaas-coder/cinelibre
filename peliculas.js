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
        videoId: "",
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
    poster: "",
    videoId: "3WZ6FfcjOko",
    synopsis: "Yunior regresa con nuevas aventuras y situaciones inesperadas que ponen a prueba su ingenio y su manera de enfrentar los problemas."
},

{
    id: 99,
    title: "Sonic 3",
    year: 2024,
    category: "animation",
    featured: false,
    poster: "data:image/webp;base64,UklGRnAtAABXRUJQVlA4IGQtAACwlgCdASq1APEAPmkqj0WkIqEXrN3oQAaEtQM4BlUAUG3/E82O0v6D+7+bvut6v80T2n+Y833/P9WP6h9gX9fvUX6bvMr+23q0+kP+9eo5+2/Wu+gp5d3szf3P/0emPg6rVnT39D+Y3+G907KnaX/P/xX/B87fAP5iahH5d/Rf+B/c/XAhqdPvu/Qd97/uX7Gett9r5x/a72A/1x/5XsD/1/DR/F/7n9ifgA/ov+I9Gz/0/2/oG+s//n7hf6/emx///cv+8n//9079if/+k5rz2C67T0qFAZP9QBPWFCgjalSMCDwlMhJZloJPponhZmwUSPDYYf22+8A3K59dLNtmrEXgd2ObrMwkHR562b6Tn/IWvjZkdpcgLVa/KfR0nNG+a3Zb0oOLOIX2QxeE4E33tT0LVuLmjYCX4PA4DB7EbSsQTFQxLwiuTXPRx1vyunmHLFX5vhrIasXTBmVAH+SVbw0Npw3tZcPrywNplSN4w5bDAqrOekbe5Wjxz8D1nLG9dDsHid9F086WTzBBxDXu6ahG/1cRT28jibAH2A8kovtrJWIcLtTH9vg/cdoSTqZWtUv2+VYJOZfy4+RU9sjGle7kZf4Z9w4+LbiJYRxLbcu1OHNBUJLetCIE847WI3JP49Ei1NYc4bEF+3HUArRQgyv70gHb/ll9NQGtnTTvv4KvpaNzGyxBjmP33AkfEQqWAPEWmppVzaHq1yINKCTkfzCPqZykEMvtJ4LJ6cFtvXNaAx2zE/G/8lyOJnIdBNpB2cdQJqgjmZLgAxnYs3txliufq9szaTaGKdCm8oEyAWZK4u4/A4Y1gpF31gcBC4Ash3q7GjeqnMEPwWiHvKSAz54oNvR/PNqmRjkxcmHzytTyJYOGLfj0KS3j8YnV8UsEhCxyceQbafng9vDM2nlfPcbS9pjVLTKpnqhAZGI7V144w9Xzns7fPD6ASCltcj0bikcs0OMP5867Ad9lrb6kH0Gp0Bx6aMcaMSEcgaiqV+gkp4/EfuBo8kw93aGBzTVFNIOjvfYJz1a8nI2r8V+ajYZS+KMAfXeFc+A0mtX9kcTuUilOky+oPd1FnxNeUvODO3YDow7bbsK8LcUvS+f0IHD5CNC8UUuO6wVyTxnbMcx68ck852gs7NGrynwsArLXb7z1EX0HcyHLVboZFnf/vtN8xGke0UDrkMmmy8VEfyBHMGCqHdGlXKt7GEIpnsYI8b1QGH/JgmiR5r1/fXlqsVVy9GOTKcnu6Fn+8A7s5nuNgkakcJLwkZfmVL+51PTSW02uCERpL/rRKC14q1Qe50AjvfK8AMq9NYoW42IS9VI69Rkd+ibn/mGDS1NSotI+jeoy7efbD9M6ixunnuYe7ttD70kd6S3sV436jQ8aZe8jOzqqqSd6bmqljFAP5sUTvLXD17HmtfeHttMcgKN6cJvwVGHy8wUnNcda5jFIcKoOs/Z8ZcMEsvwF0GZxydwt5na4TQWkhgy7MSb53wyWUZjCPgDQQssdwmiz6KqnWdhbWNOMdTwqIqFFcaYcZ6NZACSePVb+zn66UUEKxf6vlyJZjmaaQDPLlmab0S5zfei8JEMaLI0CFBUaVN2pV/jxolH0P3EY6lgyT6y4CAD++9mzuRNXcjldl8P/8jx7kPhNfB/7xwh0faLad43aTxJ+tDHOJ3U6OUveEozbQFGt/JnZKpqlZ1UC0AwOp1abIFawevaq1C9Ip5BOwRyG5Fb+YGf8BYQ+5SrxEXbYJrF/sxkYdAWMDZH4QBsW3xiXquWbC9GPYFKsOhrQvXxJwUh/RfRVXy93qYYjUzXq5q9dBysiKo9vx2fir8i3rxnMTR9BCh3KRsyAiyIp0EXv/1qDzf9f02Du0Gx2USP3gtvzh358pfTCGvygrq5i6Ulld5ehsdfmdM9vuwz/AUxiEcwpToIWAgMJKEOTJFm12kUmwZ82GjeCGtBbDZB76RKWPO0XAlAQxotkp17nhF5mLZWlfG5lUl1T41YMhbGJOZEz5Be0cEMBaXMydT+hTVXY+iRx96TkhSnOEpGGUIXo4GfJlaTSzQRgQAbOZafW1mDG/DjxwLySYm5kOCojxsGJwEMwTQoiwXP4lxzvtZYZepTMaUbkDDOU4MNdhG8WhFTxkm4Rr6LuZc96NsvUdCj+030mR0VM9CahDFBkjXuHddKmGFaHht6MNzLVLRshz7WKv0BddbJ+HmRQ3qh4vdSCACKZwRfv5/MTqw8P9Cm4XOCcusceDvqBIFgwfVLQ5oqBPdNgP+9bbkvR71pjXNgogS0wUbmQ3mrgI2EvjzSwUOpWPCYrTZFwFIG1CvZvCgBvZDd5wOlyykb8U1+D2ZWbs/xkvTFG72d3xbGBn76vZmknaIUCuRuF6B7GXFOCXefs+rKxHmp8PKmC5XE//RUISFc+fK8vD4aFZw6QCE9McjtaZo9R3jNCMDbQ8J2YpXP1ksr+oyp2hXxlw1o58FSY7VsQR5Id0EJ3gPNnP1vbgdHvY10U4xZJAPV9BG2Qd83D6fnznP/TaPImQu/HX1/0MnVqqpENGxNeihncRgK33n+mGlIUPKBk66P6i3mKeaTtjlkqj5c68GjyI5JzA945y/YVU/FMfEc2ii3QaGJjaaWAgk3ebvyKcoWCxuviZ78jctmQ5RcuXZkLhnL+B+fhSP9OFMyW7PnvRZKomsxjENMyaj2sEgJ7Ribo8Bi57T3o7aMeCQb2nIIE5lq3GKVF7RCq2Q1l1D1f0boh2y6r+T+aeZ4bphO+G7yWrA9QpcuRKdSBVvhS1djsLRI8nJIvPzJeX9dcs5mzdSjQP8g4dw7HlkwBixfk9hHiYSXY5/L/RJVzxaYawezMuuikjlQx94FXPr7FSdI/66v+ioZ4vV9KsHMpsx0XI9tV4EMXbc/mdxBryvuG/RV+Qoc43ze6qQRgD9v7me+i5v+aZicB5QFQkdudO/FmM00Mx4L4nbpW/t2ez3eY1ptKKg/0pDsJ3bSLTa7h5t0njogXD6QeTepnqtzsaKVMkW5bzUw98IN5GYMuc5pQYBS2xuL2jTs5KQ6Pm8mn2gtxiM+sK6yOeUKs5E/XjoyJb3Q7wAOJQZIuylypLwSWemfroVp5oWlTXv9+vBBGhsi2bM+bRQxvd/ECiqSvVDi+8tYs+Lk8Z8LQIo1sMNA+SxrXjMMbaKC3Ny8L+q2dLmt5mQQBZmsRJ7nNRD4GLZ/Jjxn0jTEnVKK7xJnHYHJZxRnnHFW2HvH6lnLaI1cbPf11CJ+7t1tWmh4QnFHpe2NKqJI7bn4yNbpfPXnq4N98mPZPYsTjWmUwsHIoqSCE6mDqJU4wu0RARScidgkQ5vP15L6x2/OClYNCrDoT8ZwtHsrMzX9/+4phifrue6e2bmxNE6CoXEtzD+tUXJ325h7R2cS+jskI/gI//HEEFXqGe1m2mFf0KaVRM+C3KH4a1SlNNFhpH3GlADJsadoeLyKwcRuOE9E4MKQ9Ca+6gF2cTT7JbkU6VMvX1mH7LBIixbFrYSP+HXtP0HaHq1XJw+UjAhEpEe9gXY8AXjmgV5BgjD2h1qnnJd3kmiAG1tZNjLXs4Cl82Z4h4JevrcmHNqx+Zy26uQuJ9j0mlDCPqfULfT9zFLPsWMvxI5sElehSS/qtwmYxNgfJ9HyH0G7MW1Y+l7piakO/YdVm8HK2TnLT67z6ROKW/hXmJXRQ5lKnwdmVqFSEMAXlJvzfehDFD2Sud3+1Qf2hrbNtn1C27ldLvyndCV3Iu0XLTiURhjTUXKCcZErxPr4w/VyQV8edb++v+UqZgw16rGZ9ze9hCFYRW8yrSx9t0vVFtkGlF16RPhPtOxmjRe3nadeWhhWQO/xTf0lX2J1GTWKgHVlbfg3j+wuUqZ04fRItCXwuJ6VW4pTWuw7x2RbB25ZJesl/xDyFQIP88II8dGAcnkAETxls/pncx2/BuMMis58xCK9tXsuLvZiD5Y7uhRR6Pb2OyzQvY6dHTB8WJurlhjkqroV9UwtYTIB9U/vyE+jXUOuUuzLthQcQjv9SdPwEjwsqVjOa5/eom8xwrxQ/cobDSDaGQiZklZro7mYE4wXuhz0fG2qht3YAT3EpqBbmDlKwv3H7MwVOMqiF1H0HOjfs7xU8PzCvV3EcCN2af3rTVwdI5CDT7BBJNZzecirSTUGL50t1D6+Qy0ZIsptFdX/Vd0sAysbBBI4dH5OnJyThvvtwAGz7oaLBd665T5uAA794+cYzBDkotzQv/f59LoNzGZfFh8UpZQTWox4VXoH6w4BIJMj4tQfnVmZ9COS2HWlARYavXPz7XkshbJrjs/67Pi9tW2+MWywVyTmzM60O3X3n1BVOPlfBukydT03RWF+/XFMHMIHJSjUl6iO+TIACyf/tUZryBtvOq1xdd3S3/ipRNoxFLFnPd3aqFibUaVR6nGf+KuEEcGov3peIpyhstTjE96qJuVPYG4x9SYmovXjRfk/XqsgORK8JqSbMefLo8YgQ0fRcQEtcNcjnptJAHpGouxnGzi+itldOdTEvdNNDWQoPO3YlXck3z6IqkNTgcqwfYqTI9cGylHAp/7ugGYvHcv1xJe5NmCCO13KA26nPU+YGmdTM5MBj7xpMzevG6LL56g5yxE1jqSrVwUNHWvd1ysGFQR7GQ2ApXRi4ZotVBKKZs467IuVDlE73vPhEtZFGV78tWXwcRAl8gKMmHVxkGCcxazKZoDIMSdYAtTMg99tU0HZO+7gkiow9Bljf6TesUm+otbPhLx9g7lN4w3SB1dEH33c9gPE1NMmMLZT1VtmF1w6WhceUfVFO0EGrU6MP5O1BiXHDDvF+5r33lqxHMO8CvCz7LaDFknmfKEOonzJ4U3rEAGn1jbpGcJbPFr6a1qp0GmD7IqFE9apgMyCAw4EVVPF5iR9SoOblhcZiuLwmfk1bOIqG8G5Ku8WqUC3OtGr5jvmby3xVSNMSQ35OLKyneE1Mq49ly2QrnnpAmcZZDeYJg6aW1923NyEMdVulTaYooYI9JLEjpaHJ4/hluIOHKAeQYpZiOVNpsWE1ZtU/ovURtZAFiV8i2qE9RXa5Z39L1ayiCyweTKlgK04/U9oRzNqqv05+jKL5mvcDEa6/wlyH68u+qOsC2pJ6abcric+5XY3+UiYZHsN/7ugpwAzb+psIxtnRsBMa97P2xBt8XNyRtu115L7+H7BC3bqHzQTPq0Dki3jLjg7odUZHmuLkPkMyo+3P00J0xe/q3n8TN+lmF57qdF1JEEivLmyEi2Q5PE2/SNlwFg0Ax8EdWUSfD6ko5+XmwhaoGd6SWlRmJPMKxr1e31q6w3/iK8mPt/rutdUrTEGhm9JWRLDkAzmd8P8wuWAA9eWU1JomaTxxot4PZNnlUC7RALsku5STyCX/nHe2qgkfpQWDG9K9CbjAmWkt8r4YqxEpHsSvOzaKrRp9VUql6JavcLJpAX602GeZC/3jVvwUQU7xJCth77/RtteVwawS6QFcIIjgoiIV4yHcPcx6EqbumS/orlJr+ym0C+OGloYIX+rHD6VsaSNoTTWVzttr+4WADGbs8IL/6dGZowBB9JX+X3yTahgg22xBHln3D0HhR4QBV11X9JUt8X8IHsZCV/FEtNmoApUdHZ0xWT7jslNyOG/OcDDR2B+873XibKthRlGMeVSsatJ3k7raxTc8HlV07tovxIIogPN2ykLHIQ9oOKmqreSrVmODJVREg4ey3awzID+tACGg18O7UpbHpKI3khVJatZZN9AVe4Dwmh2eypc8Ngr5Q72aKAvuq6SI8vTvAcAxyBL+PLwkpTBjrcTL5Jmsz8j/J364+LdcZcu9UARz93Z/3fDcV9FyfK8HS4kGycxddaBhZGt47qKd04Yjk1zsfwaL0oerEMdnL2Y8klDr1ypwL5yOM8m02N8bb2Fx1QCVG8i7FAuyBNrBXkOjdzPCygpKpZvRIPdG/I8Pz1B4AEXfeaCm15QQuXoc6lzwNOYnodhyExskMzCL3laDnVmDrHVjgf6aSiGzm4hTp1Rsz0QWPrg5QE1fd/ykaS+BHOc9XOy7yVv9cBiZ3VUM0dHxYiEqfsVdo0z+9qXDU+z2C4WjMVfAdk4Zt38tOOtinjJb4UngwsWZaZZAoKM/lsfN1xaji3z8dvq2shGs7t7Pi7p5sWk8wr2mw5sEXs8274cObm/MieHaA6CQ3bs2xHcJX8xYAQNknXbhXoT0MPGnm1Wv1juVrwNMF+tiXhRTX0yRb0YmfQxl42ysU+tAIHKo/lOGHg7sV4dgdOfhFP2jjhuVtgdKMkrliVhfCF5dGf1YFbDhBkS4DFwE9c3UDBYQ8tBHjR/EBQKWxNP/pbmkvjp7o/7VyDIKsUN5CP0bAO1xdr2Uwty7+l0BSU39LIZgTpqsPu2N0Rf2fjv1f3dbMb0L0mYng4wSSl1Wnv9qf2KJH5EqvDsELX4ylK5cv2d5ROeuhA8F65Zoc1TPfDdfJIkmV9+sZGlsb+taAsKay/6XaCJGjYnMnjpwn7SzpB0OAh44vTIN8tDRJBdeuHB8mD5hXNYp+rSd8Aocr21s4BoTQBxz2bZL8FEd+owPw1KT3cSq+OLkf5BLfwhNhBPJIGItMBOSgoBRM36N8R46CC9s9Uu1DHBV7sF1dQg42mJ8xSCcM0zd14QgF7XGvMgAWjhwyqbTdIDElCPWiqks6PW+OH4Ju6RHfI4ZOStiHz54uTRC+6XYeT2WUAEq8R7doUC6atrSr6NiHvZxtz/sKQZdMNObvNGUjv7W3i1Lm6bKD4Pc1fv4eb2eNuOIBsb/SAy1FSKpDEPGfb0PlMKYhzQE9WUF+QaRmC8KDHhbHoQFr1Nwe2pGvgjmWePgX6814socYRPAcnuWD2IHI3aSOLk6QFxrkWUB248POGYitentjYH5t9W3ya5QdjHeXI+72mZ1DS/30RqD73ItBhdkO6/9u+hFfov1EDnkvr4WjgfAs+PNOUz0+NV5J3DNYCV5JB0PTB0BmNsx1J/nG+WJFligOcDcK94BDgcFzUmyv31zZWWZq2KRtEiA7SN9oRXNYROTbQYi9loMfA+XHxRRSlR1/zVpnmM4MINlhvwFP1JoM/PJvfu6UOepA6CFvWh08LwA2CZSQV91QP4JyFl81Ne7uZgjQFrIQsjNIlv057HZsTX4+lSwzDw6XUHWAhmbya22uLLgSqiPqQyYFZ40tpKBSdz/m+XjPVZXx8KxbX34O3CQfjDbMxMkBIeSGPqeKITqBbENbMOhaoV4BUDC4R/6x++SkeiTnDYKg7C0iv552lgQUF/6kmcFpsp90SY7TXbdbHuJteb6xAIxXiUJTHp4H5ek7PZncC7dJUVUTKfRSSVqBuMuX0bovdGY6vCEcKKPK9HLDywOVthDAR3HNOnifB9WEYxp8jDKupY3APpbmWWy2Q8NxQIo8Zi/uOXDTMbPQZWI777KbKo5M50qiILD54jB8kSFYC7+Mnm1X3WupJChmagRLBR11Fmizq14AAjxkNrVQeuGllBTdPPLIXFwYLucZLq7wWIjwDf8vrYa/dsHg5wu0ZaB/29EZ/+Anvo8nWIBikinBhDikFYIAZeHogeAkPHoVTE2+C8J7yXBFo//T5EOoU2HKiGvVF2CMP0ivvKxbrSH5Sq75nvV4rH8NOKVyuR+a2e5oyvljjhOCNsdMOA6KRGSi0zpdKFi8KVAgEFuJJoKssnO6pU8IG5FO/JHmEa5fXoHqCQ5Hp2j9VGvveb26GtW8H6zYlH2YXfJ1VylrZy5xVGUpXYRiGtAEOUbFFB6LpNVQUSaufFttq0VZpXVCEh7ZJHGcwmgHoU4qaRRck8B9wugEi5nXEiXebo8u8Py5W1y8P7+Mw4cCj18tUFST7no3lS9iMrp8zntwLWUwuY2per06VBuv38cBqAHWqr743+FayjhAp9EtQqWPQBFcHCuwhBj0MFwefAC49MmGJuFJZBg2gCvr010ueVE16zAUXaIo/7/Ix3KXH6wcJcsNvl92LWeNL2k9cSVUPSccqUsyI9XA1Fg/RCOj2W/LwN2ND3MtnNh3ohTQXSBAoGskItcW7XiJbkb6Unei8yuZLpjW2q2MjO6/XT6gkbU08mE0kX6wsce7vh8DyV2mN1jSiOCY1RgK8fXU1lQQp/0ZnBnr3RWHfBflGBJxG7wzTN+l84LSuUzkxWVVLM3gFCADHlFoyttyf4gQwGwyJ1HBLhV22HeKDh2T00C+vDAeaToOwhBq5y/nz30ZwkD31dwd7we+bBrNPHAA+Suh4hfagGxXFW0bgBzmB0njoERwxio/jTa6q27KADAhEeyoqJN5wUbAm441Nyl34JVarTYg4kNWyC3scZ1FRgbWC6k3bjJKL9upc5P7n9j448f2HfScc+3HXjMTtyacx1sN6rUeE5k9jJOte8suRtl4SQ3WBE8bHO81aWJoVuUlMxkBngBiD7QOSBwQpvaC4zvjV6WGyksD/mbaK/HBeyq1jJbQTdATKm6iWiGhPI1t4C7QZdKxTmNcaJsmy8nziii+efMsLoyL9S6OiFyfi2VCzOvUMddDUOpdlxS8w3wzlIfSihPwqNw9NFEVOtssMVkSrXnTqN9iZX5t4t/X17n0J5akS5oFHc0wBkTKmuVM03HBg6xfWFYqL5GIAsV4vY7EmqpH9A5L+q4pNhp1f6jvdFbf40TyuVZdKOn09KVDqn18yyUbnelF9mzQZdq+JOEaZ58HtHdFYPizdaW93Wu7mSTrnnU4n0v42fl7/bgKLaJpCdPFrAnWDTTMItmQIhqnLErC1vdm7ZpPZ9mZ/fR+ZkzmPWZDI6ZEMvuFyAX1061MG6SgktDi+nt27JBg0Gf8kq3bBdPMDQyvDZBrVMVabHp6DN3d/AD/tCOTYFwFA9vZldJH7k2627kt/lzy5+tf3WR4Z7s4ckXzWr4GHKK3O9h1i7ROr1MuZCs6Bk4TpBcxbJMbmrndj8HCPk3iv2DwvNz+JPIKFIiTiFWM8myLMQ0xHtrY7O9iDuF64Htcqqlg4jBWQG4vZwDlSfKT2C7va3zwOn929dKYtpMu3mJOZRdrkwlLusnPG02Ug/XSQXTts1MstdUxHhq5mX8QiGaF9dzkqoWIXnsIqLi9+nDsWFQurG/Qhy8H/2EWbph/Wiiil0ZWq0US7AzwcxlZnOyc5/Zhycw/0XX6hyshgzv67skSShDYfR/Tpq5wkOe6n8wCanRpqnk8B9F+8jn0wpTeTIPjHb4BMu7ckH66zxy7lgF4DSdufma0kmxWKhU0p1v5g9sionQvmxJk1Yuvmnf9eJ6o3Ac689jlJfukO/1diCm5+5AxNSMhwUD88p++WY28TYQqa31abpb6QKrtVBIy4yZ5z6E+Bnx2oxfZS0RsdUh2uZ0bqrGMiSqfykw/S3X5H1vu4xeRZbybyVfGo2jAt6yhzyRNxFOORPPEdeQrRZ/Trj02c7zQVyWxtJPHU9YUNZPkjoijOjSJUMDioEr3Vx9nwxE/k7cS/EOrKGE8xsxCbypCTX/eLucCAKfAJgAaleCW+a5rgHfUyrgjo4ctDStx1g31ZNX8BnQCP2FQK98M9Xf9P+QvvZkPoEZsjxd8UvfeiJCg0VuOpOOnKd0n1cuVxAnoctB2Dx67YVtlzbrxK4HP8zezbgsFoOP5RtOQBBID61/E803rsMNLwHQsjStlOiOxcTMtgXyD7yW0qK23Y0Qf0NJAayXcAfSP/V94Hh25EgSDJCHR/gDZ0XBWx4aFV5fo4O0d+md702hvjicU5SWk2GGezxLesAaLHSqJAeMG55LgoqsO1uoXDw88vvzBNSWLrRqifjQx7ZzP0GZxDShIK+nC6VQu1NjMUpYAYETm4LSaMZaJ2nvEA8jXohZ/9df4EK31jnynsSezV5tXDR6vJeBebh3ZlGXnvX1dXQV5+T7D3xj/W+cOud944k3tDbkenxa08ZKGvOvMO+kF1yXrO6ww5JP+MDn0TNFLymieqtd42X6ywRAz743k2EtrpKZ92ylOQsze9pMtC6HpF2jEb1ZG7n4gRko47B+X0ohpWxQ6lb5hODXpJOzD4nOirb+xnBVWnZqIJHsx2rTNXSc6hAYgdGR2hJvb6wvSG1QwwFRhXNuUVM+bPnFqbbehWrcElq8hKcxyh1BGiFUtq8tj0QbanYPyeExGVlNRcc0fDPwUhzcikggOa88GkjtGLGum+kQYq9UVg9BUdwJlrzlv69XNJbNqUSpWHSq0xd/rbLBMpGtnV7jJVz8RTJouwQ+BoghhReL6vJezlhnG5PfxIRUEV6+HUqY+l9ZLuQoLX9m+ZCXIapfNbsLVm9FkavTdHsZfwyqXJks1+HwBrK5cRFC8P8mkHnWQ8ZGr+iyAKW7DInT2zvbOJy0eQ0FHHmgQbk9no84b2PmqiIGdLUFfv9/n4sSGRSKUT93QgYsN7ZnWgVeCKD8wQFyRLotb/Krz7VgRIV0pq3tSRkyUftEEPsMALdLDL+o3xVQDSRaA3PwJUxS4VwYD+D6EFuKn9c6xce9JerFuVJaJJoFT25VlIaXl8Wp0aUjC7QF91H3WnDMPsTBwO5e+FeS838vwa2kUudNoPzNLisMF+PXAIJI3p2WG++2SchxIFComomckD6c68RY4E6Tdvn2V1VTbzfBCYO/2Z46Q860CGwa8mmspWOxPhXeHDSgHVNtlgl3KbN4TNLGSxWVteBPrJhPF1Z8HCwgO0B0odP8GlOzt5ve5EiyYJOOJ2TW7y2NH78NWjyTESRPefjdcA8m80/mDK9vTl348JlqVzs+cXOWpRTfAy19bJRggkN/5XxUnCqFEl3TJvWdSNx9rLaEEw2ULUipVzmQ2NcQSq+75TEpBDtMEi9Bp0m1pCBtLB30zxZ7E0MMAi5DCEg8G5T2QdohvkhcdIct5dxgC1DUSxBRGPvQm4J+AJ3T+/02t7oEON+dGCPigk18BJAM039CJ/0/lvttbLe6hyOL/bpuTIAW6W+6QNE7jSlGjduww4FZHCCm4pvgw16DoTsc1fB7Q45KTuoMI9AhZWCawVS4+SxwGB6KgyFas+GpebKlx7R3bN5FfbM/3fuxbGHyvpzWH8KMnW3F7URM0qaQG8bjiCun5Tir2Sm0zaLnbc7ZmB48YO3cDLZ8kTDD7vTsbuCVgYabWcTThfXz6121fQkHhc53xr/+Yuzza3iSJtEmi519Z2t4/JB1UREIk+xBVguaD1+Bz4OhOfH1r6r9+WjDmAghiy9D0nw5EC2VnyiTjBTrGa17UwUmiS699Cay/yKez7DKYi113HauJhSA6OST47jNli7FseP+mofSB9BZk8aTBf0BTWClCsAfbGs2qK58Ub+NI0cd7yA4BdZjqSp966EYl5RQT0v1t3w70eusAFzuY4aoffYQ4i8PLHfidIHO1nN6IVDt0nHrb84LpUBLuqS6RLfkWNdIkkFVR5TFCEBN2h/wGpmTd0+fJ4DKqrU+kJIK8fmvS5j1tLI/IrU/Y0jyj3Ik7zj4cewF0YUn+1Hdc+p6cI/zjw4xtd9lVuFsAqriZxdx4HhWEvljlc5z1W4m+NdA1r0SjuUDKy6UTW/GLBbr2Z5ehmrv58pPSFqiIYu/Trktglggc3n6kHs41Rich2SpbXd4EF/4aoL7gwjgPAiWo3pCxf8DHAjTzPLd74OvrBxE4sGj27zvdsJNin63FQAZGDdxcrwL3MX81snbyCZSiXjAJbr37nOpIDjgFuq6EGHeQq/noOUiNtM+8/DaWaR2X+WdnaqMZtqLLr2jIZOKlRHc/U6ml1+M/ljnmkGQKjw+6QIMW3kf3zHzfmo127x6aW8kquWHitTtg2Z//S52rXYzi+F8eGdJ+NOeVz6rn8P24WqkbicJIH5pgZlnClP7yFXm2kYj0BsY+1SzCrYHCt5a2ypov5Yi6x/pi4F0YtgC1m3g04cG8FY6GhUpx1ynxjb3+NOMMkzqfjcAkxdHIFRrMzFe+7qm4GfOGvL/iseia0Z8DktCq/ZKk/RrJ2BgsX7d5Vb5fgpzZj9aMQvc3YEaU5r3pCcZhiicM107Htfh4ToYVBBWZtQuhHPycEb4fOVyn1Asmfwq96FPOND42GA4QoV4aG86rlHuvLFYw7ZaRa9KhyENmgJuDCBL7KdcigeWOjiw5lCtiLhdOG6vP/kL29YMgbwBE/ueKlRC4CBqSpr+FojGJvrkR+1tcRv3dKBZaHb0+YszI/4pxMy7thabhWWgZjj7XLOrNlR6udtroqLsUd1oaA4a3MIiLxpSqzUNxfULCO9APh3JPxLrRyxbNa0TLq4RA1J2N9q7vLRvJL4HwLtzwEiV+HLhHGIYWVPi1HCNe9nNHn8TjL/gh9yDVCrZHHllr0i1LEU/y5aIiP7b626qwx/EGVUcyW+hhkx+y6+3x0+fTjkHylaTiGTc8YBcMyEPMBlK6CuN/XRKEJ/7zkx0ko6Bum4xGM8Ts9hmTnbmmMFB3Xk9YH2uaCxnkmsxbikKptDnEoZ6kEetop3kA5XqMwTfXwp9DsQW3w6G/9JHu00Kbt+27tg/MyAMGguF6jQtakR70YCVfKpm2J5Rye/04oFvYSLjEI2PszcJ21agjlLID5Brcr/J42R7yUOdbOSrLIC7tP/FNMSH9VjShZTidlhCBcx3R/JsAJMqnTaLayURqEfElMZD+PNuv0RdL71OgABKCXV42JKEbuyjyvTq39ByCVHuak4ZPoNZ70lYbQEbmXmOdpPm7lMeyX1gf2k+s+aTgsBVAOBNZp30qCtSYwiwDKm3AHvIhL4xVxJgu1CaVpADuxvOE04QsjhkjW+81SE+gNYYc9E8bDYhGoypXJATKnhD6NblRrqXDfAXXGrD1ewhGAJx0dZZWqLxJNJhMdYWhAtXBc4XWPFQ6SdEPWhHTRwpPl1vtCHCgYMjTBkm6aha3NsRzOOcE+MKz8eQFqsqI1kMsfZpC5ON4J/E0GK/J7KPlqPa7AILeUqs5LQOBOhvz5fWX2uG8BJZ2OyGS1CFaZAnUzKP4AppD86pN/yAwpzc2oRd8RU36Uj16zsF1niDpaYO09wfgLLZ3Yn6v83haYfD5Lya8Old+8C3CVYwiZ3H8l80zFF2YhQCtt+DgUpLOiejwC8RItVKbhPANxikBenfGxKKQ4D4fh9SlJpCNpNbTFU8lcmWbRxpy4ndes6R5bcNf8sVI60u3ERrvrGvrlDk6uxTVnmr0sBn8YxPV9cwavui89fCdvCIh1njcdWoCIPNiarLJl/EMq1UUSOkFefh2G/53wxvEVExAgwrAOtdCaNrDZp+qKvhU0KYESp9KW3UTH5MMBM/5/SkDY771UamHyk5lNiKNXwY4mEM5gazPfuLvaWL843Mved6O0+gORfZ1sZoZCw7iPsCBirNh86N2tprdTtw0DFKa6tLQce6zUuR/wlin56papKf4cP7M6MhDPNcCQNgZDSqS0yOwTwOShx8p5KcHB04VALykHSPBHfcfQBpz3phoZ5a2fCXCz/1OgxYwix3d/c+QMt3MQe2w9A2tydmrU7A/jg9nHIHNZ3RJMh6at/4FK1nLn4Q0ZPhYHT1y0EOx0XMOOurJkBdl96x+hziaLvsk/RhQcaIm6Wu/s1nJXsIRW6OMEnM1ZrOkydpo/PTil6HuqekLWPbvD5ex0pWJXaK7Hm+UB1XljxKO51r5kAqYKTljxYi8694F7eRb+60rtLDynJ2uhkd+RXOsIX3ZuVgPGrjDuH43OhnPe3s/GgjVuxEkaaJZG+oOTbAvTIC8SiUXy3fwbiVbXO6Wi/cQzO74ebA4YqAXhWdJkZdk1yWVMVEQLfyrbDXNcFSgU9iiRHKm/6T5YDKSyeWahHuBqMs+R8mY0YqONeQa2eQ+gzQyghSRIqUDzmeLKJPelWVZGIWos7clznk00l6WEuT/2hVhwxd4uXO0xZbA97dqeJp8jeOBEF7T2U7kwCl4S0BYogYzcR6FIj6BOOrDt3qMRekoKkJK2IeDvM3D3QPttTkiaoAKB/G5psyNj0jCOABWifv0IEhLfqQY5jmlcRERbGeYd+ByG8axwjFhW/DHrglNPD8ca/NMk6xz1ps6BHNlBaT1LCXJe4jqAN5iXU3eMBxhTzXmeDaVnpX/f+2jHFdhNeeLRvHlEmAqqqfQ/N8TWiT3xjxEfeSGF2V+sXnN35MvAjI4aiNnEQJSZV5TWii6u1gGqf5Wwb7+u3vkPr5E3FuZXR+1bHGX+Cb6qTim+TnZ5O2F9JH21V9FCJA2CiwRsOZOuiiIgev5vXOxG6A4lTrG6qcyB9fMx1eIK4RVVP/+mQan1Te3Qmnnk6RBxMyf+IAirQpiiyksnHl7p4G9Wk5P6X2wfGE2oJKkkxVvH8Ar56M/TgOjTBwlnKFE9CbmvGecQTCK/fTCPiuHGXwOg/QCVgRVG1jL+R270r5+Ou/fHD6xIS+1LYE33VbH3psbGYfyIa9PWz6zvXkZx3p+2gZk4SCbM6NoXTPgIoyHowp6XqiR+xnNwk/vn5LsuxfIFzW3WSvLMOkvQXBq90UzCq/mTZamyiwLneT3gCMBtMcD8mv7WkOxEhHfk+H5w7K6ytK2lXrpPttdQeBUwWiBwMk69xCTGVy1u3naDTRyAdEmv1bTFe0pbEz7d1SBcv4LHnvA7LWpjf8rd0CpvR3emAxbumW3DwUZcDiFGWTZcEOimdOUdhCimRJS5MU9Dg5CVz2BM1SByHjNs8WLiC6PWSjE02JkwunForyUL2ZropNaRkQHh3B8IspJ3Bw/bZ6soJqoOT49t8vAsQ/0xj0bqZaRzsC6OZDoOelEvfmwhOU4K3QhQLI96veYtgG72ktDT7IPu2IAA4bWmXpHDYQyLQ1P+kmMVff0GQqEQi4+pWRg2q1KPTYolQNv/tGRS0EzFF8db5EL4n6ub1RChYlLVcOljjiLqwaVqJ0kWfkxYACC6JH4zfDVYUNUTIebvZ6e2z23LG3Fj29rjITznERs8aosGK/ngoLBirJYfvwrlgjxws1MIm/7AN1eOWlgg/6ox9Z4BITiAmAaqZKXsCXp1kr5c0JafXNY3meaxN8LowY9SGcHLYBIsKHuTOSyRRAiLD2O7Mcdl06JPHPuE2HjQoZiA9HU5GjImFTfzf1oYYjM6MmdxCIIicNsmdLGGpjp9kN5F/CFTmtEg0okK4zTAXPcUyBJ7zr/WTAEE6pfBKPZcmLgRANYBb3fiAnkX3uPdHbOA5UrMuUCKBB9ty5EREluCwUoPyigmIKuxEBFC7s0A61r2K0V91mTiayDWpGn2Ljfl8ih7WoGgBiARDljXJELbMU0WPPGnYuEO2sp7kQNachTx9hTPuauNwNQAAE2QKMZHF/n5EyKlKdI2cicMfGyEQtYA7UsFU9P0o9h/0dwO//F7nt1x7GaFkFWdT7EAAeoEvYuJA+3uKI49EqO9TV5oxvyhEkir4wlol6f7Pkq7sM86AZ2EaAQXJ9rAXYahBPA2Qe0YGHZUJGtWNfAAA",
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
    poster: "",
    videoId: "7fCaVVWO8hU",
    synopsis: "La historia del teniente Amado García Guerrero, un militar dominicano que decidió enfrentarse a la dictadura de Rafael Leónidas Trujillo y terminó participando en el complot que llevó al ajusticiamiento del dictador."
},

{
    id: 102,
    title: "Un macho de mujer",
    year: 2006,
    category: "comedy",
    featured: false,
    poster: "",
    videoId: "pIzzyVaH58g",
    synopsis: "Ramón es un hombre acostumbrado a salir de fiesta y dejar las responsabilidades del hogar en manos de su esposa. Un extraño amuleto provoca un cambio inesperado de roles que lo obliga a experimentar la vida desde la perspectiva de ella."
}
    ];

window.peliculas = peliculas;
