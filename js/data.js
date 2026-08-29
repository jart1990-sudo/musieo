// Datos de la biblioteca musical.
// Cada artista: slug (id único en la URL), name, genres (array), bio (texto, puede tener <a> a wikipedia),
// wikipedia (url, opcional, solo referencia), songs: [{ id, title, year, youtubeId }]
//
// youtubeId es el código de 11 caracteres del video, por ejemplo en
// https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  youtubeId = "dQw4w9WgXcQ"

const ARTISTS = [
  {
    slug: "queen",
    name: "Queen",
    genres: ["Rock", "Glam rock"],
    wikipedia: "https://es.wikipedia.org/wiki/Queen",
    bio: "Queen es una banda británica de rock formada en Londres en 1970 por el vocalista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Es una de las bandas más exitosas e influyentes de la historia del rock.",
    songs: [
      { id: "bohemian-rhapsody", title: "Bohemian Rhapsody", year: 1975, youtubeId: "fJ9rUzIMcZQ" },
      { id: "we-will-rock-you", title: "We Will Rock You", year: 1977, youtubeId: "-tJYN-eG1zk" },
      { id: "dont-stop-me-now", title: "Don't Stop Me Now", year: 1978, youtubeId: "HgzGwKwLmgM" }
    ]
  },
  {
    slug: "abba",
    name: "ABBA",
    genres: ["Pop", "Disco"],
    wikipedia: "https://es.wikipedia.org/wiki/ABBA",
    bio: "ABBA fue un grupo musical sueco formado en Estocolmo en 1972, integrado por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson y Anni-Frid Lyngstad. Es uno de los grupos de pop más exitosos de todos los tiempos.",
    songs: [
      { id: "dancing-queen", title: "Dancing Queen", year: 1976, youtubeId: "xFrGuyw1V8s" },
      { id: "mamma-mia", title: "Mamma Mia", year: 1975, youtubeId: "WpnEHLR-mUY" }
    ]
  }
];
