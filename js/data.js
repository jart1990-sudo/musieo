// Datos de la biblioteca musical.
// Generado a partir de investigacion en Wikipedia y YouTube.
// Cada artista: slug (id unico en la URL), name, genres (array), bio (texto extraido de la intro de Wikipedia),
// wikipedia (url de referencia), songs: [{ id, title, year, youtubeId }]

const ARTISTS = [
  {
    "slug": "ac-dc",
    "name": "AC/DC",
    "genres": [
      "Hard rock",
      "Blues rock",
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/AC/DC",
    "bio": "AC/DC es una banda de rock australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young, Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes. Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden. Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young, quien asume el rol de guitarrista principal durante los conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de colegial callejero, se ha convertido en uno de los iconos de la banda.\n\nAl comienzo sufrieron diversos cambios en su alineación. En 1974 tras Dave Evans dejar el puesto de vocalista, es que la llegada del cantante Bon Scott se convertiría en una pieza clave del éxito del grupo. Su presencia en escena, lo convirtió en uno de los personajes más carismáticos de la historia del hard rock. La formación se estabilizaría con Cliff Williams (bajo) y Phil Rudd (baterista).\n\nLa carrera triunfal del grupo, sustentada por la rudeza carismática y la potencia rítmica del dominio guitarrero, proseguirá con el multimillonario Highway to Hell, uno de los discos más emblemáticos de la historia del hard rock y del que se vendieron millones de copias, que los catapultó hacia la fama y los solidificó al estatus de superestrellas.\n\nCuando se encontraban en su mejor momento, tanto a nivel comercial como artístico, la desgracia se cruzó en sus caminos, cuando el 19 de febrero de 1980, el vocalista Bon Scott falleció por intoxicación etílica. No obstante, pese a que se encontraron al borde de la separación, el grupo depositó su destino en la voz de Brian Johnson, exvocalista del grupo Geordie.\n\nBack in Black (1980), el disco homenaje al fallecimiento del mítico cantante original y el cual, a la postre, terminaría convertido en el tercer álbum más vendido en la historia de la música con más de 45 millones de unidades en el mundo, encajaría la figura de Johnson a la perfección en la imagen de AC/DC.\n\nCon cuatro décadas de trayectoria, la banda ha superado los cambios en la alineación, la pérdida de históricos miembros, la controversia sobre su imagen y letras, y el constante cambio de las tendencias musicales, para convertirse en la actualidad en una de las bandas más importantes e influyentes de la historia y con mayor capacidad de convocatoria. Hasta la fecha son una de las bandas más taquilleras de todos los tiempos. Desde marzo de 2003, el grupo está incluido en el Salón de la Fama del Rock and Roll. Aunque están comúnmente clasificados como hard rock, y considerados uno de los grandes influyentes del heavy metal, siempre han clasificado su música simplemente como rock and roll.",
    "songs": [
      {
        "id": "back-in-black",
        "title": "Back in Black",
        "year": 1980,
        "youtubeId": "pAgnJDJN4VA"
      },
      {
        "id": "highway-to-hell",
        "title": "Highway to Hell",
        "year": 1979,
        "youtubeId": "l482T0yNkeo"
      },
      {
        "id": "thunderstruck",
        "title": "Thunderstruck",
        "year": 1990,
        "youtubeId": "v2AC41dglnM"
      },
      {
        "id": "you-shook-me-all-night-long",
        "title": "You Shook Me All Night Long",
        "year": 1980,
        "youtubeId": "Lo2qQmj0_h4"
      },
      {
        "id": "tnt",
        "title": "T.N.T.",
        "year": 1975,
        "youtubeId": "rB9-McrpJew"
      },
      {
        "id": "hells-bells",
        "title": "Hells Bells",
        "year": 1980,
        "youtubeId": "etAIpkdhU9Q"
      },
      {
        "id": "whole-lotta-rosie",
        "title": "Whole Lotta Rosie",
        "year": 1977,
        "youtubeId": "NIdEumizSwI"
      },
      {
        "id": "dirty-deeds-done-dirt-cheap",
        "title": "Dirty Deeds Done Dirt Cheap",
        "year": 1976,
        "youtubeId": "jsjdjWGDvFk"
      },
      {
        "id": "rock-and-roll-aint-noise-pollution",
        "title": "Rock and Roll Ain't Noise Pollution",
        "year": 1980,
        "youtubeId": "X_IWlPHMziU"
      },
      {
        "id": "for-those-about-to-rock-we-salute-you",
        "title": "For Those About to Rock (We Salute You)",
        "year": 1981,
        "youtubeId": "8fPf6L0XNvM"
      },
      {
        "id": "let-there-be-rock",
        "title": "Let There Be Rock",
        "year": 1977,
        "youtubeId": "3f2g4RMfhS0"
      },
      {
        "id": "have-a-drink-on-me",
        "title": "Have a Drink on Me",
        "year": 1980,
        "youtubeId": "mKc_Ej8RiVs"
      },
      {
        "id": "money-talks",
        "title": "Money Talks",
        "year": 1990,
        "youtubeId": "2lqdErI9uss"
      },
      {
        "id": "if-you-want-blood-youve-got-it",
        "title": "If You Want Blood (You've Got It)",
        "year": 1978,
        "youtubeId": "6EWqTym2cQU"
      },
      {
        "id": "its-a-long-way-to-the-top",
        "title": "It's a Long Way to the Top (If You Wanna Rock 'N' Roll)",
        "year": 1975,
        "youtubeId": "GChhRrU6BJU"
      }
    ]
  },
  {
    "slug": "aerosmith",
    "name": "Aerosmith",
    "genres": [
      "Hard rock",
      "Blues rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Aerosmith",
    "bio": "Aerosmith es una banda estadounidense de rock formada en Boston en 1970. Está integrada por Steven Tyler (cantante), Joe Perry (guitarra), Tom Hamilton (bajo), Joey Kramer (batería) y Brad Whitford (guitarra). Conocidos también como «Los chicos malos de Boston» o «Toxic Twins» —apelativo por el que se conoce a sus dos líderes por su histórica adicción a las drogas—, su sonido, agresivamente rítmico, tiene raíces en el blues, y contribuyó a establecer el sonido del hard rock y pop rock entre los años 1981 y 1990.\n\nAunque Perry y Whitford regresaron en 1984 y la banda firmó un contrato de grabación con Geffen Records, no sería hasta el lanzamiento en 1987 del álbum Permanent Vacation en que la banda recuperaría el nivel de popularidad que había experimentado en la década de 1970. A lo largo de las décadas de los 80 y 90, la banda obtendría varios éxitos y ganaría numerosos premios musicales con los álbumes Pump (1989), Get a Grip (1993), y Nine Lives (1997). Su regreso fue descrito como uno de los momentos más importantes y espectaculares de la historia del rock and roll. Después de 46 años de dar conciertos, la banda tenía prevista una gira de despedida en 2017, pero dicha gira tuvo que ser pospuesta debido a que Steven Tyler tuvo problemas de salud. En 2024 anunciaron su retiro definitivo.\n\nAerosmith es una de las bandas con mayor número de ventas de todos los tiempos, también tienen el récord de ser el grupo estadounidense con mayor número de discos de oro y platino. La banda ha conseguido 21 entradas al Top 40 del Billboard Hot 100, nueve números uno en el Mainstream Rock Tracks, cuatro premios Grammy, y diez MTV Video Music Awards. Han sido incluidos en el Salón de la Fama del Rock en el 2001, y en 2005 fueron clasificados n.º 57 en la lista de los 100 mejores artistas de todos los tiempos de la revista Rolling Stone.",
    "songs": [
      {
        "id": "dream-on",
        "title": "Dream On",
        "year": 1973,
        "youtubeId": "iJDtukGW79Y"
      },
      {
        "id": "sweet-emotion",
        "title": "Sweet Emotion",
        "year": 1975,
        "youtubeId": "82cJgPXU-ik"
      },
      {
        "id": "walk-this-way",
        "title": "Walk This Way",
        "year": 1975,
        "youtubeId": "4c8O2n1Gfto"
      },
      {
        "id": "cryin",
        "title": "Cryin'",
        "year": 1993,
        "youtubeId": "qfNmyxV2Ncw"
      },
      {
        "id": "crazy",
        "title": "Crazy",
        "year": 1993,
        "youtubeId": "NMNgbISmF4I"
      },
      {
        "id": "i-dont-want-to-miss-a-thing",
        "title": "I Don't Want to Miss a Thing",
        "year": 1998,
        "youtubeId": "JkK8g6FMEXE"
      },
      {
        "id": "love-in-an-elevator",
        "title": "Love in an Elevator",
        "year": 1989,
        "youtubeId": "h3Yrhv33Zb8"
      },
      {
        "id": "janies-got-a-gun",
        "title": "Janie's Got a Gun",
        "year": 1989,
        "youtubeId": "RqQn2ADZE1A"
      },
      {
        "id": "livin-on-the-edge",
        "title": "Livin' on the Edge",
        "year": 1993,
        "youtubeId": "7nqcL0mjMjw"
      },
      {
        "id": "angel",
        "title": "Angel",
        "year": 1987,
        "youtubeId": "CBTOGVb_cQg"
      },
      {
        "id": "amazing",
        "title": "Amazing",
        "year": 1993,
        "youtubeId": "zSmOvYzSeaQ"
      },
      {
        "id": "rag-doll",
        "title": "Rag Doll",
        "year": 1987,
        "youtubeId": "mrEC8xGc3ZM"
      },
      {
        "id": "dude-looks-like-a-lady",
        "title": "Dude (Looks Like a Lady)",
        "year": 1987,
        "youtubeId": "nf0oXY4nDxE"
      },
      {
        "id": "back-in-the-saddle",
        "title": "Back in the Saddle",
        "year": 1976,
        "youtubeId": "lX8GG3dnsp8"
      },
      {
        "id": "jaded",
        "title": "Jaded",
        "year": 2001,
        "youtubeId": "qbexOeoH5hg"
      }
    ]
  },
  {
    "slug": "almafuerte",
    "name": "Almafuerte",
    "genres": [
      "Heavy metal",
      "Hard rock",
      "Folclore"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Almafuerte_(banda)",
    "bio": "Almafuerte fue una banda argentina de heavy metal y hard rock, fundada el 29 de enero de 1995 en San Justo, (provincia de Buenos Aires) por Ricardo Iorio tras la disolución de Hermética. Toma su nombre del escritor y poeta argentino Pedro Bonifacio Palacios, quien publicaba con el seudónimo \"Almafuerte\".\nA principios de 1995 Iorio decide establecerse como cantante fijo y bajista. Convoca al guitarrista Claudio Marciello y al baterista Claudio Cardaci. Pocos meses más tarde publican su álbum debut, Mundo guanaco y al año siguiente su sucesor, Del entorno, que marcó la salida de Cardaci de la banda. Es reemplazado por Rodolfo Márquez, un año más tarde es reemplazado por Walter Martínez, con quien la banda publica los álbumes Almafuerte en 1998 y A fondo blanco en 1999. Martínez abandona la banda y es reemplazado por Bin Valencia, baterista que integra la banda hasta el final del grupo. Luego de publicar en 2001 Piedra libre, publican Ultimando en 2003, en el cual Iorio renuncia al bajo para ser solamente el cantante, e ingresa a la banda el bajista Beto Ceriotti. En 2006 la banda publica uno de sus álbumes más exitosos, Toro y pampa. En 2012 publican su último álbum, Trillando la fina.\nAlmafuerte ha publicado 8 álbumes de estudio y ha dado gran cantidad de conciertos, por ejemplo, en el Estadio Obras Sanitarias, el Microestadio Malvinas Argentinas, y el Estadio Islas Malvinas, cancha de All Boys entre otros. Los álbumes de la banda han sabido gozar de prestigio y reconocimiento, principalmente en listas que ensalzan producciones musicales del género metal y más allá de este: Tanto A fondo blanco como el álbum homónimo de 1998 son parte del listado de discos destacados por la revista Rolling Stone al cumplirse cuarenta años del surgimiento del metal argentino, en los puestos 5 y 21 respectivamente. También el poeta y ensayista argentino Mariano Torrent ha reconocido una producción de la banda, en este caso el célebre Toro y pampa, en su lista de los mejores álbumes de la música en español.\nEn el año 2016 se anuncia que la banda no dará más conciertos hasta nuevo aviso, y en 2017 Iorio confirmó la separación del grupo.",
    "songs": [
      {
        "id": "se-vos",
        "title": "Sé Vos",
        "year": 1998,
        "youtubeId": "_0DQZLsUc8c"
      },
      {
        "id": "triunfo",
        "title": "Triunfo",
        "year": 1998,
        "youtubeId": "5z7nWOfS7IA"
      },
      {
        "id": "del-mas-alla",
        "title": "Del Más Allá",
        "year": 1998,
        "youtubeId": "HfuewE9iyCY"
      },
      {
        "id": "pal-recuerdo",
        "title": "Pa'l Recuerdo",
        "year": 1999,
        "youtubeId": "UnwkmCCLVGw"
      },
      {
        "id": "mamuil-mapu",
        "title": "Mamuil Mapu",
        "year": 1999,
        "youtubeId": "-EN9ACwnDl0"
      },
      {
        "id": "si-me-ves-volver",
        "title": "Si Me Ves Volver",
        "year": 1999,
        "youtubeId": "DMh23_sAHvs"
      },
      {
        "id": "mi-credo",
        "title": "Mi Credo",
        "year": 2000,
        "youtubeId": "2CcrRQRwq1s"
      },
      {
        "id": "el-pibe-tigre",
        "title": "El Pibe Tigre",
        "year": 1995,
        "youtubeId": "LbKvlgUZEPw"
      },
      {
        "id": "toro-y-pampa",
        "title": "Toro y Pampa",
        "year": 2001,
        "youtubeId": "oWPol4B7O8Y"
      },
      {
        "id": "a-vos-amigo",
        "title": "A Vos Amigo",
        "year": 2003,
        "youtubeId": "DPuMG6eiKBc"
      },
      {
        "id": "orgullo-argentino",
        "title": "Orgullo Argentino",
        "year": 2005,
        "youtubeId": "L3r3TpL_dZ4"
      },
      {
        "id": "patria-al-hombro",
        "title": "Patria al Hombro",
        "year": 2008,
        "youtubeId": "XyciQ_X-fMQ"
      }
    ]
  },
  {
    "slug": "almendra",
    "name": "Almendra",
    "genres": [
      "Rock psicodélico",
      "Folk rock",
      "Rock progresivo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Almendra_(banda)",
    "bio": "Almendra fue una banda de rock argentino formada en 1967 en el barrio porteño de Belgrano por Luis Alberto Spinetta (guitarra y voz), Edelmiro Molinari (guitarra y coros), Emilio del Guercio (bajo y coros) y Rodolfo García (batería). Junto a Manal y Los Gatos es considerado grupo fundacional del rock argentino. La banda se formó en 1967 y se separó en 1970. Entre 1979 y 1981 y en 2009 tuvieron dos reuniones.\n\nEn una encuesta de 1985 realizada por Carlos Polimeni para Clarín, en la que participaron músicos y periodistas, su primer álbum Almendra fue considerado por la gran mayoría como el mejor disco de la historia del rock argentino.\n\nMás recientemente, ha sido considerado por la revista Rolling Stone como el 6.º mejor del rock argentino, en tanto que su segundo álbum Almendra II fue colocado en la posición n.º 40. Su tema «Muchacha (Ojos de papel)» fue considerada la segunda mejor canción de todos los tiempos del rock argentino.",
    "songs": [
      {
        "id": "muchacha-ojos-de-papel",
        "title": "Muchacha (Ojos de Papel)",
        "year": 1969,
        "youtubeId": "33bSMJF-SfE"
      },
      {
        "id": "color-humano",
        "title": "Color Humano",
        "year": 1969,
        "youtubeId": "hg3dNrkVYaw"
      },
      {
        "id": "figuracion",
        "title": "Figuración",
        "year": 1969,
        "youtubeId": "d-3XuViJphQ"
      },
      {
        "id": "ana-no-duerme",
        "title": "Ana No Duerme",
        "year": 1969,
        "youtubeId": "Cg2EdtBguc4"
      },
      {
        "id": "fermin",
        "title": "Fermín",
        "year": 1969,
        "youtubeId": "uZEBOZ1_iIw"
      },
      {
        "id": "a-estos-hombres-tristes",
        "title": "A Estos Hombres Tristes",
        "year": 1969,
        "youtubeId": "mXyamTEFa6M"
      },
      {
        "id": "plegaria-para-un-nino-dormido",
        "title": "Plegaria para un Niño Dormido",
        "year": 1969,
        "youtubeId": "9LvFHvHzglo"
      },
      {
        "id": "que-el-viento-borro-tus-manos",
        "title": "Que el Viento Borró Tus Manos",
        "year": 1969,
        "youtubeId": "L4ZZMh8YROA"
      },
      {
        "id": "laura-va",
        "title": "Laura Va",
        "year": 1969,
        "youtubeId": "VnbM33MHdmc"
      },
      {
        "id": "toma-el-tren-hacia-el-sur",
        "title": "Toma el Tren Hacia el Sur",
        "year": 1970,
        "youtubeId": "GqV9TunWUUY"
      },
      {
        "id": "agnus-dei",
        "title": "Agnus Dei",
        "year": 1970,
        "youtubeId": "KRN74JpWOoQ"
      }
    ]
  },
  {
    "slug": "arbol",
    "name": "Árbol",
    "genres": [
      "Rock alternativo",
      "Pop punk",
      "Ska"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/%C3%81rbol_(banda)",
    "bio": "Árbol es una banda del Rock alternativo formada a finales de 1994 en Haedo (Morón); zona oeste del Gran Buenos Aires. Esta banda se caracteriza por sus letras coloridas y sencillas, por su particular juego de voces armoniosas y por mezclar variados ritmos e instrumentos, desde el rock, el punk, el hardcore o el rap, hasta el funk, el reggae, la música electrónica, el country o la chacarera.\n\nSus integrantes originales son Eduardo Schmidt (voz, violín, charango), Patricio Pizarro (bajo), Matías «Chávez» Méndez (batería), Pablo Romero (voz y guitarra) y Hernán Bruckner (guitarra, teclados y ocasionalmente voz). A fines de 2006, Eduardo Schmidt se retiró de la banda para iniciar posteriormente una carrera solista. Así, la banda quedó conformada por Sebastián Bianchini (bajo, batería y voz), Martín Millán (batería, xilófono, teclado y voz), Pablo Romero (voz y guitarra) y Hernán Bruckner (guitarra, teclados y voz). Con esta formación, editaron dos trabajos discográficos más. La banda estuvo en un «parate» entre finales de 2010 y mediados de 2017, cuando a través de sus redes sociales el grupo publicó el nuevo tema «Tiembla El Piso». A principios de 2018 publican su nuevo videoclip «La vida es todo lo que vos quieras», confirmando así su regreso.",
    "songs": [
      {
        "id": "trenes-camiones-y-tractores",
        "title": "Trenes, Camiones y Tractores",
        "year": 2004,
        "youtubeId": "QgXrA7A8swk"
      },
      {
        "id": "pequenos-suenos",
        "title": "Pequeños Sueños",
        "year": 2004,
        "youtubeId": "2r5yZu5uhio"
      },
      {
        "id": "el-fantasma",
        "title": "El Fantasma",
        "year": 2004,
        "youtubeId": "extN3AdocCc"
      },
      {
        "id": "cosacuosa",
        "title": "Cosacuosa",
        "year": 2002,
        "youtubeId": "dwbgmUnDHM4"
      },
      {
        "id": "enes",
        "title": "Enes",
        "year": 2002,
        "youtubeId": "YVYghQzflS4"
      },
      {
        "id": "cascara-mascara",
        "title": "Cascara Máscara",
        "year": 2002,
        "youtubeId": "KDHvZY1F6Qo"
      },
      {
        "id": "dale-vida",
        "title": "Dale Vida",
        "year": 2002,
        "youtubeId": "_7H9OPSFe4Q"
      },
      {
        "id": "vomitando-flores",
        "title": "Vomitando Flores",
        "year": 2002,
        "youtubeId": "zvUYSz80AIw"
      },
      {
        "id": "chapusongs",
        "title": "Chapusongs",
        "year": 2002,
        "youtubeId": "EqHl3uF0XLI"
      },
      {
        "id": "ya-lo-sabemos",
        "title": "Ya Lo Sabemos",
        "year": 2002,
        "youtubeId": "gFX-H8ODLb8"
      }
    ]
  },
  {
    "slug": "arctic-monkeys",
    "name": "Arctic Monkeys",
    "genres": [
      "Indie rock",
      "Garage rock revival",
      "Rock alternativo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Arctic_Monkeys",
    "bio": "Arctic Monkeys o AM (siglas que referencian tanto a las de la banda como a las de la amplitud modulada) es un cuarteto británico de indie rock, pop barroco, art rock y post-punk revival, formado en la ciudad inglesa de Sheffield, en 2002. Está integrado por el guitarrista principal y vocalista Alex Turner, el guitarrista Jamie Cook, el baterista Matt Helders y el bajista Nick O'Malley. El bajista original de la banda, Andy Nicholson, dejó el proyecto en 2006 poco después del lanzamiento del álbum debut de la banda.\n\nLos Arctic Monkeys fueron considerados como una de las primeras bandas en hacerse conocidas al público gracias a la difusión de sus canciones por Internet, por lo cual se los catalogó como «la banda que pudo haber cambiado el mercado de la música». Esto le valió para que su primer álbum de estudio, Whatever People Say I Am, That's What I'm Not (2006), se convierta en el disco debut británico más vendido en la historia, con más de 300 mil copias vendidas en su primera semana en el mercado. Ganó el premio al Mejor Álbum Británico en los Brit Awards 2007. El segundo álbum de la banda, Favourite Worst Nightmare (2007), contó casi con el mismo éxito, ganando también el premio al Mejor Álbum Británico en los Brit Awards 2008. Sus siguientes trabajos serían Humbug (2009), un proyecto más experimental, y Suck It and See (2011).\n\nLa fama mundial de la banda aumentaría gracias al lanzamiento de AM (2013), su quinto disco, y el que obtendría mayor éxito comercial. AM se convirtió en su segundo álbum en entrar en el Top 10 del Billboard en Estados Unidos, siendo también certificado platino en ese país. En los Brit Awards 2014 la banda consiguió por tercera vez el premio al Mejor Álbum Británico. Su sexto álbum, Tranquility Base Hotel & Casino (2018), se alejó de los sonidos tradicionales de la banda, enfocándose en sonidos basados principalmente en el piano e incorporando rock psicodélico, space age pop, lounge y glam rock, además de elementos de jazz. Con su séptimo álbum, The Car (2022), seguiría la línea experimental del anterior álbum con elementos del rock sinfónico, incorporando instrumentos de cuerda. Recibió una nominación a Mejor Álbum de Música Alternativa en los Premios Grammys 2019, su segunda en la categoría después de Whatever People Say I Am, That's What I Am Not.\n\nCon más de 20 millones de álbumes vendidos en todo el mundo, se han convertido en una de las bandas de rock indie más exitosas de la historia. Han sido el primer grupo independiente (sin ningún contrato con un sello discográfico) en alcanzar el número uno con el lanzamiento de cada uno de sus seis álbumes en el Reino Unido. Han ganado seis Brit Awards, tres por Mejor Banda Británica; un Mercury Prize por Whatever People Say I Am, That's What I Am Not; un Premio Ivor Novello, y 20 NME Awards. Además, consiguieron cinco nominaciones a los Premios Grammy. Tanto Whatever People Say I Am, That's What I Am Not como AM están incluidos en las listas de NME y Rolling Stone de los 500 mejores álbumes de todos los tiempos. A nivel de conciertos, la banda fue cabeza de tres festivales de Glastonbury, en 2007, 2013 y 2023. También participó en la ceremonia de apertura de los Juegos Olímpicos de Londres 2012.",
    "songs": [
      {
        "id": "i-wanna-be-yours",
        "title": "I Wanna Be Yours",
        "year": 2013,
        "youtubeId": "nyuo9-OjNNg"
      },
      {
        "id": "do-i-wanna-know",
        "title": "Do I Wanna Know?",
        "year": 2013,
        "youtubeId": "bpOSxM0rNPM"
      },
      {
        "id": "505",
        "title": "505",
        "year": 2007,
        "youtubeId": "iIfl5k2nQBQ"
      },
      {
        "id": "whyd-you-only-call-me-when-youre-high",
        "title": "Why'd You Only Call Me When You're High?",
        "year": 2013,
        "youtubeId": "6366dxFf-Os"
      },
      {
        "id": "r-u-mine",
        "title": "R U Mine?",
        "year": 2012,
        "youtubeId": "VQH8ZTgna3Q"
      },
      {
        "id": "fluorescent-adolescent",
        "title": "Fluorescent Adolescent",
        "year": 2007,
        "youtubeId": "ma9I9VBKPiw"
      },
      {
        "id": "when-the-sun-goes-down",
        "title": "When the Sun Goes Down",
        "year": 2006,
        "youtubeId": "EqkBRVukQmE"
      },
      {
        "id": "i-bet-you-look-good-on-the-dancefloor",
        "title": "I Bet You Look Good on the Dancefloor",
        "year": 2005,
        "youtubeId": "pK7egZaT3hs"
      },
      {
        "id": "arabella",
        "title": "Arabella",
        "year": 2013,
        "youtubeId": "Nj8r3qmOoZ8"
      },
      {
        "id": "snap-out-of-it",
        "title": "Snap Out of It",
        "year": 2014,
        "youtubeId": "H8tLS_NOWLs"
      },
      {
        "id": "knee-socks",
        "title": "Knee Socks",
        "year": 2014,
        "youtubeId": "lyO-Sveg6a8"
      },
      {
        "id": "no-1-party-anthem",
        "title": "No.1 Party Anthem",
        "year": 2013,
        "youtubeId": "mGUjVbsYG6E"
      },
      {
        "id": "mardy-bum",
        "title": "Mardy Bum",
        "year": 2006,
        "youtubeId": "dO368WjwyFs"
      },
      {
        "id": "cornerstone",
        "title": "Cornerstone",
        "year": 2009,
        "youtubeId": "LIQz6zZi7R0"
      },
      {
        "id": "four-out-of-five",
        "title": "Four Out of Five",
        "year": 2018,
        "youtubeId": "71Es-8FfATo"
      }
    ]
  },
  {
    "slug": "astor-piazzolla",
    "name": "Astor Piazzolla",
    "genres": [
      "Tango"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Ástor_Piazzolla",
    "bio": "Astor Pantaleón Piazzolla (Mar del Plata, 11 de marzo de 1921-Buenos Aires, 4 de julio de 1992) fue un bandoneonista, director de orquesta, arreglista y compositor argentino considerado uno de los músicos más importantes del siglo XX y uno de los mayores exponentes de tango en todo el mundo.\n\nDescendiente de italianos, cuando tenía tres años su familia se mudó a Nueva York, donde comenzó a tomar clases de música y bandoneón, interpretando piezas clásicas en el instrumento, aunque no tangos. En 1934 conoció a Carlos Gardel en Manhattan y realizó una pequeña aparición en la película El día que me quieras haciendo de canillita. Fue junto a Gardel cuando Piazzolla tocó su primer tango en un asado que reunió a varios argentinos que estaban en la metrópoli estadounidense. En 1937 volvió a Argentina decidido a tocar tangos y comenzó a trabajar de forma profesional tocando el bandoneón, y desde finales de 1939 haciendo arreglos para la orquesta de Aníbal Troilo, al mismo tiempo que tomaba clases de música con Alberto Ginastera. En 1944 abandonó la orquesta de Troilo para emprender su propia carrera. Sin estar completamente convencido de hacer tango o música clásica, en 1954 viajó a París para estudiar con Nadia Boulanger, quien terminó de convencerlo para que compusiera tangos. Durante su estadía en París grabó y editó su primer álbum de duración extendida, Sinfonía de tango, dando inicio a una extensa y fructífera carrera discográfica en la que editaría alrededor de cuarenta álbumes de estudio grabados entre Argentina, Europa (por lo general Italia y Francia) y Estados Unidos. Además grabó varios álbumes en colaboración con importantes músicos, como Summit con Gerry Mulligan y The New Tango con Gary Burton, entre otros.\n\nSus obras revolucionaron el tango tradicional, en un nuevo estilo denominado tango de vanguardia o nuevo tango, menos bailable y pensado para una escucha atenta. Entre las innovaciones que emprendió, su nuevo tango incluyó instrumentos pocos usuales para el género como percusión, guitarra eléctrica y vibráfono e integró elementos de la música académica y el jazz tales como el contrapunto, las fugas o improvisaciones jazzísticas. Si bien al comienzo de su carrera se asoció con cantores de tango como Francisco Fiorentino, posteriormente eliminaría a los cantores de sus agrupaciones para hacer música meramente instrumental, aunque compuso destacables obras líricas como el emblemático tango-vals \"Balada para un loco\" y su ópera ligera María de Buenos Aires, ambas en asociación con Horacio Ferrer. Estos cambios le acarrearon varias críticas por parte de los exponentes más ortodoxos del tango.\n\nBandoneonista virtuoso, lideró una gran variedad de conjuntos, desde la orquesta típica, sextetos, octetos, nonetos y el quinteto, cuya formación sería la más ampliamente usada durante su carrera, mientras que su celebrado octeto electrónico abrió las puertas a la fusión del tango y el rock. Compuso también música para cerca de 40 películas. Se estima que escribió cerca de tres mil obras.\n\nEn sus últimos años de vida fue reivindicado por intelectuales, jazzistas y músicos de rock de todo el mundo, al igual que por nuevos referentes del tango, y en el siglo XXI se lo considera como uno de los músicos más importantes de la historia de su país.",
    "songs": [
      {
        "id": "libertango",
        "title": "Libertango",
        "year": 1974,
        "youtubeId": "yvtpT1ARF1o"
      },
      {
        "id": "adios-nonino",
        "title": "Adiós Nonino",
        "year": 1969,
        "youtubeId": "iHuqt41IoW4"
      },
      {
        "id": "oblivion",
        "title": "Oblivion",
        "year": 1982,
        "youtubeId": "JFOxXMZfn9g"
      },
      {
        "id": "balada-para-un-loco",
        "title": "Balada para un Loco",
        "year": 1969,
        "youtubeId": "k7VbmmAtVxo"
      },
      {
        "id": "vuelvo-al-sur",
        "title": "Vuelvo al Sur",
        "year": 1988,
        "youtubeId": "z5SLbNid2E4"
      },
      {
        "id": "verano-porteno",
        "title": "Verano Porteño",
        "year": 1965,
        "youtubeId": "-XdjesQuEpQ"
      },
      {
        "id": "invierno-porteno",
        "title": "Invierno Porteño",
        "year": 1970,
        "youtubeId": "kIer-WM1JNQ"
      },
      {
        "id": "primavera-portena",
        "title": "Primavera Porteña",
        "year": 1970,
        "youtubeId": "O5o57xk-BsE"
      },
      {
        "id": "otono-porteno",
        "title": "Otoño Porteño",
        "year": 1969,
        "youtubeId": "o9intpxCVbk"
      },
      {
        "id": "escualo",
        "title": "Escualo",
        "year": 1979,
        "youtubeId": "Qt8UrbVzpQ0"
      },
      {
        "id": "fuga-y-misterio",
        "title": "Fuga y Misterio",
        "year": 1968,
        "youtubeId": "MNSxYy_KLSs"
      },
      {
        "id": "chiquilin-de-bachin",
        "title": "Chiquilín de Bachín",
        "year": 1969,
        "youtubeId": "kwgCYp5z--M"
      },
      {
        "id": "michelangelo-70",
        "title": "Michelangelo '70",
        "year": 1969,
        "youtubeId": "tfzcPJQ8DhQ"
      },
      {
        "id": "milonga-del-angel",
        "title": "Milonga del Ángel",
        "year": 1965,
        "youtubeId": "c7Fgh0b-2_g"
      }
    ]
  },
  {
    "slug": "attaque-77",
    "name": "Attaque 77",
    "genres": [
      "Punk rock",
      "Pop punk",
      "Hardcore punk"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Attaque_77",
    "bio": "Attaque 77, estilizado A77aque, fue una reconocida banda de punk rock formada en Buenos Aires, Argentina, en 1987. En su última formación, fue un trío integrado por Mariano Martínez, Luciano Scaglione y Leonardo De Cecco. Varios de sus álbumes obtuvieron certificaciones de oro y platino. Sus canciones «Ángeles caídos» y «Hacelo por mí» han sido consideradas la n.º 97 y n.º 19 respectivamente entre las cien mejores canciones del rock argentino según el sitio web Rock.com.ar.",
    "songs": [
      {
        "id": "arrancacorazones",
        "title": "Arrancacorazones",
        "year": 1993,
        "youtubeId": "V4qgpaO5PkQ"
      },
      {
        "id": "hacelo-por-mi",
        "title": "Hacelo por Mí",
        "year": 1990,
        "youtubeId": "BfWtPkUf8MM"
      },
      {
        "id": "no-me-arrepiento-de-este-amor",
        "title": "No Me Arrepiento de Este Amor",
        "year": 1994,
        "youtubeId": "qN3Y3Z5-3sw"
      },
      {
        "id": "beatle",
        "title": "Beatle",
        "year": 1993,
        "youtubeId": "nFY8qq1lZTk"
      },
      {
        "id": "chance",
        "title": "Chance",
        "year": 1996,
        "youtubeId": "xuxS8lfxD4E"
      },
      {
        "id": "porque-te-vas",
        "title": "Porque Te Vas...",
        "year": 1993,
        "youtubeId": "dFab2xLNaqE"
      },
      {
        "id": "western",
        "title": "Western",
        "year": 1996,
        "youtubeId": "F0GBY-9abLs"
      },
      {
        "id": "espadas-y-serpientes",
        "title": "Espadas y Serpientes",
        "year": 1990,
        "youtubeId": "S5rIRQSmaLY"
      },
      {
        "id": "el-cielo-puede-esperar",
        "title": "El Cielo Puede Esperar",
        "year": 1990,
        "youtubeId": "reQiQ_ocOd8"
      },
      {
        "id": "setentista",
        "title": "Setentista",
        "year": 2003,
        "youtubeId": "LqJE29gzw-U"
      },
      {
        "id": "donde-las-aguilas-se-atreven",
        "title": "Donde las Águilas se Atreven",
        "year": 1990,
        "youtubeId": "mKGgd1brmhQ"
      },
      {
        "id": "callejero",
        "title": "Callejero",
        "year": 1998,
        "youtubeId": "i-HCNNp1N6U"
      },
      {
        "id": "cartonero",
        "title": "Cartonero",
        "year": 2005,
        "youtubeId": "bKQXNCvP71A"
      }
    ]
  },
  {
    "slug": "babasonicos",
    "name": "Babasónicos",
    "genres": [
      "Rock alternativo",
      "Rock electrónico"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Babasónicos",
    "bio": "Babasónicos es una banda argentina de rock alternativo, formada en Lanús, Buenos Aires en 1991. Al principio fueron parte del «nuevo rock argentino», movimiento compuesto por bandas como Juana La Loca, El Otro Yo, Peligrosos Gorriones y Los Brujos. El nombre es un juego de palabras entre el gurú indio Sai Baba y una pistola de juguete llamada \"La Pistola Sónica\", aunque también prevalece el mito de que se debió a la serie televisiva animada \"Los supersónicos\".",
    "songs": [
      {
        "id": "irresponsables",
        "title": "Irresponsables",
        "year": 2001,
        "youtubeId": "gZV2Q9zH2eg"
      },
      {
        "id": "como-eran-las-cosas",
        "title": "Como Eran las Cosas",
        "year": 1997,
        "youtubeId": "zLz35sgPW68"
      },
      {
        "id": "el-loco",
        "title": "El Loco",
        "year": 2001,
        "youtubeId": "a2cKv33Gkks"
      },
      {
        "id": "putita",
        "title": "Putita",
        "year": 2001,
        "youtubeId": "7siu5MQ_8s0"
      },
      {
        "id": "el-colmo",
        "title": "El Colmo",
        "year": 2003,
        "youtubeId": "i9c-_i9yqgM"
      },
      {
        "id": "carismatico",
        "title": "Carismático",
        "year": 2008,
        "youtubeId": "Pmp08j843p0"
      },
      {
        "id": "pijamas",
        "title": "Pijamas",
        "year": 2008,
        "youtubeId": "v0N8kqu4ph0"
      },
      {
        "id": "yegua",
        "title": "Yegua",
        "year": 1997,
        "youtubeId": "7in_KDSUlzY"
      },
      {
        "id": "puesto",
        "title": "Puesto",
        "year": 2003,
        "youtubeId": "RI6KCHRy67c"
      },
      {
        "id": "risa",
        "title": "Risa",
        "year": 2010,
        "youtubeId": "YmKVjlfxvyU"
      },
      {
        "id": "vampi",
        "title": "Vampi",
        "year": 2005,
        "youtubeId": "2nCsqHI4CdM"
      },
      {
        "id": "los-calientes",
        "title": "Los Calientes",
        "year": 1999,
        "youtubeId": "4AVJ7Cxi7KA"
      },
      {
        "id": "en-privado",
        "title": "En Privado",
        "year": 2013,
        "youtubeId": "cZaTUUvg_ds"
      },
      {
        "id": "las-demas",
        "title": "Las Demás",
        "year": 2020,
        "youtubeId": "35WZhNZBFu8"
      },
      {
        "id": "y-que",
        "title": "Y Qué",
        "year": 2013,
        "youtubeId": "0i0VmuIhrQA"
      }
    ]
  },
  {
    "slug": "bob-marley-and-the-wailers",
    "name": "Bob Marley & The Wailers",
    "genres": [
      "Reggae",
      "Ska"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Bob_Marley_%26_The_Wailers",
    "bio": "Bob Marley & The Wailers fue una banda de reggae y ska creada por Bob Marley en 1974, después de que Peter Tosh y Bunny Wailer dejaran la anterior banda, The Wailers. Los hermanos Carlton (batería) y Aston \"Family Man\" Barrett (bajo) —quien había participado durante cuatro años en The Wailers y los apoyaron cuando estaban en The Upsetters— decidieron permanecer con Marley.\n\nLa banda estaba formada por Bob Marley como guitarrista, compositor y cantante, la Wailers Band como banda corista y los I Threes como coristas vocales. La Wailers Band incluía a los hermanos Carlton y Aston \"Family Man\" Barrett en la batería y el bajo respectivamente, Junior Marvin y Al Anderson como guitarristas principales, Tyrone Downie y Earl \"Wya\" Lindo en teclados, y Alvin \"Seeco\" Patterson en la percusión. Los I Threes eran Rita Marley, Judy Mowatt y Marcia Griffiths.\n\nPor lo general y con fines de marketing, las grabaciones se atribuye indistintamente a \"Bob Marley\", \"The Wailers\", o \"Bob Marley & The Wailers\".",
    "songs": [
      {
        "id": "could-you-be-loved",
        "title": "Could You Be Loved",
        "year": 1980,
        "youtubeId": "1ti2YCFgCoI"
      },
      {
        "id": "three-little-birds",
        "title": "Three Little Birds",
        "year": 1977,
        "youtubeId": "HNBCVM4KbUM"
      },
      {
        "id": "is-this-love",
        "title": "Is This Love",
        "year": 1978,
        "youtubeId": "69RdQFDuYPI"
      },
      {
        "id": "jamming",
        "title": "Jamming",
        "year": 1977,
        "youtubeId": "oqVy6eRXc7Q"
      },
      {
        "id": "one-love-people-get-ready",
        "title": "One Love / People Get Ready",
        "year": 1977,
        "youtubeId": "IN0KkGeEURw"
      },
      {
        "id": "buffalo-soldier",
        "title": "Buffalo Soldier",
        "year": 1983,
        "youtubeId": "uMUQMSXLlHM"
      },
      {
        "id": "redemption-song",
        "title": "Redemption Song",
        "year": 1980,
        "youtubeId": "yv5xonFSC4c"
      },
      {
        "id": "waiting-in-vain",
        "title": "Waiting in Vain",
        "year": 1977,
        "youtubeId": "Hk9-WRmZEfA"
      },
      {
        "id": "no-woman-no-cry",
        "title": "No Woman, No Cry",
        "year": 1975,
        "youtubeId": "IT8XvzIfi4U"
      },
      {
        "id": "natural-mystic",
        "title": "Natural Mystic",
        "year": 1977,
        "youtubeId": "Gj9holHsi90"
      },
      {
        "id": "exodus",
        "title": "Exodus",
        "year": 1977,
        "youtubeId": "ImQewFMzIzI"
      },
      {
        "id": "get-up-stand-up",
        "title": "Get Up, Stand Up",
        "year": 1973,
        "youtubeId": "IhQEBAl3Gpk"
      },
      {
        "id": "stir-it-up",
        "title": "Stir It Up",
        "year": 1973,
        "youtubeId": "1hwL3S3Gtzs"
      },
      {
        "id": "i-shot-the-sheriff",
        "title": "I Shot the Sheriff",
        "year": 1973,
        "youtubeId": "oe2hdbft5-U"
      },
      {
        "id": "war",
        "title": "War",
        "year": 1976,
        "youtubeId": "-JwL3lPBQ5E"
      }
    ]
  },
  {
    "slug": "bon-jovi",
    "name": "Bon Jovi",
    "genres": [
      "Rock",
      "Hard rock",
      "Glam metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Bon_Jovi",
    "bio": "Bon Jovi es una banda estadounidense de rock formada en 1983 en Nueva Jersey por su líder y vocalista, Jon Bon Jovi. La formación actual la completan el teclista David Bryan, el batería Tico Torres, el bajista Hugh McDonald, los guitarristas Phil X y John Shanks, y el percusionista Everett Bradley. El guitarrista Richie Sambora abandonó la formación en 2013 tras haber permanecido treinta años en ella. Es uno de los grupos de rock más exitosos de todos los tiempos, ha vendido más de 130 millones de discos y ofrecido más de 2800 conciertos en cincuenta países. Además está considerado como un icono global de la música y forma parte del Salón de la Fama del Rock and Roll.",
    "songs": [
      {
        "id": "livin-on-a-prayer",
        "title": "Livin' on a Prayer",
        "year": 1986,
        "youtubeId": "lDK9QqIzhwk"
      },
      {
        "id": "you-give-love-a-bad-name",
        "title": "You Give Love a Bad Name",
        "year": 1986,
        "youtubeId": "KrZHPOeOxQQ"
      },
      {
        "id": "its-my-life",
        "title": "It's My Life",
        "year": 2000,
        "youtubeId": "vx2u5uUu3DE"
      },
      {
        "id": "always",
        "title": "Always",
        "year": 1994,
        "youtubeId": "9BMwcO6_hyA"
      },
      {
        "id": "wanted-dead-or-alive",
        "title": "Wanted Dead or Alive",
        "year": 1986,
        "youtubeId": "SRvCvsRp5ho"
      },
      {
        "id": "bed-of-roses",
        "title": "Bed of Roses",
        "year": 1992,
        "youtubeId": "NvR60Wg9R7Q"
      },
      {
        "id": "runaway",
        "title": "Runaway",
        "year": 1984,
        "youtubeId": "s86K-p089R8"
      },
      {
        "id": "ill-be-there-for-you",
        "title": "I'll Be There for You",
        "year": 1988,
        "youtubeId": "Ue2nVLXev0k"
      },
      {
        "id": "bad-medicine",
        "title": "Bad Medicine",
        "year": 1988,
        "youtubeId": "eOUtsybozjg"
      },
      {
        "id": "never-say-goodbye",
        "title": "Never Say Goodbye",
        "year": 1986,
        "youtubeId": "ifm00JEjSeo"
      },
      {
        "id": "keep-the-faith",
        "title": "Keep the Faith",
        "year": 1992,
        "youtubeId": "eZQyVUTcpM4"
      },
      {
        "id": "in-these-arms",
        "title": "In These Arms",
        "year": 1992,
        "youtubeId": "NTfVLnXmdnY"
      },
      {
        "id": "have-a-nice-day",
        "title": "Have a Nice Day",
        "year": 2005,
        "youtubeId": "SW2WR7uAnN4"
      },
      {
        "id": "someday-ill-be-saturday-night",
        "title": "Someday I'll Be Saturday Night",
        "year": 1994,
        "youtubeId": "qFNZXaBcXkA"
      }
    ]
  },
  {
    "slug": "callejeros",
    "name": "Callejeros",
    "genres": [
      "Rock barrial",
      "Rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Callejeros_(banda)",
    "bio": "Callejeros fue un grupo musical de rock barrial argentino formado en Ciudad Celina, Buenos Aires, en el año 1995 y disuelto en 2010. Fue formada por el compositor Patricio Fontanet y el bajista Christian Torrejón. Es considerada por los medios como la banda más influyente y convocante en la historia del rock barrial.\n\nFormada a mediados de la década de los 90' bajo el nombre de Río Verde. La banda ha tenido varios éxitos que siguen presentes en la cultura del rock argentino y latinoamericano, por ejemplo: «9 de Julio», «Una nueva noche fría», «Rocanroles sin destino», «Imposible», «Creo», «Prohibido», entre otras. La formación original estuvo integrada por: Pato Fontanet, Dios Torrejón, Eduardo Vázquez, Gustavo Varela y Guillermo Le Voci. Más tarde a estos se le sumaron Maximiliano Djerfy, Juancho Carbone y Elio Delgado.\n\nEl 30 de diciembre de 2004, y en su momento de mayor popularidad, el grupo musical fue protagonista de la tragedia de Cromañón en la que fallecieron 194 personas, y que incidió radicalmente en la historia del grupo y también en la escena del rock de Argentina. En 2010, con ocho álbumes de estudio (entre demos y oficiales) el grupo anunció su disolución.",
    "songs": [
      {
        "id": "creo",
        "title": "Creo",
        "year": 2003,
        "youtubeId": "niEkeAcW4CI"
      },
      {
        "id": "9-de-julio",
        "title": "9 de Julio",
        "year": 2003,
        "youtubeId": "HMausbjmD6g"
      },
      {
        "id": "una-nueva-noche-fria",
        "title": "Una Nueva Noche Fría",
        "year": 2003,
        "youtubeId": "a6a2LhKQJ7Y"
      },
      {
        "id": "prohibido",
        "title": "Prohibido",
        "year": 2006,
        "youtubeId": "rDxL6AIcpeE"
      },
      {
        "id": "rocanroles-sin-destino",
        "title": "Rocanroles Sin Destino",
        "year": 2004,
        "youtubeId": "7v00aG_r5bY"
      },
      {
        "id": "imposible",
        "title": "Imposible",
        "year": 2006,
        "youtubeId": "EGZ7g-ieh8E"
      },
      {
        "id": "tan-perfecto-que-asusta",
        "title": "Tan Perfecto que Asusta",
        "year": 2004,
        "youtubeId": "gjv3bNNJVyQ"
      },
      {
        "id": "un-lugar-perfecto",
        "title": "Un Lugar Perfecto",
        "year": 2001,
        "youtubeId": "hd-TgenxFzM"
      },
      {
        "id": "jugando",
        "title": "Jugando",
        "year": 2001,
        "youtubeId": "pSJVP2-Nv4o"
      },
      {
        "id": "senales",
        "title": "Señales",
        "year": 2006,
        "youtubeId": "GGisNMvTijQ"
      },
      {
        "id": "los-invisibles",
        "title": "Los Invisibles",
        "year": 2001,
        "youtubeId": "GdMobnV_WSs"
      },
      {
        "id": "rompiendo-espejos",
        "title": "Rompiendo Espejos",
        "year": 2001,
        "youtubeId": "bPD6MG8-_to"
      },
      {
        "id": "el-nudo",
        "title": "El Nudo",
        "year": 2001,
        "youtubeId": "ZFvyeTbpdxg"
      },
      {
        "id": "vicioso-jugador-y-mujeriego",
        "title": "Vicioso, Jugador y Mujeriego",
        "year": 2001,
        "youtubeId": "mIYuYYd4_bo"
      },
      {
        "id": "palo-borracho",
        "title": "Palo Borracho",
        "year": 2001,
        "youtubeId": "Xto9P5TLlxQ"
      }
    ]
  },
  {
    "slug": "carlos-gardel",
    "name": "Carlos Gardel",
    "genres": [
      "Tango"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Carlos_Gardel",
    "bio": "Carlos Gardel fue un cantante, compositor y actor de cine nacionalizado argentino, fallecido en 1935. Es el más célebre representante del tango en la historia. Como iniciador y máximo exponente de la canción del género, fue uno de los intérpretes más importantes de la música popular a nivel mundial en la primera mitad del siglo XX, debido a la calidad de su voz, la cantidad de discos vendidos (tanto como cantante y compositor), sus numerosas películas relacionadas con el tango, y su repercusión mundial.\n\nNo existe unanimidad completa respecto de su lugar y fecha de nacimiento. La hipótesis uruguaya sostiene que nació en Tacuarembó (Uruguay) el 11 de diciembre entre 1883 y 1887. La hipótesis francesa sostiene que nació en Toulouse (Francia) el 11 de diciembre de 1890. Hay coincidencia en que vivió desde niño en Buenos Aires y se nacionalizó argentino en 1923. Falleció el 24 de junio de 1935 en Medellín, Colombia, en un accidente de aviación.\n\nGardel y su imagen han sido objeto de idolatría popular, especialmente en Argentina, Uruguay y Colombia, ocupando un lugar de mito y símbolo cultural que mantiene su vigencia. En 2003 la UNESCO registró la voz de Gardel en el programa Memoria del Mundo, dedicado a preservar documentos pertenecientes al patrimonio histórico de los pueblos del mundo. Al mismo tiempo, la referencia a su voz y su memoria invoca la frase: «cada día canta mejor».",
    "songs": [
      {
        "id": "mi-buenos-aires-querido",
        "title": "Mi Buenos Aires Querido",
        "year": 1934,
        "youtubeId": "iqONTxrkyJE"
      },
      {
        "id": "volver",
        "title": "Volver",
        "year": 1935,
        "youtubeId": "kY655kfTuEs"
      },
      {
        "id": "por-una-cabeza",
        "title": "Por Una Cabeza",
        "year": 1935,
        "youtubeId": "UcUekXtC2wY"
      },
      {
        "id": "el-dia-que-me-quieras",
        "title": "El Día Que Me Quieras",
        "year": 1935,
        "youtubeId": "ubvfktaFkJ8"
      },
      {
        "id": "cuesta-abajo",
        "title": "Cuesta Abajo",
        "year": 1934,
        "youtubeId": "hEG1cL5p_R4"
      },
      {
        "id": "melodia-de-arrabal",
        "title": "Melodía de Arrabal",
        "year": 1933,
        "youtubeId": "sMU2OunBM_M"
      },
      {
        "id": "caminito",
        "title": "Caminito",
        "year": 1926,
        "youtubeId": "aOaLH2TVMUY"
      },
      {
        "id": "mano-a-mano",
        "title": "Mano a Mano",
        "year": 1923,
        "youtubeId": "bEjOKZfcKiM"
      },
      {
        "id": "la-cumparsita",
        "title": "La Cumparsita",
        "year": 1924,
        "youtubeId": "WMGC_z-uL0I"
      },
      {
        "id": "yira-yira",
        "title": "Yira Yira",
        "year": 1930,
        "youtubeId": "2bKDIuGJKPQ"
      },
      {
        "id": "adios-muchachos",
        "title": "Adiós Muchachos",
        "year": 1927,
        "youtubeId": "GCjMNq5D0Kg"
      },
      {
        "id": "sus-ojos-se-cerraron",
        "title": "Sus Ojos Se Cerraron",
        "year": 1935,
        "youtubeId": "a8COHj2KRJc"
      },
      {
        "id": "silencio",
        "title": "Silencio",
        "year": 1932,
        "youtubeId": "cV_jU-jcyJM"
      },
      {
        "id": "tomo-y-obligo",
        "title": "Tomo y Obligo",
        "year": 1931,
        "youtubeId": "E7T9lvXPpqQ"
      },
      {
        "id": "madreselva",
        "title": "Madreselva",
        "year": 1931,
        "youtubeId": "XumN1IzaFbI"
      }
    ]
  },
  {
    "slug": "catupecu-machu",
    "name": "Catupecu Machu",
    "genres": [
      "Rock alternativo",
      "Funk rock",
      "Hard rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Catupecu_Machu",
    "bio": "Catupecu Machu es un grupo musical de rock alternativo argentino, formado en 1994 en Villa Luro, Ciudad de Buenos Aires. La banda fue fundada por los hermanos Fernando Ruiz Díaz y Gabriel Ruiz Díaz y contó con diferentes formaciones a lo largo de su trayectoria, siendo el primero, cantante y compositor principal del grupo, su único miembro permanente. Actualmente el grupo está compuesto por Fernando, Carlos \"Charles\" Noguera y Nicolás \"Vikingo\" Meardi.\n\nSu música se enmarca dentro del rock, el pop y la innovación sonora, dentro de un formato de canción. Catupecu Machu ha sido premiado como una de los más destacados grupos musicales del rock de Argentina y del rock de Latinoamérica del siglo XXI.\n\nEntre sus reconocimientos, la revista Rolling Stone Argentina y el canal MTV incluyeron su canción «Y lo que quiero es que pises sin el suelo» en la lista de las 100 mejores canciones del rock argentino, mientras que el sitio Rock.com.ar destacó «Magia veneno». Su álbum El número imperfecto figuró entre los 100 mejores álbumes del rock argentino según Rolling Stone Argentina, y en 2015 la banda recibió el Diploma al Mérito en los Premios Konex por su trayectoria. En 2017 Catupecu abandonó temporalmente los escenarios hasta su regreso en 2022.",
    "songs": [
      {
        "id": "dale",
        "title": "Dale!",
        "year": 1997,
        "youtubeId": "aPkweKCzRZg"
      },
      {
        "id": "y-lo-que-quiero-es-que-pises-sin-el-suelo",
        "title": "Y Lo Que Quiero Es Que Pises Sin El Suelo",
        "year": 2000,
        "youtubeId": "Zt2UhN6PvzQ"
      },
      {
        "id": "perfectos-cromosomas",
        "title": "Perfectos Cromosomas",
        "year": 2000,
        "youtubeId": "jppm5MJkqAs"
      },
      {
        "id": "entero-o-a-pedazos",
        "title": "Entero o a Pedazos",
        "year": 2000,
        "youtubeId": "7NGr42TzSzs"
      },
      {
        "id": "eso-vive",
        "title": "Eso Vive",
        "year": 2000,
        "youtubeId": "aygTLrJn_xM"
      },
      {
        "id": "secretos-pasadizos",
        "title": "Secretos Pasadizos",
        "year": 2000,
        "youtubeId": "ecos9FDCkp4"
      },
      {
        "id": "cuadros-dentro-de-cuadros",
        "title": "Cuadros Dentro de Cuadros",
        "year": 2002,
        "youtubeId": "VkUquBAQemI"
      },
      {
        "id": "origen-extremo",
        "title": "Origen Extremo",
        "year": 2002,
        "youtubeId": "pgzOJvphZLk"
      },
      {
        "id": "magia-veneno",
        "title": "Magia Veneno",
        "year": 2004,
        "youtubeId": "98bByBJa_0U"
      },
      {
        "id": "a-veces-vuelvo",
        "title": "A Veces Vuelvo",
        "year": 2004,
        "youtubeId": "oIGhYj_A7U8"
      },
      {
        "id": "el-numero-imperfecto",
        "title": "El Número Imperfecto",
        "year": 2004,
        "youtubeId": "KE-NJloMCxw"
      },
      {
        "id": "viaje-del-miedo",
        "title": "Viaje del Miedo",
        "year": 2007,
        "youtubeId": "BLgsGDUZD5E"
      },
      {
        "id": "en-los-suenos",
        "title": "En los Sueños",
        "year": 2007,
        "youtubeId": "R3BFM9tXirQ"
      },
      {
        "id": "hechizo",
        "title": "Hechizo",
        "year": 2009,
        "youtubeId": "nSJy7uPNBe0"
      },
      {
        "id": "la-piel-del-camino",
        "title": "La Piel del Camino",
        "year": 2016,
        "youtubeId": "TbbuEr6MhaM"
      }
    ]
  },
  {
    "slug": "chaqueno-palavecino",
    "name": "Chaqueño Palavecino",
    "genres": [
      "Folclore",
      "Chacarera"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Chaqueño_Palavecino",
    "bio": "Oscar Esperanza Palavecino (Rancho El Ñato, Provincia de Salta, Argentina; 18 de diciembre de 1959) más conocido como Chaqueño Palavecino es un cantante argentino de música folclórica.\n\nCon una larga trayectoria musical, iniciada en el año 1984, es reconocido por las composiciones de éxitos como \"La ley y la trampa\", Abrazando al caudillo, sus conciertos en vivo como Buenos Aires 2005. En 2008, fue reconocido por los Premios Grammy Latinos por su destacada actuación en la música folklorica de Argentina, y también premiado en distintas ediciones de los Premios Gardel a lo largo de más de 20 años.",
    "songs": [
      {
        "id": "por-culpa-de-ser-cantor",
        "title": "Por Culpa De Ser Cantor",
        "year": 1993,
        "youtubeId": "moH25-Aa72s"
      },
      {
        "id": "silencio-de-aloja",
        "title": "Silencio de Aloja",
        "year": 1998,
        "youtubeId": "jGoXVuV9-mI"
      },
      {
        "id": "vidala-para-mi-sombra",
        "title": "Vidala Para Mi Sombra",
        "year": 1998,
        "youtubeId": "-0CDlGCQr2k"
      },
      {
        "id": "amor-salvaje",
        "title": "Amor Salvaje",
        "year": 1998,
        "youtubeId": "9yobHzp2xRI"
      },
      {
        "id": "dejando-huellas",
        "title": "Dejando Huellas",
        "year": 2000,
        "youtubeId": "4CO2wPFVB-c"
      },
      {
        "id": "que-me-olvides-tu",
        "title": "Que Me Olvides Tú",
        "year": 2005,
        "youtubeId": "v-f7DO4Kphw"
      },
      {
        "id": "copla-mi-voz",
        "title": "Copla Mi Voz",
        "year": 2005,
        "youtubeId": "DDvUV_LPsO4"
      },
      {
        "id": "el-teorema",
        "title": "El Teorema",
        "year": 2005,
        "youtubeId": "UX7TXt5EbKk"
      },
      {
        "id": "mataco-diaz",
        "title": "Mataco Díaz",
        "year": 2005,
        "youtubeId": "hEb6nesRmbA"
      },
      {
        "id": "noche-calurosa",
        "title": "Noche Calurosa",
        "year": 2005,
        "youtubeId": "t6LbNUvbe3c"
      },
      {
        "id": "a-don-amancio",
        "title": "A Don Amancio",
        "year": 2014,
        "youtubeId": "_6P7Qh7PToo"
      },
      {
        "id": "dulcemente-me-recuerdas",
        "title": "Dulcemente Me Recuerdas",
        "year": 2014,
        "youtubeId": "NysZjYT5N0I"
      },
      {
        "id": "tu-piel-mi-piel",
        "title": "Tu Piel Mi Piel",
        "year": 2015,
        "youtubeId": "w4o1yQWCfg8"
      },
      {
        "id": "juan-de-la-calle",
        "title": "Juan de la Calle",
        "year": 2015,
        "youtubeId": "9sE8O5KsB4o"
      },
      {
        "id": "salteno-viejo",
        "title": "Salteño Viejo",
        "year": 2013,
        "youtubeId": "TAFwdvPM9s4"
      }
    ]
  },
  {
    "slug": "charly-garcia",
    "name": "Charly García",
    "genres": [
      "Rock",
      "Pop"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Charly_García",
    "bio": "Carlos Alberto García Moreno (Buenos Aires, 23 de octubre de 1951), más conocido por su nombre artístico Charly García, es un músico, cantautor, multinstrumentista, compositor y productor discográfico argentino, considerado una de las figuras más importantes de la música popular argentina, latinoamericana y del rock en español. Nombrado frecuentemente el «padre del rock argentino» junto a Luis Alberto Spinetta, García es aclamado por su extensa obra discográfica, tanto en sus múltiples agrupaciones como en su carrera solista, por la complejidad compositiva de su música —que abarca géneros como el folk rock, el rock progresivo, el rock sinfónico, el avant garde, la new wave, el pop rock, el pop barroco y el synth pop—, por su lírica transgresora y crítica hacia la sociedad moderna argentina, en especial durante la dictadura cívico-militar (1976-1983), y por su personalidad rebelde y extravagante.\n\nSiendo adolescente, García fundó la banda Sui Generis junto a su compañero de clase Nito Mestre a fines de los años sesenta. Publicaron tres álbumes de éxito comercial y crítico, separándose en 1975 con un concierto en el Luna Park. Tras la despedida, formó parte de los supergrupos PorSuiGieco y La Máquina de Hacer Pájaros, con el que intentó instaurar el rock progresivo en la escena musical latinoamericana. Regresó a la Argentina en 1978 para presentar Serú Girán, que se convertiría en una de las bandas más importantes de la historia argentina por su calidad musical y letrística, disolviéndose en 1982. Luego de componer la banda sonora de la película Pubis angelical (1982) y su disco debut como solista, Yendo de la cama al living (1982), García inició una prolífica carrera solista.\n\nSu exitosa trilogía se completó con los discos de new wave Clics modernos (1983) y Piano Bar (1984), catalogados entre los mejores álbumes de la historia del rock argentino. Trabajó luego en los proyectos Tango (1986) y Tango 4 (1991) junto a Pedro Aznar, y publicó una segunda trilogía con Parte de la religión (1987), Cómo conseguir chicas (1989) y Filosofía barata y zapatos de goma (1990). En 1992 reunió brevemente a Serú Girán, y hacia fines de los noventa entró en su etapa Say No More. Tras un largo hiato para rehabilitarse de sus adicciones, regresó con el álbum en vivo El concierto subacuático (2010) y publicaciones posteriores como Kill Gil (2010), Random (2017) y La lógica del escorpión (2024). Canciones como «Los dinosaurios», «Demoliendo hoteles», «Seminare» y «No llores por mí, Argentina» figuran entre las mejores del rock argentino. Recibió, entre otros reconocimientos, el Premio Konex de Platino, tres Premios Gardel de Oro y el premio Grammy a la Excelencia Musical en 2009.",
    "songs": [
      {
        "id": "inconsciente-colectivo",
        "title": "Inconsciente Colectivo",
        "year": 1982,
        "youtubeId": "SNZ6Qd58ixI"
      },
      {
        "id": "yendo-de-la-cama-al-living",
        "title": "Yendo de la Cama al Living",
        "year": 1982,
        "youtubeId": "afkanMBv-_o"
      },
      {
        "id": "no-bombardeen-buenos-aires",
        "title": "No Bombardeen Buenos Aires",
        "year": 1982,
        "youtubeId": "GGveBoRkb1E"
      },
      {
        "id": "superheroes",
        "title": "Superhéroes",
        "year": 1982,
        "youtubeId": "KIbIRMtmJag"
      },
      {
        "id": "los-dinosaurios",
        "title": "Los Dinosaurios",
        "year": 1983,
        "youtubeId": "BAuqozi64WQ"
      },
      {
        "id": "nos-siguen-pegando-abajo",
        "title": "Nos Siguen Pegando Abajo",
        "year": 1983,
        "youtubeId": "jzO8x1pnbCk"
      },
      {
        "id": "no-soy-un-extrano",
        "title": "No Soy un Extraño",
        "year": 1983,
        "youtubeId": "81FUY_H9vzU"
      },
      {
        "id": "bancate-ese-defecto",
        "title": "Bancate Ese Defecto",
        "year": 1983,
        "youtubeId": "RDDDfFvBhb8"
      },
      {
        "id": "promesas-sobre-el-bidet",
        "title": "Promesas Sobre el Bidet",
        "year": 1984,
        "youtubeId": "WXIfT-dQtCo"
      },
      {
        "id": "demoliendo-hoteles",
        "title": "Demoliendo Hoteles",
        "year": 1984,
        "youtubeId": "DeMCz0O7-FM"
      },
      {
        "id": "cerca-de-la-revolucion",
        "title": "Cerca de la Revolución",
        "year": 1984,
        "youtubeId": "0o2WK0Q_ooQ"
      },
      {
        "id": "buscando-un-simbolo-de-paz",
        "title": "Buscando un Símbolo de Paz",
        "year": 1987,
        "youtubeId": "KozOyrNPMrk"
      },
      {
        "id": "rezo-por-vos",
        "title": "Rezo por Vos",
        "year": 1987,
        "youtubeId": "iTA75Z6E4eA"
      },
      {
        "id": "no-me-veras-en-el-subte",
        "title": "No Me Verás en el Subte",
        "year": 1989,
        "youtubeId": "ZqMmernhZnA"
      },
      {
        "id": "filosofia-barata-y-zapatos-de-goma",
        "title": "Filosofía Barata y Zapatos de Goma",
        "year": 1990,
        "youtubeId": "4qRDXfrpVIU"
      }
    ]
  },
  {
    "slug": "daft-punk",
    "name": "Daft Punk",
    "genres": [],
    "wikipedia": "https://es.wikipedia.org/wiki/Daft_Punk",
    "bio": "Daft Punk fue un dúo francés de música electrónica y rock electrónico formado en 1993 en París por Thomas Bangalter y Guy-Manuel de Homem-Christo. Alcanzaron popularidad a fines de la década de 1990 como parte del movimiento house francés, combinando elementos de la música house con funk, disco, rock y pop. Obtuvieron elogios y éxito comercial y son considerados como uno de los actos más influyentes en la música dance así como de la música pop de los años 2010.\n\nBangalter y Homem-Christo formaron Daft Punk después de que su banda de indie rock Darlin' se disolviera y comenzaran a experimentar con cajas de ritmos y sintetizadores. Su álbum de estudio debut, Homework, fue lanzado por Virgin Records en 1997 con críticas positivas, respaldado por los sencillos «Around the World» y «Da Funk». A partir de 1999, Daft Punk asumió personajes de robots para apariciones públicas, con cascos, atuendos y guantes para disfrazar sus identidades; hicieron pocas apariciones en los medios. Fueron administrados desde 1996 hasta 2008 por Pedro Winter, director de Ed Banger Records.\n\nEl segundo álbum de Daft Punk, Discovery (2001), tuvo más éxito, con los exitosos sencillos «One More Time», «Digital Love» y «Harder, Better, Faster, Stronger». Se convirtió en la base de una película animada, Interstella 5555, supervisada por el artista japonés Leiji Matsumoto. El tercer álbum, Human After All (2005), recibió críticas mixtas, aunque los sencillos «Robot Rock» y «Technologic» alcanzaron el éxito en el Reino Unido. Daft Punk dirigió una película de ciencia ficción de vanguardia, Electroma, estrenada en 2006. Estuvieron de gira durante 2006 y 2007 y lanzaron el álbum en vivo Alive 2007, que ganó un premio Grammy al Mejor Álbum de Electrónica/Dance; a la gira se le atribuye la popularización de la música dance en América del Norte. Daft Punk compuso la banda sonora de la película Tron: Legacy de 2010.\n\nEn 2013, Daft Punk dejó Virgin por Columbia Records y lanzó su cuarto y último álbum, Random Access Memories, con gran éxito; el sencillo principal, «Get Lucky», alcanzó el top 10 en las listas de 27 países. Random Access Memories ganó cinco premios Grammy en 2014, incluidos Álbum del año y Grabación del año por «Get Lucky». En 2016, Daft Punk obtuvo su único número uno en el Billboard Hot 100 con «Starboy», una colaboración con The Weeknd. En 2015, Rolling Stone los clasificó como el duodécimo mejor dúo musical de todos los tiempos. Anunciaron su separación en el 2021.",
    "songs": [
      {
        "id": "da-funk",
        "title": "Da Funk",
        "year": 1995,
        "youtubeId": "mmi60Bd4jSs"
      },
      {
        "id": "around-the-world",
        "title": "Around the World",
        "year": 1997,
        "youtubeId": "T0lxekHV0qU"
      },
      {
        "id": "one-more-time",
        "title": "One More Time",
        "year": 2000,
        "youtubeId": "FGBhQbmPwH8"
      },
      {
        "id": "digital-love",
        "title": "Digital Love",
        "year": 2001,
        "youtubeId": "FxzBvqY5PP0"
      },
      {
        "id": "harder-better-faster-stronger",
        "title": "Harder, Better, Faster, Stronger",
        "year": 2001,
        "youtubeId": "gAjR4_CbPpQ"
      },
      {
        "id": "voyager",
        "title": "Voyager",
        "year": 2001,
        "youtubeId": "CqZgd6-xQl8"
      },
      {
        "id": "something-about-us",
        "title": "Something About Us",
        "year": 2001,
        "youtubeId": "sOS9aOIXPEk"
      },
      {
        "id": "robot-rock",
        "title": "Robot Rock",
        "year": 2005,
        "youtubeId": "sFZjqVnWBhc"
      },
      {
        "id": "technologic",
        "title": "Technologic",
        "year": 2005,
        "youtubeId": "D8K90hX4PrE"
      },
      {
        "id": "get-lucky",
        "title": "Get Lucky",
        "year": 2013,
        "youtubeId": "FoB9OiTJw40"
      },
      {
        "id": "lose-yourself-to-dance",
        "title": "Lose Yourself to Dance",
        "year": 2013,
        "youtubeId": "NF-kLy44Hls"
      },
      {
        "id": "instant-crush",
        "title": "Instant Crush",
        "year": 2013,
        "youtubeId": "a5uQMwRMHcs"
      }
    ]
  },
  {
    "slug": "david-bowie",
    "name": "David Bowie",
    "genres": [
      "Rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/David_Bowie",
    "bio": "David Robert Jones (Londres, 8 de enero de 1947-Nueva York, 10 de enero de 2016), más conocido por su nombre artístico David Bowie, fue un cantante, letrista, actor, multiinstrumentista, productor y diseñador británico. Figura importante de la música popular durante casi cinco décadas, Bowie es considerado un innovador, en particular por sus trabajos de la década de 1970 y por su peculiar voz, además de la profundidad intelectual de su obra.\n\nNacido en Brixton, en el sur de Londres, Bowie mostró gran interés por la música en su niñez, estudiando arte, música y diseño antes de embarcarse en su carrera profesional como músico en 1963. A pesar de haber lanzado un álbum y varios sencillos, Bowie consiguió notoriedad en julio de 1969, cuando su sencillo «Space Oddity» llegó al top 5 de la lista británica de sencillos. Después de tres años con una etapa de experimentación, resurgió en 1972, en plena era del glam rock, con su extravagante y andrógino alter ego Ziggy Stardust.\n\nSu carrera se caracterizó por continuas reinvenciones, innovaciones musicales y presentaciones visuales de todo tipo. Entre sus logros destacan múltiples número uno, colaboraciones con artistas como Queen y John Lennon, y la influencia duradera en la cultura popular.",
    "songs": [
      {
        "id": "space-oddity",
        "title": "Space Oddity",
        "year": 1969,
        "youtubeId": "iYYRH4apXDo"
      },
      {
        "id": "ziggy-stardust",
        "title": "Ziggy Stardust",
        "year": 1972,
        "youtubeId": "na8xgu-KLAk"
      },
      {
        "id": "starman",
        "title": "Starman",
        "year": 1972,
        "youtubeId": "t365MuktYQs"
      },
      {
        "id": "life-on-mars",
        "title": "Life on Mars?",
        "year": 1973,
        "youtubeId": "AZKcl4-tcuo"
      },
      {
        "id": "rebel-rebel",
        "title": "Rebel Rebel",
        "year": 1974,
        "youtubeId": "U9l23zncj08"
      },
      {
        "id": "young-americans",
        "title": "Young Americans",
        "year": 1975,
        "youtubeId": "iO6OvHxD_m8"
      },
      {
        "id": "fame",
        "title": "Fame",
        "year": 1975,
        "youtubeId": "Ypgq0qdgVZA"
      },
      {
        "id": "heroes",
        "title": "Heroes",
        "year": 1977,
        "youtubeId": "lXgkuM2NhYI"
      },
      {
        "id": "ashes-to-ashes",
        "title": "Ashes to Ashes",
        "year": 1980,
        "youtubeId": "HyMm4rJemtI"
      },
      {
        "id": "fashion",
        "title": "Fashion",
        "year": 1980,
        "youtubeId": "F-z6u5hFgPk"
      },
      {
        "id": "under-pressure",
        "title": "Under Pressure",
        "year": 1981,
        "youtubeId": "a01QQZyl-_I"
      },
      {
        "id": "lets-dance",
        "title": "Let's Dance",
        "year": 1983,
        "youtubeId": "VbD_kBJc_gI"
      },
      {
        "id": "china-girl",
        "title": "China Girl",
        "year": 1983,
        "youtubeId": "_YC3sTbAPcU"
      },
      {
        "id": "blackstar",
        "title": "Blackstar",
        "year": 2015,
        "youtubeId": "kszLwBaC4Sw"
      },
      {
        "id": "lazarus",
        "title": "Lazarus",
        "year": 2016,
        "youtubeId": "y-JqH1M4Ya8"
      }
    ]
  },
  {
    "slug": "divididos",
    "name": "Divididos",
    "genres": [
      "Rock",
      "Funk rock",
      "Chacarera"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Divididos",
    "bio": "Divididos es un grupo musical de rock de Argentina, fundado en Hurlingham, Buenos Aires en 1988 por Ricardo Mollo y Diego Arnedo, exintegrantes de MAM y Sumo (hasta que esta se disolvió por la muerte de su líder, Luca Prodan) junto a Omar Mollo. En sus trabajos, han incursionado en estilos musicales locales como el folklore. Ha sido galardonado en múltiples ocasiones tanto de forma grupal como individual. En el 2011 fue ganador del Gardel de Oro (la distinción más destacada de la música nacional) en reconocimiento a su exitosa trayectoria, premio que ha sido entregado solo 19 veces a distintos artistas tales como Luis Alberto Spinetta, Charly García, León Gieco, Mercedes Sosa y Gustavo Cerati, entre otros.",
    "songs": [
      {
        "id": "el-arriero",
        "title": "El Arriero",
        "year": 1993,
        "youtubeId": "JJxbHNvTi1c"
      },
      {
        "id": "el-38",
        "title": "El 38",
        "year": 1991,
        "youtubeId": "obswq_in8Z4"
      },
      {
        "id": "ala-delta",
        "title": "Ala Delta",
        "year": 1991,
        "youtubeId": "e-Vi5uugYtY"
      },
      {
        "id": "que-ves",
        "title": "¿Qué Ves?",
        "year": 1993,
        "youtubeId": "DtOmy2pC_7g"
      },
      {
        "id": "amapola-del-66",
        "title": "Amapola del 66",
        "year": 2010,
        "youtubeId": "dPKaszjLdDM"
      },
      {
        "id": "ortega-y-gases",
        "title": "Ortega y Gases",
        "year": 1993,
        "youtubeId": "e3_AUUSAJCA"
      },
      {
        "id": "spaghetti-del-rock",
        "title": "Spaghetti del Rock",
        "year": 2000,
        "youtubeId": "cdzpf_T2qaA"
      },
      {
        "id": "par-mil",
        "title": "Par Mil",
        "year": 2000,
        "youtubeId": "Z_tHBX0mj1s"
      },
      {
        "id": "tanto-anteojo",
        "title": "Tanto Anteojo",
        "year": 2000,
        "youtubeId": "5H5h9Nn0Yx8"
      },
      {
        "id": "haciendo-cosas-raras",
        "title": "Haciendo Cosas Raras",
        "year": 1989,
        "youtubeId": "fOo9IppZW4A"
      },
      {
        "id": "azulejo",
        "title": "Azulejo",
        "year": 2000,
        "youtubeId": "AK_MiJphbMc"
      },
      {
        "id": "sabado",
        "title": "Sábado",
        "year": 2002,
        "youtubeId": "DmhRbzS0puI"
      },
      {
        "id": "guanuqueando",
        "title": "Guanuqueando",
        "year": 2002,
        "youtubeId": "7OlzxfSKjtI"
      },
      {
        "id": "san-saltarin",
        "title": "San Saltarín",
        "year": 2023,
        "youtubeId": "TF205_8t5Hc"
      },
      {
        "id": "vengo-del-placard-de-otro",
        "title": "Vengo del Placard de Otro",
        "year": 2002,
        "youtubeId": "eCc2_TOHoHs"
      }
    ]
  },
  {
    "slug": "elton-john",
    "name": "Elton John",
    "genres": [
      "Rock",
      "Pop",
      "Glam rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Elton_John",
    "bio": "Elton Hercules John (nacido como Reginald Kenneth Dwight; Pinner, Middlesex, Inglaterra, 25 de marzo de 1947) es un pianista, cantante, compositor y músico de rock y pop británico. Con una carrera de más de sesenta años, ha lanzado más de treinta álbumes de estudio y ha vendido más de trescientos millones de copias en todo el mundo, siendo uno de los artistas musicales más exitosos de la historia.\n\nHa colaborado con el poeta Bernie Taupin, quien ha sido y es su letrista desde 1967 y muchas de sus canciones han alcanzado la cima de las listas de éxito en el mundo. Es el único artista en mantener al menos una canción dentro del Billboard Hot 100 durante treinta años consecutivos, desde 1970 hasta 2000. Su canción «Candle in the Wind 1997», reescrita en ocasión de la muerte de Diana de Gales, vendió más de treinta y tres millones de copias y es el segundo sencillo más vendido en la historia. Su trabajo también se ha extendido hacia la producción y, en ocasiones, la actuación.\n\nNacido y criado en Pinner, suburbio de Londres, John aprendió a tocar el piano a una edad muy temprana. Formó su primera banda, Bluesology, en 1962, y se alió con el poeta y letrista Bernie Taupin en 1967.",
    "songs": [
      {
        "id": "rocket-man",
        "title": "Rocket Man",
        "year": 1972,
        "youtubeId": "DtVBCG6ThDk"
      },
      {
        "id": "your-song",
        "title": "Your Song",
        "year": 1970,
        "youtubeId": "YfQPHbITuJM"
      },
      {
        "id": "tiny-dancer",
        "title": "Tiny Dancer",
        "year": 1971,
        "youtubeId": "yYcyacLRPNs"
      },
      {
        "id": "bennie-and-the-jets",
        "title": "Bennie and the Jets",
        "year": 1973,
        "youtubeId": "wo1OwRTRKRk"
      },
      {
        "id": "goodbye-yellow-brick-road",
        "title": "Goodbye Yellow Brick Road",
        "year": 1973,
        "youtubeId": "tcUd03v_AKM"
      },
      {
        "id": "candle-in-the-wind",
        "title": "Candle in the Wind",
        "year": 1973,
        "youtubeId": "MYU3F8uUGiw"
      },
      {
        "id": "dont-go-breaking-my-heart",
        "title": "Don't Go Breaking My Heart",
        "year": 1976,
        "youtubeId": "z0qW9P-uYfM"
      },
      {
        "id": "im-still-standing",
        "title": "I'm Still Standing",
        "year": 1983,
        "youtubeId": "ZHwVBirqD2s"
      },
      {
        "id": "sacrifice",
        "title": "Sacrifice",
        "year": 1989,
        "youtubeId": "NrLkTZrPZA4"
      },
      {
        "id": "sad-songs-say-so-much",
        "title": "Sad Songs (Say So Much)",
        "year": 1984,
        "youtubeId": "X23v5_K7cXk"
      },
      {
        "id": "nikita",
        "title": "Nikita",
        "year": 1985,
        "youtubeId": "Tg-Q-Acv4qs"
      },
      {
        "id": "dont-let-the-sun-go-down-on-me",
        "title": "Don't Let the Sun Go Down on Me",
        "year": 1974,
        "youtubeId": "RsKqMNDoR4o"
      },
      {
        "id": "can-you-feel-the-love-tonight",
        "title": "Can You Feel the Love Tonight",
        "year": 1994,
        "youtubeId": "KjgWWjkNbhU"
      },
      {
        "id": "daniel",
        "title": "Daniel",
        "year": 1973,
        "youtubeId": "oDsO27K318g"
      },
      {
        "id": "philadelphia-freedom",
        "title": "Philadelphia Freedom",
        "year": 1975,
        "youtubeId": "ZDYmEP0iCOI"
      },
      {
        "id": "the-bitch-is-back",
        "title": "The Bitch Is Back",
        "year": 1974,
        "youtubeId": "oNwOPhCu1j8"
      },
      {
        "id": "someone-saved-my-life-tonight",
        "title": "Someone Saved My Life Tonight",
        "year": 1975,
        "youtubeId": "lblip52DNgQ"
      },
      {
        "id": "saturday-nights-alright-for-fighting",
        "title": "Saturday Night's Alright for Fighting",
        "year": 1973,
        "youtubeId": "4th5sD0PAtw"
      }
    ]
  },
  {
    "slug": "enrique-santos-discepolo",
    "name": "Enrique Santos Discépolo",
    "genres": [
      "Tango"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Enrique_Santos_Discépolo",
    "bio": "Enrique Santos Discépolo (Buenos Aires, 27 de marzo de 1901 - Buenos Aires, 23 de diciembre de 1951) fue un compositor, músico, dramaturgo y cineasta argentino. También era conocido como Discepolín. Su hermano, Armando Discépolo, fue director teatral y dramaturgo. Discépolo es recordado especialmente por componer varios de los llamados \"tangos fundamentales\", o \"tangos de oro\", entre los que destacan Yira, yira (1929), Cambalache (1934), Uno (1943) y Cafetín de Buenos Aires (1948), en los que cristalizó la vena lírica del escritor y que terminaron por brindarle un gran prestigio. Norberto Galasso, uno de los más reconocidos biógrafos de Discépolo, expresó que su vida \"fue un permanente desgarrarse en una sociedad injusta [...] solo comprensible en el marco de la sufrida Argentina del siglo XX\".",
    "songs": [
      {
        "id": "cambalache",
        "title": "Cambalache",
        "year": 1934,
        "youtubeId": "Zv_cO7LiCCI"
      },
      {
        "id": "yira-yira",
        "title": "Yira Yira",
        "year": 1930,
        "youtubeId": "2bKDIuGJKPQ"
      },
      {
        "id": "uno",
        "title": "Uno",
        "year": 1943,
        "youtubeId": "rkn8Vp96Wfc"
      },
      {
        "id": "cafetin-de-buenos-aires",
        "title": "Cafetín de Buenos Aires",
        "year": 1948,
        "youtubeId": "Ze6bZKc1nLQ"
      },
      {
        "id": "esta-noche-me-emborracho",
        "title": "Esta Noche Me Emborracho",
        "year": 1928,
        "youtubeId": "kjNwt0S1bEg"
      },
      {
        "id": "chorra",
        "title": "Chorra",
        "year": 1928,
        "youtubeId": "MGb_jCqKTfk"
      },
      {
        "id": "malevaje",
        "title": "Malevaje",
        "year": 1929,
        "youtubeId": "JQ4v_QHYBQg"
      },
      {
        "id": "que-vachache",
        "title": "Qué Vachaché",
        "year": 1926,
        "youtubeId": "fl11qOvA7mY"
      },
      {
        "id": "confesion",
        "title": "Confesión",
        "year": 1931,
        "youtubeId": "inUHJAXGvlc"
      },
      {
        "id": "alma-de-bandoneon",
        "title": "Alma de Bandoneón",
        "year": 1935,
        "youtubeId": "hQrAk0hdjSE"
      },
      {
        "id": "soy-un-arlequin",
        "title": "Soy un Arlequín",
        "year": 1929,
        "youtubeId": "ZOU2Qmcu1co"
      },
      {
        "id": "justo-el-31",
        "title": "Justo el 31",
        "year": 1930,
        "youtubeId": "K6Bn6jQjSIo"
      },
      {
        "id": "victoria",
        "title": "Victoria",
        "year": 1929,
        "youtubeId": "0DE99lrrh_E"
      }
    ]
  },
  {
    "slug": "fleetwood-mac",
    "name": "Fleetwood Mac",
    "genres": [
      "Rock",
      "Pop rock",
      "Blues rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Fleetwood_Mac",
    "bio": "Fleetwood Mac es una banda británica de rock formada en Londres en 1967. Fundada por Peter Green (voz y guitarra), en su primera formación estaba acompañado por Jeremy Spencer (voz, guitarra, piano y slide), Mick Fleetwood (batería) y Bob Brunning (bajo), aunque este último solo estuvo durante el tiempo en que John McVie permanecía en John Mayall & the Bluesbreakers por cuestiones contractuales. Poco después, en 1968 contrataron a Danny Kirwan como tercer guitarrista. Esta formación publicó tres álbumes de estudio, que los situó como uno de los grupos más importantes del blues británico.\n\nEn mayo de 1970, Green dejó la banda por problemas de salud y drogas. En ese mismo año entraría en la banda la teclista y vocalista Christine Perfect (McVie), futura mujer de John McVie. En menos de dos años, sus dos guitarristas restantes también se irían de la banda: primero Spencer en 1971 y luego Kirwan en 1972. Para cubrir el puesto de Spencer contrataron a Bob Welch, y para el de Kirwan a Bob Weston y Dave Walker. No obstante, la participación de estos dos últimos duró poco más de un año, ya que por diferentes razones ambos fueron despedidos. La salida de sus tres compositores principales hizo que Christine McVie y Bob Welch se encargaran de la composición de los tres discos editados en 1973 y 1974. A pesar de que no obtuvieron el mismo éxito comercial que sus predecesores, sobre todo en el Reino Unido, esta etapa es considerada como la transición entre el sonido blues y blues rock de sus inicios y el pop rock que adoptaron posteriormente.\n\nDurante la estancia en Estados Unidos, en 1975 contrataron al guitarrista Lindsey Buckingham y a la vocalista Stevie Nicks, cuya influencia cambió el sonido de la banda hacia el pop rock y soft rock. Esto les trajo un considerable éxito comercial gracias a los álbumes Fleetwood Mac (1975), Rumours (1977), Tusk (1979), Mirage (1982) y Tango in the Night (1987). Sin Buckingham, y con Rick Vito y Billy Burnette en su lugar, en 1990 salió al mercado Behind the Mask, considerada su producción menos exitosa en los últimos quince años. Al año siguiente, Nicks y Vito renunciaron y, en 1995, junto con la vocalista Bekka Bramlett y el guitarrista Dave Mason, editaron Time (1995), que resultó ser un fracaso comercial. Tras ello, Christine anunció la separación de la banda.\n\nEn 1997, la formación de finales de los setenta se reunió y grabó el álbum en vivo The Dance (1998), pero al año siguiente Christine se retiró de la banda y de la escena musical, de la que permanecería alejada varios años. Sus cuatro miembros restantes grabaron Say You Will en 2003. En los siguientes años dieron constantes giras, publicaron un EP en 2013 y en 2014 celebraron el regreso de Christine con la gira On with the Show (2014-2015). A pesar de que se especuló la grabación de un nuevo álbum, los problemas internos nuevamente jugaron en contra y, por ello, Buckingham y Christine terminaron publicando como dúo un disco en 2017. En 2018, se hizo público el segundo despido de Buckingham, que fue reemplazado por Neil Finn y Mike Campbell.\n\nFleetwood Mac experimentó una radical evolución en su estilo musical, puesto que nació como una banda de blues y, en menos de una década, pasó a ser una de pop rock. A pesar del constante cambio de músicos, nunca perdió la calidad compositiva ni tampoco su éxito comercial, salvo entre 1971 y 1974, sobre todo en el mercado británico. Con ventas de discos que fluctúan dependiendo de las fuentes, entre los 100 y 120 millones de copias a nivel mundial, ha sido una de las bandas de rock que más discos han vendido y más premios han recibido. Galardonada por varias organizaciones musicales, entró en el Paseo de la Fama de Hollywood en 1979 y en el Salón de la Fama del Rock en 1998. Asimismo, ha inspirado a numerosos artistas musicales; de hecho, la etapa con Green ha influido notablemente en agrupaciones de blues rock, hard rock y heavy metal, mientras que la de Buckingham y Nicks lo ha hecho con bandas de pop rock, folk rock, rock alternativo, música independiente y electrónica.",
    "songs": [
      {
        "id": "dreams",
        "title": "Dreams",
        "year": 1977,
        "youtubeId": "Y3ywicffOj4"
      },
      {
        "id": "go-your-own-way",
        "title": "Go Your Own Way",
        "year": 1977,
        "youtubeId": "ozl3L9fhKtE"
      },
      {
        "id": "rhiannon",
        "title": "Rhiannon",
        "year": 1975,
        "youtubeId": "jQAK6sVovUk"
      },
      {
        "id": "landslide",
        "title": "Landslide",
        "year": 1975,
        "youtubeId": "WM7-PYtXtJM"
      },
      {
        "id": "the-chain",
        "title": "The Chain",
        "year": 1977,
        "youtubeId": "xwTPvcPYaOo"
      },
      {
        "id": "dont-stop",
        "title": "Don't Stop",
        "year": 1977,
        "youtubeId": "QV9JJmSCiI8"
      },
      {
        "id": "little-lies",
        "title": "Little Lies",
        "year": 1987,
        "youtubeId": "uCGD9dT12C0"
      },
      {
        "id": "everywhere",
        "title": "Everywhere",
        "year": 1987,
        "youtubeId": "YF1R0hc5Q2I"
      },
      {
        "id": "gypsy",
        "title": "Gypsy",
        "year": 1982,
        "youtubeId": "mwgg1Pu6cNg"
      },
      {
        "id": "say-you-love-me",
        "title": "Say You Love Me",
        "year": 1976,
        "youtubeId": "wlJvpeDbpfU"
      },
      {
        "id": "tusk",
        "title": "Tusk",
        "year": 1979,
        "youtubeId": "ATMR5ettHz8"
      },
      {
        "id": "sara",
        "title": "Sara",
        "year": 1979,
        "youtubeId": "9bWGy0K5VF0"
      },
      {
        "id": "seven-wonders",
        "title": "Seven Wonders",
        "year": 1987,
        "youtubeId": "9b4F_ppjnKU"
      },
      {
        "id": "black-magic-woman",
        "title": "Black Magic Woman",
        "year": 1968,
        "youtubeId": "mLzpltJ0UJY"
      },
      {
        "id": "albatross",
        "title": "Albatross",
        "year": 1968,
        "youtubeId": "jPW9yn8KCww"
      }
    ]
  },
  {
    "slug": "foo-fighters",
    "name": "Foo Fighters",
    "genres": [
      "Rock alternativo",
      "Grunge",
      "Hard rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Foo_Fighters",
    "bio": "Foo Fighters es un grupo de rock alternativo estadounidense formado en la ciudad de Seattle en 1994 por el exbaterista de Nirvana, Dave Grohl.\n\nEl grupo debe su nombre a los ovnis y los diversos fenómenos aéreos que fueron reportados por los pilotos de los aviones aliados en la Segunda Guerra Mundial, que se conocen colectivamente como foo fighter. Antes del lanzamiento de su álbum debut en 1995, Grohl, como único miembro oficial, reclutó al bajista Nate Mendel y el baterista William Goldsmith, ambos anteriormente miembros de Sunny Day Real Estate, así como su compañero en las giras de Nirvana, Pat Smear como guitarrista para completar la alineación.\n\nLa banda comenzó con actuaciones en Portland, Oregón. Goldsmith renunció durante la grabación del segundo álbum del grupo, The Colour and the Shape (1997), cuando la mayoría de las partes de batería fueron regrabadas por el propio Grohl, hasta que luego se unió Taylor Hawkins como baterista. La partida de Smear siguió poco después.",
    "songs": [
      {
        "id": "everlong",
        "title": "Everlong",
        "year": 1997,
        "youtubeId": "eBG7P-K-r1Y"
      },
      {
        "id": "the-pretender",
        "title": "The Pretender",
        "year": 2007,
        "youtubeId": "SBjQ9tuuTJQ"
      },
      {
        "id": "my-hero",
        "title": "My Hero",
        "year": 1997,
        "youtubeId": "EqWRaAF6_WY"
      },
      {
        "id": "learn-to-fly",
        "title": "Learn to Fly",
        "year": 1999,
        "youtubeId": "1VQ_3sBZEm0"
      },
      {
        "id": "best-of-you",
        "title": "Best of You",
        "year": 2005,
        "youtubeId": "h_L4Rixya64"
      },
      {
        "id": "monkey-wrench",
        "title": "Monkey Wrench",
        "year": 1997,
        "youtubeId": "I7rCNiiNPxA"
      },
      {
        "id": "times-like-these",
        "title": "Times Like These",
        "year": 2002,
        "youtubeId": "rhzmNRtIp8k"
      },
      {
        "id": "these-days",
        "title": "These Days",
        "year": 2011,
        "youtubeId": "YDVAQI-4lto"
      },
      {
        "id": "walk",
        "title": "Walk",
        "year": 2011,
        "youtubeId": "q0SD-YhPk5M"
      },
      {
        "id": "all-my-life",
        "title": "All My Life",
        "year": 2002,
        "youtubeId": "xQ04WbgI9rg"
      },
      {
        "id": "big-me",
        "title": "Big Me",
        "year": 1995,
        "youtubeId": "pLdJQFTnZfA"
      },
      {
        "id": "this-is-a-call",
        "title": "This Is a Call",
        "year": 1995,
        "youtubeId": "imxAeQZjBeI"
      },
      {
        "id": "breakout",
        "title": "Breakout",
        "year": 1999,
        "youtubeId": "4eNBM17tkjI"
      },
      {
        "id": "long-road-to-ruin",
        "title": "Long Road to Ruin",
        "year": 2007,
        "youtubeId": "308KpFZ4cT8"
      }
    ]
  },
  {
    "slug": "green-day",
    "name": "Green Day",
    "genres": [
      "Punk rock",
      "Pop punk",
      "Rock alternativo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Green_Day",
    "bio": "Green Day es una banda estadounidense de punk rock integrada por Billie Joe Armstrong (guitarra y voz), Mike Dirnt (bajo y coros) y Tré Cool (batería y coros). El grupo originario de Berkeley, California, se gestó prematuramente en 1986 bajo el nombre de Sweet Children, con el baterista John Kiffmeyer (más conocido como Al Sobrante). En 1989 se cambiaron al nombre actual ya que el anterior se confundía con el de una banda local de esa época y poco después del lanzamiento de su primer álbum de estudio (39/Smooth), Tré Cool reemplazó a Al Sobrante.\n\nEs uno de muchos grupos distintos que nacieron en el club 924 Gilman Street, sitio que frecuentaban bandas de punk rock locales. Sus primeras publicaciones se realizaron por medio del sello discográfico independiente Lookout!, gracias a las exitosas ventas de sus primeros trabajos discográficos, se obtuvo una importante cantidad de admiradores. Algunos años después, en 1994 el conjunto firmó con Reprise Records, con este sello lanzaron el aclamado Dookie. Con este nuevo álbum el grupo musical llevó el sonido de finales de la década de 1970 a la nueva generación, además, el álbum se convirtió en un éxito internacional y lleva vendidas más de treinta millones de copias en todo el mundo.\n\nGreen Day junto a otras bandas como The Offspring y Rancid, fueron los que produjeron el renacimiento y popularización del punk rock en los Estados Unidos, como de la cultura misma, las masivas ventas produjeron la apertura de una ola de grupos pop punk y punk rock. Diez años después muchos de esos conjuntos se encuentran inactivos o disueltos, mientras que Green Day sigue en plena vanguardia musical con las ópera rock American Idiot y 21st Century Breakdown de 2004 y 2009 respectivamente, ambas con un Premio Grammy al mejor álbum de rock. Editaron una trilogía de álbumes titulados ¡Uno!, ¡Dos! y ¡Tré!, editados en septiembre, noviembre y diciembre de 2012 respectivamente. Su álbum Revolution Radio salió a la venta el 7 de octubre de 2016. En febrero de 2020 sacan un álbum titulado Father of All Motherfuckers con 10 temas producido por Butch Walker, editado por la discográfica Reprise. Finalmente el 19 de enero de 2024 sacan su último álbum de estudio hasta la fecha, titulado Saviors.\n\nEl conjunto estadounidense ha vendido casi 90 millones de copias en todo el mundo y más de 25 millones solo en su país. En 2010 se estrenó una adaptación teatral del álbum American Idiot en Broadway, el musical fue nominado para Tony Awards, incluyendo Mejor Musical y Mejor Diseño Escénico, y ha recibido comentarios positivos en general. A mediados de 2011 la revista Kerrang! los nombró como el segundo grupo más influyente surgido en los últimos treinta años, solo por detrás de Metallica. Según una encuesta pública, en la publicación quincenal de Rolling Stone, se eligió a Green Day como el mejor conjunto de punk de la historia.",
    "songs": [
      {
        "id": "basket-case",
        "title": "Basket Case",
        "year": 1994,
        "youtubeId": "NUTGr5t3MoY"
      },
      {
        "id": "longview",
        "title": "Longview",
        "year": 1994,
        "youtubeId": "42BBdzzgPNM"
      },
      {
        "id": "when-i-come-around",
        "title": "When I Come Around",
        "year": 1994,
        "youtubeId": "i8dh9gDzmz8"
      },
      {
        "id": "good-riddance-time-of-your-life",
        "title": "Good Riddance (Time of Your Life)",
        "year": 1997,
        "youtubeId": "stmwNQuUOgk"
      },
      {
        "id": "american-idiot",
        "title": "American Idiot",
        "year": 2004,
        "youtubeId": "Ee_uujKuJMI"
      },
      {
        "id": "boulevard-of-broken-dreams",
        "title": "Boulevard of Broken Dreams",
        "year": 2004,
        "youtubeId": "QW8bWHtnOOg"
      },
      {
        "id": "holiday",
        "title": "Holiday",
        "year": 2004,
        "youtubeId": "A1OqtIqzScI"
      },
      {
        "id": "wake-me-up-when-september-ends",
        "title": "Wake Me Up When September Ends",
        "year": 2005,
        "youtubeId": "NU9JoFKlaZ0"
      },
      {
        "id": "21-guns",
        "title": "21 Guns",
        "year": 2009,
        "youtubeId": "r00ikilDxW4"
      },
      {
        "id": "minority",
        "title": "Minority",
        "year": 2000,
        "youtubeId": "fAUzWrv9LN4"
      },
      {
        "id": "brain-stew",
        "title": "Brain Stew",
        "year": 1996,
        "youtubeId": "UNq9gmY_Oz4"
      },
      {
        "id": "welcome-to-paradise",
        "title": "Welcome to Paradise",
        "year": 1994,
        "youtubeId": "J7G4H3aIptU"
      },
      {
        "id": "know-your-enemy",
        "title": "Know Your Enemy",
        "year": 2009,
        "youtubeId": "9IclmVdWNbI"
      },
      {
        "id": "warning",
        "title": "Warning",
        "year": 2000,
        "youtubeId": "egdb5HVEJuo"
      }
    ]
  },
  {
    "slug": "guns-n-roses",
    "name": "Guns N' Roses",
    "genres": [
      "Hard rock",
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Guns_N%27_Roses",
    "bio": "Guns N' Roses es una banda estadounidense de música rock formada en Hollywood, Los Ángeles, en 1985. Fue fundada por el vocalista y pianista Axl Rose, y el guitarrista Izzy Stradlin.\n\nLa agrupación se cuenta entre las bandas de rock más exitosas de todos los tiempos, habiendo vendido más de cien millones de discos. Es considerada un ícono global de la música y forma parte del Salón de la Fama del Rock and Roll. La banda destaca por su amplio reconocimiento, galardones y repercusión mundial, siendo considerada por muchos como una de las más influyentes de la historia.\n\nEn 2011, Rolling Stone la posicionó en el puesto 21 en su lista de los 100 mejores artistas de la historia, elaborada junto con diversos productores y críticos musicales especializados.\n\nLa formación actual incluye a Axl Rose (voz), Slash (guitarra líder), Duff McKagan (bajo), Richard Fortus (guitarra rítmica), Isaac Carpenter (batería), y los tecladistas Dizzy Reed y Melissa Reese.\n\nHa vendido más de 150 millones de álbumes globalmente, incluyendo más de 60 millones solo en Estados Unidos. Su álbum debut Appetite for Destruction (1987) ha vendido más de 35 millones de copias y alcanzó el número 1 del Billboard 200.",
    "songs": [
      {
        "id": "sweet-child-o-mine",
        "title": "Sweet Child O' Mine",
        "year": 1987,
        "youtubeId": "1w7OgIMMRc4"
      },
      {
        "id": "welcome-to-the-jungle",
        "title": "Welcome to the Jungle",
        "year": 1987,
        "youtubeId": "o1tj2zJ2Wvg"
      },
      {
        "id": "paradise-city",
        "title": "Paradise City",
        "year": 1987,
        "youtubeId": "Rbm6GXllBiw"
      },
      {
        "id": "november-rain",
        "title": "November Rain",
        "year": 1991,
        "youtubeId": "qDPqRE_uRzE"
      },
      {
        "id": "knockin-on-heavens-door",
        "title": "Knockin' on Heaven's Door",
        "year": 1991,
        "youtubeId": "wU1T2XYynXU"
      },
      {
        "id": "dont-cry",
        "title": "Don't Cry",
        "year": 1991,
        "youtubeId": "zRIbf6JqkNc"
      },
      {
        "id": "patience",
        "title": "Patience",
        "year": 1988,
        "youtubeId": "opRUU9Po-ig"
      },
      {
        "id": "live-and-let-die",
        "title": "Live and Let Die",
        "year": 1991,
        "youtubeId": "Y86-wgKgwYw"
      },
      {
        "id": "you-could-be-mine",
        "title": "You Could Be Mine",
        "year": 1991,
        "youtubeId": "UINeazJlr9Q"
      },
      {
        "id": "civil-war",
        "title": "Civil War",
        "year": 1991,
        "youtubeId": "ql0lUqbQtn4"
      },
      {
        "id": "estranged",
        "title": "Estranged",
        "year": 1993,
        "youtubeId": "dpmAY059TTY"
      },
      {
        "id": "nightrain",
        "title": "Nightrain",
        "year": 1987,
        "youtubeId": "HW69w4kfiFM"
      },
      {
        "id": "mr-brownstone",
        "title": "Mr. Brownstone",
        "year": 1987,
        "youtubeId": "fUhFTtKgvz4"
      },
      {
        "id": "its-so-easy",
        "title": "It's So Easy",
        "year": 1987,
        "youtubeId": "FMbl1ntpIXQ"
      },
      {
        "id": "yesterdays",
        "title": "Yesterdays",
        "year": 1991,
        "youtubeId": "vNWL50p_Cq8"
      }
    ]
  },
  {
    "slug": "heroes-del-silencio",
    "name": "Héroes del Silencio",
    "genres": [
      "Rock",
      "Hard rock",
      "Pop rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Héroes_del_Silencio",
    "bio": "Héroes del Silencio (a veces abreviado Héroes o por sus iniciales HDS) fue un grupo español de rock radicado en Zaragoza, formado inicialmente por Juan Valdivia (guitarra solista) y Enrique Bunbury (voz y guitarra rítmica), y completado con Joaquín Cardiel (bajo) y Pedro Andreu (batería), a mediados de los años 80. Experimentaron un gran éxito en España e Hispanoamérica, así como en varios países europeos, incluyendo Alemania, Bélgica, Suiza, Francia e Italia, convirtiéndose en uno de los grupos más exitosos de la historia del rock en español. Después de doce años en los que vendieron más de seis millones de discos en más de treinta y siete países, y en los que ofrecieron más de mil conciertos, la banda se separó en 1996.\n\nSus señas de identidad fueron una imagen muy característica, con una iconografía y simbología muy particulares, y una música caracterizada por unas letras ambiguas y trascendentales, arpegios complicados y una sólida base rítmica. Entre sus influencias literarias se han citado escritores como William Blake y Charles Baudelaire, y entre las musicales a grupos como Led Zeppelin y The Cult.\n\nEn 2007, conmemorando el vigésimo aniversario de sus primeras grabaciones y once años después de su ruptura, anunciaron su regreso con una gira de diez conciertos en España y América, titulada genéricamente Héroes del Silencio Tour 2007. Después de la gira se separaron definitivamente.\n\nSus cuatro álbumes de estudio han sido incluidos por la revista musical Al Borde en la lista de los 250 mejores de todos los tiempos del rock iberoamericano: Senderos de traición (n.º 5), Avalancha (n.º 35), El espíritu del vino (n.º 117) y El mar no cesa (n.º 119). Su canción «Entre dos tierras» ha sido considerada por la revista digital Satélite Musical como la decimonovena mejor de todos los tiempos del rock hispano en general. La revista Rolling Stone los calificó en 2012 como el segundo mejor grupo de rock español de la historia.\n\nEn 2007 fueron homenajeados por la discográfica EMI en reconocimiento a sus más de seis millones de discos vendidos, además de recibir el Premio Ondas Especial del Jurado.",
    "songs": [
      {
        "id": "entre-dos-tierras",
        "title": "Entre Dos Tierras",
        "year": 1990,
        "youtubeId": "SzimletXB7M"
      },
      {
        "id": "la-chispa-adecuada",
        "title": "La Chispa Adecuada",
        "year": 1995,
        "youtubeId": "fQSKC1ejefc"
      },
      {
        "id": "la-sirena-varada",
        "title": "La Sirena Varada",
        "year": 1993,
        "youtubeId": "xJSt3uBtl_M"
      },
      {
        "id": "maldito-duende",
        "title": "Maldito Duende",
        "year": 1990,
        "youtubeId": "Ux6U83ThqhI"
      },
      {
        "id": "mar-adentro",
        "title": "Mar Adentro",
        "year": 1988,
        "youtubeId": "Gg3cHCm6ZYU"
      },
      {
        "id": "deshacer-el-mundo",
        "title": "Deshacer el Mundo",
        "year": 1995,
        "youtubeId": "e9ygM7Jlp8E"
      },
      {
        "id": "flor-venenosa",
        "title": "Flor Venenosa",
        "year": 1988,
        "youtubeId": "qz0MBgAml2M"
      },
      {
        "id": "heroe-de-leyenda",
        "title": "Héroe de Leyenda",
        "year": 1988,
        "youtubeId": "Ew_PcY2pFeU"
      },
      {
        "id": "la-carta",
        "title": "La Carta",
        "year": 1990,
        "youtubeId": "C9XrqQgrzKY"
      },
      {
        "id": "el-camino-del-exceso",
        "title": "El Camino del Exceso",
        "year": 1993,
        "youtubeId": "KvS1wLb3MK4"
      },
      {
        "id": "iberia-sumergida",
        "title": "Iberia Sumergida",
        "year": 1995,
        "youtubeId": "BzhmKG6AYt4"
      },
      {
        "id": "apuesta-por-el-rock-and-roll",
        "title": "Apuesta Por El Rock And Roll",
        "year": 1990,
        "youtubeId": "0-GqJPqYSKc"
      },
      {
        "id": "nuestros-nombres",
        "title": "Nuestros Nombres",
        "year": 1993,
        "youtubeId": "n0bm3nN_I3k"
      },
      {
        "id": "bendecida",
        "title": "Bendecida",
        "year": 1993,
        "youtubeId": "NF19siUy0d8"
      }
    ]
  },
  {
    "slug": "imagine-dragons",
    "name": "Imagine Dragons",
    "genres": [
      "Pop rock",
      "Rock alternativo",
      "Rock electrónico"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Imagine_Dragons",
    "bio": "Imagine Dragons es un trío estadounidense de pop rock originaria de Las Vegas, Nevada. Está compuesta por Dan Reynolds (vocalista, baterista), Wayne Sermon (guitarrista) y Ben McKee (bajista). Ganó el reconocimiento mundial con el lanzamiento de su álbum de estudio debut «Night Visions» (2012), y con su canción «It's Time».\n\nBillboard los colocó en la cima de su lista de popularidad de 2013 \"Year In Rock\", y los llamó \"la banda revelación de 2013\". La revista Rolling Stone llamó a su canción «Radioactive» del álbum «Night Visions» \"el mayor éxito rock del año\". Mientras que MTV los llamó \"la banda revelación del año\". «Radioactive» es la segunda canción con más semanas dentro del Billboard Hot 100 en la historia, con un total de 87 semanas.\n\n«Night Visions» alcanzó su punto máximo en el número dos de la lista semanal Billboard 200 y en UK Albums Chart. Su segundo álbum de estudio, «Smoke + Mirrors», alcanzó el número uno en los Estados Unidos, Canadá y el Reino Unido.\n\nImagine Dragons ganó dos American Music Awards por \"Artista Alternativo Favorito\", un premio Grammy a la mejor interpretación rock, cinco premios Billboard Music Awards y un premio World Music Award. En mayo de 2014, la banda obtuvo un total de catorce nominaciones en diferentes categorías en los Billboard Music Awards, incluyendo \"Top Artist of the Year\" y un Milestone Award, el cual reconoce la innovación y la creatividad de varios artistas a través de diferentes géneros. Hasta enero de 2017, Imagine Dragons había vendido 9 millones de copias de sus álbumes, y 27 millones en sencillos.",
    "songs": [
      {
        "id": "believer",
        "title": "Believer",
        "year": 2017,
        "youtubeId": "7wtfhZwyrcc"
      },
      {
        "id": "thunder",
        "title": "Thunder",
        "year": 2017,
        "youtubeId": "fKopy74weus"
      },
      {
        "id": "demons",
        "title": "Demons",
        "year": 2013,
        "youtubeId": "mWRsgZuwf_8"
      },
      {
        "id": "radioactive",
        "title": "Radioactive",
        "year": 2012,
        "youtubeId": "ktvTqknDobU"
      },
      {
        "id": "enemy",
        "title": "Enemy",
        "year": 2021,
        "youtubeId": "D9G1VOjN_84"
      },
      {
        "id": "whatever-it-takes",
        "title": "Whatever It Takes",
        "year": 2017,
        "youtubeId": "gOsM-DYAEhY"
      },
      {
        "id": "natural",
        "title": "Natural",
        "year": 2018,
        "youtubeId": "0I647GU3Jsc"
      },
      {
        "id": "sucker-for-pain",
        "title": "Sucker for Pain",
        "year": 2016,
        "youtubeId": "-59jGD4WrmE"
      },
      {
        "id": "bones",
        "title": "Bones",
        "year": 2022,
        "youtubeId": "TO-_3tck2tg"
      },
      {
        "id": "bad-liar",
        "title": "Bad Liar",
        "year": 2018,
        "youtubeId": "I-QfPUz1es8"
      },
      {
        "id": "its-time",
        "title": "It's Time",
        "year": 2012,
        "youtubeId": "sENM2wA_FTg"
      },
      {
        "id": "on-top-of-the-world",
        "title": "On Top of the World",
        "year": 2013,
        "youtubeId": "w5tWYmIOWGk"
      },
      {
        "id": "i-bet-my-life",
        "title": "I Bet My Life",
        "year": 2014,
        "youtubeId": "4ht80uzIhNs"
      },
      {
        "id": "warriors",
        "title": "Warriors",
        "year": 2014,
        "youtubeId": "fmI_Ndrxy14"
      },
      {
        "id": "follow-you",
        "title": "Follow You",
        "year": 2021,
        "youtubeId": "k3zimSRKqNw"
      }
    ]
  },
  {
    "slug": "indio-solari",
    "name": "Indio Solari",
    "genres": [
      "Rock alternativo",
      "Post-punk"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Indio_Solari",
    "bio": "Carlos Alberto Solari (Paraná, 17 de enero de 1949 - Parque Leloir, 5 de junio de 2026), conocido artísticamente como el Indio Solari, fue un músico argentino, miembro fundador y cantante de los grupos Patricio Rey y sus Redonditos de Ricota, Los Fundamentalistas del Aire Acondicionado y El Mister y los Marsupiales Extintos.\n\nEn 1975, en la ciudad de La Plata, formó \"Los Redondos\" junto a Skay Beilinson. La banda editó nueve álbumes de estudio hasta su disolución, en 2001. La carrera de Solari entró en un hiato hasta 2004, cuando presentó el primer álbum de LFDAA titulado El tesoro de los inocentes (Bingo Fuel). En 2007 lanzó su segundo disco, Porco Rex, en 2010 el tercero, El perfume de la tempestad, en 2013 el cuarto, Pajaritos, bravos muchachitos, y en 2018 el quinto, El ruiseñor, el amor y la muerte. En 2017, dio su último recital en vivo. Tras eso, se dedicó a trabajar en su estudio personal y publicación de libros. En 2020, volvió a mostrarse ofreciendo un concierto en el que participó de manera virtual mediante técnicas holográficas. En 2022, conformó su último grupo musical: El Mister y los Marsupiales Extintos, con el cual lanzó 15 sencillos en vida. En 2023, confirmó su retiro de los escenarios debido a la enfermedad de Parkinson.\n\nSu voz y el uso de metáforas en sus letras para muchos lo convirtieron en un icono de la contracultura en la escena del rock argentino. Su imagen pública se caracterizó por su escasa aparición y la concesión de entrevistas solo a través de la radio. En 1995 recibió un Premio Konex como uno de los mejores cantantes de la década de su país, y nuevamente en 2015 el Konex de Platino al mejor cantante de rock de la década.\n\nFalleció en la mañana del 5 de junio de 2026 a la edad de 77 años en su hogar de Parque Leloir a causa de un ACV hemorrágico.",
    "songs": [
      {
        "id": "un-poco-de-amor-frances",
        "title": "Un Poco de Amor Francés",
        "year": 1996,
        "youtubeId": "CyPyRXyVIG4"
      },
      {
        "id": "un-angel-para-tu-soledad",
        "title": "Un Ángel Para Tu Soledad",
        "year": 1988,
        "youtubeId": "Ei4LG0ANTO8"
      },
      {
        "id": "esa-estrella-era-mi-lujo",
        "title": "Esa Estrella Era Mi Lujo",
        "year": 1989,
        "youtubeId": "SePSMFlQcek"
      },
      {
        "id": "el-pibe-de-los-astilleros",
        "title": "El Pibe de los Astilleros",
        "year": 1991,
        "youtubeId": "DRf5Nzgq3Lk"
      },
      {
        "id": "tarea-fina",
        "title": "Tarea Fina",
        "year": 1996,
        "youtubeId": "regpkbAt5MU"
      },
      {
        "id": "la-bestia-pop",
        "title": "La Bestia Pop",
        "year": 1985,
        "youtubeId": "PAq7xAqXTxk"
      },
      {
        "id": "ji-ji-ji",
        "title": "Ji Ji Ji",
        "year": 1986,
        "youtubeId": "3FCfMC2vq_c"
      },
      {
        "id": "vencedores-vencidos",
        "title": "Vencedores Vencidos",
        "year": 1988,
        "youtubeId": "17Bz8rNJNsQ"
      },
      {
        "id": "habia-una-vez",
        "title": "Había Una Vez",
        "year": 2010,
        "youtubeId": "g2FuokLiGc4"
      },
      {
        "id": "todo-un-palo",
        "title": "Todo Un Palo",
        "year": 1988,
        "youtubeId": "AMnDmWnVO5Q"
      },
      {
        "id": "el-tesoro-de-los-inocentes",
        "title": "El Tesoro de los Inocentes",
        "year": 2004,
        "youtubeId": "R5BLseQkma0"
      },
      {
        "id": "preso-en-mi-ciudad",
        "title": "Preso en Mi Ciudad",
        "year": 1986,
        "youtubeId": "7ucP8NOtVtM"
      }
    ]
  },
  {
    "slug": "iron-maiden",
    "name": "Iron Maiden",
    "genres": [
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Iron_Maiden",
    "bio": "Iron Maiden es una banda británica de heavy metal fundada en Londres en 1975 por el bajista Steve Harris. Considerada una de las agrupaciones más importantes y representativas del género, han vendido más de 180 millones de discos en el mundo, a pesar de haber contado con poco apoyo de los medios de comunicación masiva durante la mayor parte de su carrera.\n\nLa banda ha basado su éxito en llegar directo a los aficionados, grabando discos de alta calidad y con destacadas actuaciones en vivo.\n\nLa agrupación ha obtenido reconocimientos como el Premio Ivor Novello en la categoría de «Logro Internacional» en 2002. En 2005 fueron incluidos en el Hollywood's RockWalk en Sunset Boulevard, Los Ángeles. En 2009, fue ganadora del premio «Mejor Performance en Vivo» en los BRIT Awards, el premio musical más importante del Reino Unido. En 2011 obtuvieron un Grammy, en la categoría de «Mejor interpretación de Metal», por la canción «El Dorado». Ha ganado el premio de mejor banda metal británica del año en varias ocasiones, en los Metal Hammer Golden Gods Awards, entre otros reconocimientos.\n\nEn 2023, fueron incluidos por la Royal Mail junto a un selecto grupo de bandas británicas, catalogadas como las más influyentes de todos los tiempos, junto a The Beatles, Pink Floyd, Queen, The Rolling Stones.\n\nDurante sus más de 45 años de trayectoria, Iron Maiden ha sido identificada en la gráfica por su famosa mascota «Eddie the Head», un personaje antropomórfico que ha aparecido en la gran mayoría de las portadas de sus álbumes y sencillos, así como en sus presentaciones en vivo.",
    "songs": [
      {
        "id": "the-trooper",
        "title": "The Trooper",
        "year": 1983,
        "youtubeId": "X4bgXH3sJ2Q"
      },
      {
        "id": "run-to-the-hills",
        "title": "Run to the Hills",
        "year": 1982,
        "youtubeId": "86URGgqONvA"
      },
      {
        "id": "fear-of-the-dark",
        "title": "Fear of the Dark",
        "year": 1992,
        "youtubeId": "L4EDWVbNKnM"
      },
      {
        "id": "the-number-of-the-beast",
        "title": "The Number of the Beast",
        "year": 1982,
        "youtubeId": "WxnN05vOuSM"
      },
      {
        "id": "aces-high",
        "title": "Aces High",
        "year": 1984,
        "youtubeId": "Xg9aQvjMS60"
      },
      {
        "id": "flight-of-icarus",
        "title": "Flight of Icarus",
        "year": 1983,
        "youtubeId": "p4w2BZXL6Ss"
      },
      {
        "id": "wasted-years",
        "title": "Wasted Years",
        "year": 1986,
        "youtubeId": "Ij99dud8-0A"
      },
      {
        "id": "2-minutes-to-midnight",
        "title": "2 Minutes to Midnight",
        "year": 1984,
        "youtubeId": "9qbRHY1l0vc"
      },
      {
        "id": "the-wicker-man",
        "title": "The Wicker Man",
        "year": 2000,
        "youtubeId": "-sQ3Af3DpeM"
      },
      {
        "id": "can-i-play-with-madness",
        "title": "Can I Play with Madness",
        "year": 1988,
        "youtubeId": "Kvqr366Op3k"
      },
      {
        "id": "the-evil-that-men-do",
        "title": "The Evil That Men Do",
        "year": 1988,
        "youtubeId": "M6JpxDebokM"
      },
      {
        "id": "wasting-love",
        "title": "Wasting Love",
        "year": 1992,
        "youtubeId": "SbWeP7KkeCU"
      },
      {
        "id": "hallowed-be-thy-name",
        "title": "Hallowed Be Thy Name",
        "year": 1982,
        "youtubeId": "UhNJCP1kKlo"
      },
      {
        "id": "powerslave",
        "title": "Powerslave",
        "year": 1984,
        "youtubeId": "eyFaMfpn918"
      },
      {
        "id": "children-of-the-damned",
        "title": "Children of the Damned",
        "year": 1982,
        "youtubeId": "wsuj2uhGBvY"
      }
    ]
  },
  {
    "slug": "kasabian",
    "name": "Kasabian",
    "genres": [
      "Rock alternativo",
      "Indie rock",
      "Rock electrónico"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Kasabian",
    "bio": "Kasabian es una banda de rock alternativo británica formada en el condado de Leicestershire (Inglaterra) en 1997. Originalmente compuesta por el vocalista Tom Meighan, el corista y guitarrista Sergio Pizzorno y el bajista Chris Edwards. La banda ha lanzado ocho álbumes de estudio, Kasabian (2004), Empire (2006), West Ryder Pauper Lunatic Asylum (2009), Velociraptor! (2011), 48:13 (2014), For Crying Out Loud (2017), The Alchemist's Euphoria (2022) y su reciente álbum Happenings (2024). La banda actualmente cuenta con Pizzorno, Carter, Edwards y el baterista Ian Matthews. Pizzorno asumió el puesto de compositor principal de Kasabian después de la salida de Christopher Karloff.\n\nDesde sus comienzos la banda fue comparada por la crítica con bandas como The Stone Roses y Primal Scream con el estilo de Oasis. La banda tomó gran popularidad desde 2004 en el Reino Unido donde el grupo cuenta con el apoyo de una gran base de fanes y gracias a que sus sencillos han tenido mucho éxito, tal es el caso de \"L.S.F. (Lost Souls Forever)\", \"Club Foot\" y \"Cutt Off\". Su música les ha valido varios premios y reconocimientos en los medios de comunicación, incluido un Brit Award en 2010 al Mejor grupo británico, y sus actuaciones en vivo han recibido elogios, el más notable de los cuales fue su aparición como cabezas de cartel en el Festival Glastonbury 2014.\n\nLa banda anunció la salida de Tom Meighan en julio de 2020 aludiendo problemas personales.",
    "songs": [
      {
        "id": "fire",
        "title": "Fire",
        "year": 2009,
        "youtubeId": "agVpq_XXRmU"
      },
      {
        "id": "club-foot",
        "title": "Club Foot",
        "year": 2004,
        "youtubeId": "lk5iMgG-WJI"
      },
      {
        "id": "underdog",
        "title": "Underdog",
        "year": 2009,
        "youtubeId": "Gw09tAcNB0Q"
      },
      {
        "id": "youre-in-love-with-a-psycho",
        "title": "You're In Love With A Psycho",
        "year": 2017,
        "youtubeId": "kimPUWSwxIs"
      },
      {
        "id": "lsf",
        "title": "L.S.F.",
        "year": 2004,
        "youtubeId": "yYYp5-mGQRI"
      },
      {
        "id": "shoot-the-runner",
        "title": "Shoot the Runner",
        "year": 2006,
        "youtubeId": "lqpnz5EGcfY"
      },
      {
        "id": "goodbye-kiss",
        "title": "Goodbye Kiss",
        "year": 2012,
        "youtubeId": "vZarE8_M3fc"
      },
      {
        "id": "eez-eh",
        "title": "Eez-Eh",
        "year": 2014,
        "youtubeId": "ST6nEvIEY4s"
      },
      {
        "id": "ill-ray-the-king",
        "title": "Ill Ray (The King)",
        "year": 2017,
        "youtubeId": "Jf3CPnDMVz0"
      },
      {
        "id": "where-did-all-the-love-go",
        "title": "Where Did All The Love Go?",
        "year": 2009,
        "youtubeId": "Xl3QoD6wiDI"
      },
      {
        "id": "empire",
        "title": "Empire",
        "year": 2006,
        "youtubeId": "nVTEqG9enEY"
      },
      {
        "id": "days-are-forgotten",
        "title": "Days Are Forgotten",
        "year": 2011,
        "youtubeId": "pBsQVP-Olmw"
      },
      {
        "id": "vlad-the-impaler",
        "title": "Vlad the Impaler",
        "year": 2014,
        "youtubeId": "iDpxJHblYEU"
      },
      {
        "id": "stevie",
        "title": "Stevie",
        "year": 2014,
        "youtubeId": "ufGGircduW8"
      },
      {
        "id": "bumblebeee",
        "title": "Bumblebeee",
        "year": 2014,
        "youtubeId": "hjUA_e0ZG_U"
      }
    ]
  },
  {
    "slug": "kiss",
    "name": "Kiss",
    "genres": [
      "Hard rock",
      "Heavy metal",
      "Glam rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Kiss",
    "bio": "Kiss fue una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons, el guitarrista Paul Stanley y el batería Peter Criss, a los que más tarde se uniría el guitarrista Ace Frehley. Conocidos por su maquillaje facial y su extravagante vestuario, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa.\n\nSi se tienen en cuenta los álbumes en solitario de 1978, Kiss ha conseguido treinta discos de oro de la RIAA y es la banda estadounidense que ha recibido un mayor número de estas certificaciones. El conjunto ha vendido más de 100 millones de álbumes en todo el mundo y 21 millones solo en los Estados Unidos. A pesar de no haber alcanzado nunca la primera posición del Billboard 200, ha situado veintiséis de sus trabajos entre los cuarenta primeros puestos.\n\nDesde su formación, sus miembros asumieron personalidades acordes con los maquillajes y trajes que llevaban: así Simmons asumió el rol de «Demon», Stanley el de «Starchild», Criss el de «Catman» y Frehley el de «Space Ace» o «Spaceman».",
    "songs": [
      {
        "id": "rock-and-roll-all-nite",
        "title": "Rock and Roll All Nite",
        "year": 1975,
        "youtubeId": "EFMD7Usflbg"
      },
      {
        "id": "detroit-rock-city",
        "title": "Detroit Rock City",
        "year": 1976,
        "youtubeId": "Dz4EFziVkNE"
      },
      {
        "id": "beth",
        "title": "Beth",
        "year": 1976,
        "youtubeId": "rP1yzK2KKSs"
      },
      {
        "id": "love-gun",
        "title": "Love Gun",
        "year": 1977,
        "youtubeId": "piAtqF7uxZ8"
      },
      {
        "id": "strutter",
        "title": "Strutter",
        "year": 1974,
        "youtubeId": "1DDus_S-Tr4"
      },
      {
        "id": "deuce",
        "title": "Deuce",
        "year": 1974,
        "youtubeId": "83f_oVMPv4E"
      },
      {
        "id": "black-diamond",
        "title": "Black Diamond",
        "year": 1974,
        "youtubeId": "msEgf9r8NIA"
      },
      {
        "id": "god-of-thunder",
        "title": "God of Thunder",
        "year": 1976,
        "youtubeId": "Tc6S2bNgCyg"
      },
      {
        "id": "shout-it-out-loud",
        "title": "Shout It Out Loud",
        "year": 1976,
        "youtubeId": "lFGLcsrwT6o"
      },
      {
        "id": "lick-it-up",
        "title": "Lick It Up",
        "year": 1983,
        "youtubeId": "Gcj34XixuYg"
      },
      {
        "id": "heavens-on-fire",
        "title": "Heaven's on Fire",
        "year": 1984,
        "youtubeId": "EZjevnnkA20"
      },
      {
        "id": "crazy-crazy-nights",
        "title": "Crazy Crazy Nights",
        "year": 1987,
        "youtubeId": "BlRS7j8lK24"
      },
      {
        "id": "forever",
        "title": "Forever",
        "year": 1989,
        "youtubeId": "d_RKO5ozLVo"
      },
      {
        "id": "god-gave-rock-n-roll-to-you-ii",
        "title": "God Gave Rock 'N' Roll to You II",
        "year": 1991,
        "youtubeId": "qrn6GcDMHBY"
      },
      {
        "id": "calling-dr-love",
        "title": "Calling Dr. Love",
        "year": 1976,
        "youtubeId": "noNSDAk87Oc"
      },
      {
        "id": "i-was-made-for-lovin-you",
        "title": "I Was Made for Lovin' You",
        "year": 1979,
        "youtubeId": "hWEBmwRYRVM"
      }
    ]
  },
  {
    "slug": "la-renga",
    "name": "La Renga",
    "genres": [
      "Hard rock",
      "Blues rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/La_Renga",
    "bio": "La Renga es un grupo musical de hard rock de Argentina formado en el barrio de Parque Avellaneda y Mataderos, Buenos Aires, en 1988. La formación está integrada por Gustavo \"Chizzo\" Nápoli (cantante principal y guitarra principal), Gabriel \"Tete\" Iglesias (bajo) y Jorge \"Tanque\" Iglesias (batería), quienes integran el grupo desde sus inicios.\n\nSu carrera se basó en la autogestión, y desde 2002 cuentan con una producción independiente, manejando su propio sello, estudio y realización de sus espectáculos.",
    "songs": [
      {
        "id": "la-balada-del-diablo-y-la-muerte",
        "title": "La Balada del Diablo y la Muerte",
        "year": 1995,
        "youtubeId": "u4Hr4Z2gkfs"
      },
      {
        "id": "la-razon-que-te-demora",
        "title": "La Razón que te Demora",
        "year": 2003,
        "youtubeId": "71FuZGPwKJc"
      },
      {
        "id": "el-revelde",
        "title": "El Revelde",
        "year": 1991,
        "youtubeId": "_FTW5MdKw98"
      },
      {
        "id": "el-final-es-en-donde-parti",
        "title": "El Final Es en Donde Partí",
        "year": 1996,
        "youtubeId": "4DhKo7L96yk"
      },
      {
        "id": "veneno",
        "title": "Veneno",
        "year": 1996,
        "youtubeId": "iu1B3arKO1w"
      },
      {
        "id": "cuando-estes-aca",
        "title": "Cuando Estés Acá",
        "year": 2004,
        "youtubeId": "MkRsyB94Wtg"
      },
      {
        "id": "triste-cancion-de-amor",
        "title": "Triste Canción de Amor",
        "year": 1993,
        "youtubeId": "OHE0_YiQq3A"
      },
      {
        "id": "lo-fragil-de-la-locura",
        "title": "Lo Frágil de la Locura",
        "year": 1998,
        "youtubeId": "1f_fmRdJYMo"
      },
      {
        "id": "voy-a-bailar-a-la-nave-del-olvido",
        "title": "Voy a Bailar a la Nave del Olvido",
        "year": 1993,
        "youtubeId": "B2IyKhKq-hI"
      },
      {
        "id": "corazon-fugitivo",
        "title": "Corazón Fugitivo",
        "year": 2014,
        "youtubeId": "XlC8l6MpIaU"
      },
      {
        "id": "en-el-baldio",
        "title": "En el Baldío",
        "year": 2000,
        "youtubeId": "XsIsqOmeMHc"
      },
      {
        "id": "panic-show",
        "title": "Panic Show",
        "year": 2000,
        "youtubeId": "3wsTxNusM4g"
      },
      {
        "id": "hablando-de-la-libertad",
        "title": "Hablando de la Libertad",
        "year": 1996,
        "youtubeId": "djwPsBjl8Wk"
      },
      {
        "id": "el-twist-del-pibe",
        "title": "El Twist del Pibe",
        "year": 1991,
        "youtubeId": "PhOlYxGOu_A"
      },
      {
        "id": "a-la-carga-mi-rock-and-roll",
        "title": "A la Carga Mi Rock and Roll",
        "year": 1996,
        "youtubeId": "yST3fJu_fvA"
      },
      {
        "id": "san-miguel",
        "title": "San Miguel",
        "year": 2014,
        "youtubeId": "bbISzl3v_ug"
      }
    ]
  },
  {
    "slug": "las-pastillas-del-abuelo",
    "name": "Las Pastillas del Abuelo",
    "genres": [
      "Rock barrial"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Las_Pastillas_del_Abuelo",
    "bio": "Las Pastillas del Abuelo es una banda de rock argentino formada en el año 1998. Su sonido se caracteriza por continuar la línea de lo que se llamó, en los años 90, el «rock barrial», esto es, un sonido de rock simple e incorporando elementos procedentes de la murga y otras expresiones de la música popular.",
    "songs": [
      {
        "id": "rompecabezas-de-amor",
        "title": "Rompecabezas de Amor",
        "year": 2004,
        "youtubeId": "MixI_ItRavk"
      },
      {
        "id": "que-es-dios",
        "title": "¿Qué es Dios?",
        "year": 2008,
        "youtubeId": "lHnRvUyXHKc"
      },
      {
        "id": "el-favor",
        "title": "El Favor",
        "year": 2015,
        "youtubeId": "yikSJLk8T6g"
      },
      {
        "id": "otra-vuelta-de-tuerca",
        "title": "Otra Vuelta de Tuerca",
        "year": 2011,
        "youtubeId": "Z0_y8BFB5aA"
      },
      {
        "id": "ojos-de-dragon",
        "title": "Ojos de Dragón",
        "year": 2015,
        "youtubeId": "01cCoom3fWQ"
      },
      {
        "id": "amar-y-envejecer",
        "title": "Amar y Envejecer",
        "year": 2011,
        "youtubeId": "Oxi6Os2iRIY"
      },
      {
        "id": "viejo-karma",
        "title": "Viejo Karma",
        "year": 2015,
        "youtubeId": "tu6FYdDGxrI"
      },
      {
        "id": "tantas-escaleras",
        "title": "Tantas Escaleras",
        "year": 2011,
        "youtubeId": "q-Ee2F4wbIo"
      },
      {
        "id": "loco-por-volverla-a-ver",
        "title": "Loco por Volverla a Ver",
        "year": 2015,
        "youtubeId": "lAgaixPTyQI"
      },
      {
        "id": "que-carajo-es-el-amor",
        "title": "¿Qué Carajo es el Amor?",
        "year": 2008,
        "youtubeId": "UEG2xZEc9fA"
      },
      {
        "id": "permiso-y-prometo",
        "title": "Permiso y Prometo",
        "year": 2004,
        "youtubeId": "QFoPCjqVRgA"
      },
      {
        "id": "skalipso",
        "title": "Skalipso",
        "year": 2005,
        "youtubeId": "aJsDuNEv9FA"
      },
      {
        "id": "la-creatividad",
        "title": "La Creatividad",
        "year": 2004,
        "youtubeId": "XiHnYkqaf8E"
      },
      {
        "id": "azucar-impalpable",
        "title": "Azúcar Impalpable",
        "year": 2020,
        "youtubeId": "eGQyzywhdP0"
      },
      {
        "id": "enano",
        "title": "Enano",
        "year": 2006,
        "youtubeId": "tABOiSNWiN8"
      },
      {
        "id": "candombe-de-resacas",
        "title": "Candombe de Resacas",
        "year": 2006,
        "youtubeId": "rCvtbGHUKGI"
      }
    ]
  },
  {
    "slug": "las-pelotas",
    "name": "Las Pelotas",
    "genres": [
      "Rock",
      "Funk rock",
      "Reggae"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Las_Pelotas",
    "bio": "Las Pelotas es un grupo musical de Argentina fundado en 1988, en la ciudad de Hurlingham, Buenos Aires tras la muerte de Luca Prodan, líder de Sumo, con una base formada por exintegrantes de ese grupo. En 1990 se establecen en Córdoba, pero poco después se mudan a Capital Federal donde actualmente residen.",
    "songs": [
      {
        "id": "personalmente",
        "title": "Personalmente",
        "year": 2009,
        "youtubeId": "843sGpiT5iw"
      },
      {
        "id": "sera",
        "title": "Será",
        "year": 2003,
        "youtubeId": "GPeiU6RqIjA"
      },
      {
        "id": "victimas-del-cielo",
        "title": "Víctimas del Cielo",
        "year": 2016,
        "youtubeId": "_6uwlzPYcj8"
      },
      {
        "id": "ya-lo-sabes",
        "title": "Ya lo Sabés",
        "year": 2020,
        "youtubeId": "SS1bjZRZYws"
      },
      {
        "id": "si-supieras",
        "title": "Si Supieras",
        "year": 1994,
        "youtubeId": "wFds5hyUPzU"
      },
      {
        "id": "brilla-shine",
        "title": "Brilla (Shine)",
        "year": 1991,
        "youtubeId": "2QhJd3r7h30"
      },
      {
        "id": "cuando-podras-amar",
        "title": "Cuándo Podrás Amar",
        "year": 1998,
        "youtubeId": "532sp58Li-k"
      },
      {
        "id": "que-podes-dar",
        "title": "¿Qué Podés Dar?",
        "year": 2009,
        "youtubeId": "t2sb_DrVi7A"
      },
      {
        "id": "pasajeros",
        "title": "Pasajeros",
        "year": 2009,
        "youtubeId": "PIQOqMmU0A8"
      },
      {
        "id": "sin-hilo",
        "title": "Sin Hilo",
        "year": 1991,
        "youtubeId": "ma9-XAgZBgM"
      },
      {
        "id": "esperando-el-milagro",
        "title": "Esperando el Milagro",
        "year": 2003,
        "youtubeId": "47-la0Iwsac"
      },
      {
        "id": "capitan-america",
        "title": "Capitán América",
        "year": 1994,
        "youtubeId": "P5Cur4SW-rw"
      }
    ]
  },
  {
    "slug": "led-zeppelin",
    "name": "Led Zeppelin",
    "genres": [
      "Hard rock",
      "Blues rock",
      "Folk rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Led_Zeppelin",
    "bio": "Led Zeppelin fue un grupo británico de rock fundado en Londres en 1968 por el guitarrista Jimmy Page, exguitarrista de The Yardbirds. La banda estuvo integrada también por John Paul Jones como bajista y tecladista, el vocalista Robert Plant y John Bonham en la batería. Es considerada una de las bandas más importantes e influyentes de la década de los 70 y de la historia del rock.\n\nLed Zeppelin presentó elementos de un amplio espectro de influencias y géneros, como el blues, el rock and roll, el soul, hard rock, la música celta, el rockabilly, la música india, rock progresivo, el folk, el rock psicodélico, reggae, el country, entre otros y es uno de los grupos seminales para el surgimiento del heavy metal.\n\nMás de cuarenta años después de la disgregación de la banda en 1980, su música continúa vendiéndose, disfruta de una amplia difusión radiofónica, y ha demostrado ser una de las bandas más influyentes en la música rock. Hasta la fecha, ha vendido más de 300 millones de álbumes en el mundo, incluidos 111 millones solo en los Estados Unidos. Es la segunda banda con más discos de diamante de la historia de la música (otorgados cada diez millones de ventas en EE. UU.) con 5, después de The Beatles que tienen 6. En 2004, la revista Rolling Stone los clasificó en el número 14 en su lista de los «100 artistas más grandes de todos los tiempos».",
    "songs": [
      {
        "id": "stairway-to-heaven",
        "title": "Stairway to Heaven",
        "year": 1971,
        "youtubeId": "QkF3oxziUI4"
      },
      {
        "id": "immigrant-song",
        "title": "Immigrant Song",
        "year": 1970,
        "youtubeId": "P3Y8OWkiUts"
      },
      {
        "id": "whole-lotta-love",
        "title": "Whole Lotta Love",
        "year": 1969,
        "youtubeId": "HQmmM_qwG4k"
      },
      {
        "id": "black-dog",
        "title": "Black Dog",
        "year": 1971,
        "youtubeId": "2KPEHohJMuw"
      },
      {
        "id": "kashmir",
        "title": "Kashmir",
        "year": 1975,
        "youtubeId": "ww9484EM2OQ"
      },
      {
        "id": "rock-and-roll",
        "title": "Rock and Roll",
        "year": 1971,
        "youtubeId": "D2lSwosw9xY"
      },
      {
        "id": "good-times-bad-times",
        "title": "Good Times Bad Times",
        "year": 1969,
        "youtubeId": "TA9Rec1qAFQ"
      },
      {
        "id": "ramble-on",
        "title": "Ramble On",
        "year": 1969,
        "youtubeId": "LzGBQerkvWs"
      },
      {
        "id": "going-to-california",
        "title": "Going to California",
        "year": 1971,
        "youtubeId": "NrUIJY_Xu2s"
      },
      {
        "id": "when-the-levee-breaks",
        "title": "When the Levee Breaks",
        "year": 1971,
        "youtubeId": "JM3fodiK9rY"
      },
      {
        "id": "over-the-hills-and-far-away",
        "title": "Over the Hills and Far Away",
        "year": 1973,
        "youtubeId": "Am9gu4wkY9E"
      },
      {
        "id": "since-ive-been-loving-you",
        "title": "Since I've Been Loving You",
        "year": 1970,
        "youtubeId": "vcIem-L398w"
      },
      {
        "id": "dazed-and-confused",
        "title": "Dazed and Confused",
        "year": 1969,
        "youtubeId": "w772GXG5LnE"
      },
      {
        "id": "heartbreaker",
        "title": "Heartbreaker",
        "year": 1969,
        "youtubeId": "e5O4073zCKA"
      },
      {
        "id": "babe-im-gonna-leave-you",
        "title": "Babe I'm Gonna Leave You",
        "year": 1969,
        "youtubeId": "zX_wwlIZ6ko"
      },
      {
        "id": "fool-in-the-rain",
        "title": "Fool in the Rain",
        "year": 1979,
        "youtubeId": "I57nIP0vc44"
      }
    ]
  },
  {
    "slug": "leon-gieco",
    "name": "León Gieco",
    "genres": [
      "Folclore",
      "Rock",
      "Canción de protesta"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/León_Gieco",
    "bio": "Raúl Alberto Antonio Gieco, conocido como León Gieco (Cañada Rosquín, 20 de noviembre de 1951), es un músico y cantante argentino.\n\nLeón Gieco se caracteriza por haber mezclado el género folclórico con el rock argentino. Aunque es más apreciado en su país, donde el contenido de sus canciones a favor de los derechos humanos, los campesinos y pueblos originarios, el apoyo a los discapacitados y la solidaridad con los marginados, lo hizo atractivo a quienes compartían su pensamiento, su fama se extiende más allá de su tierra: se presenta frente a audiencias de otros países ―en especial en países donde hay grandes colonias de inmigrantes argentinos― y es, a menudo, descrito como «el Bob Dylan de Argentina».\n\nComenzó esta fusión con su álbum debut, León Gieco (1973), lanzado por el sello Music Hall, fundado en Argentina en los años cincuenta, y que poseía un importante catálogo de diversos géneros, incluso folklore, tango, rock y música clásica. En 1978 presentó «Sólo le pido a Dios», canción que le hizo ganar reconocimiento internacional y recorrer el mundo, en especial a partir de la versión interpretada por Mercedes Sosa. Gieco grabó varios álbumes durante mediados de los setenta, todos populares. Tras la quiebra del MH, intentó producir a través de una firma propia, Cañada, pero tras el fracaso del álbum Semillas del corazón, única referencia del flamante sello, firmó contrato con una multinacional, EMI, que publicó todos sus trabajos de allí en más.\n\nSu carrera es muy amplia. En sus más de 50 años de carrera, ha editado 14 álbumes de estudio con canciones de su autoría, tomándose pausas importantes, de hasta cuatro años, entre un disco y otro. La cuenta llega a más de cuarenta discos si se incluyen también álbumes en vivo, colaboraciones con otros artistas, recopilaciones, y versiones de sus canciones y de otros compositores.\n\nHa experimentado con otros musicales: el rock, la cumbia villera, la murga, el pop, el candombe, el heavy metal o el chamamé.",
    "songs": [
      {
        "id": "solo-le-pido-a-dios",
        "title": "Sólo le Pido a Dios",
        "year": 1978,
        "youtubeId": "x5PJoP9x-Ys"
      },
      {
        "id": "los-salieris-de-charly",
        "title": "Los Salieris de Charly",
        "year": 1985,
        "youtubeId": "fcivFK1gKuI"
      },
      {
        "id": "el-angel-de-la-bicicleta",
        "title": "El Ángel de la Bicicleta",
        "year": 1994,
        "youtubeId": "XKcXwEAHkWM"
      },
      {
        "id": "en-el-pais-de-la-libertad",
        "title": "En el País de la Libertad",
        "year": 1978,
        "youtubeId": "M0aAL-TncgA"
      },
      {
        "id": "bandidos-rurales",
        "title": "Bandidos Rurales",
        "year": 1985,
        "youtubeId": "1MLcVhMgxOQ"
      },
      {
        "id": "ojo-con-los-orozco",
        "title": "Ojo con los Orozco",
        "year": 1985,
        "youtubeId": "W4J1vxdz2j8"
      },
      {
        "id": "el-fantasma-de-canterville",
        "title": "El Fantasma de Canterville",
        "year": 1985,
        "youtubeId": "pugZKHXIKHs"
      },
      {
        "id": "cancion-para-carito",
        "title": "Canción para Carito",
        "year": 1973,
        "youtubeId": "U5POl1D6AMU"
      },
      {
        "id": "pensar-en-nada",
        "title": "Pensar en Nada",
        "year": 1981,
        "youtubeId": "h0pD3eN2Ltk"
      },
      {
        "id": "la-memoria",
        "title": "La Memoria",
        "year": 2001,
        "youtubeId": "fRcoD6qY32Q"
      },
      {
        "id": "volver-a-los-17",
        "title": "Volver a los 17",
        "year": 1984,
        "youtubeId": "LZQjCYmQudY"
      },
      {
        "id": "razon-de-vivir",
        "title": "Razón de Vivir",
        "year": 1987,
        "youtubeId": "FJYyYd_tvGI"
      },
      {
        "id": "cinco-siglos-igual",
        "title": "Cinco Siglos Igual",
        "year": 1992,
        "youtubeId": "5xYY-1plZmQ"
      },
      {
        "id": "hombres-de-hierro",
        "title": "Hombres de Hierro",
        "year": 1985,
        "youtubeId": "Bf6SrFBH2Kg"
      }
    ]
  },
  {
    "slug": "los-autenticos-decadentes",
    "name": "Los Auténticos Decadentes",
    "genres": [
      "Ska",
      "Rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Los_Aut%C3%A9nticos_Decadentes",
    "bio": "Los Auténticos Decadentes es una banda argentina de ska formada el 13 de septiembre de 1986 por Cucho Parisi, Nito Montecchia y Gastón Francés Bernardou. Si bien su principal género es el ska, la banda suele tocar una cantidad múltiple de géneros (como el pop, la cumbia, el cuarteto, el candombe, el bolero, el rock, etcétera) y fusionarlos, formando así un sonido único. Es considerada como una de las bandas de música más populares de Argentina.\nHa recibido el apoyo de grandes figuras como Luca Prodan, David Byrne, Manu Chao, Andrés Calamaro, Julieta Venegas, Kapanga, Fernando Ruiz Díaz, Rubén Albarrán, Fito Páez (homenajea a la banda mencionándolos en su canción «Tiempo al tiempo»), y otros artistas nacionales e internacionales, por su extensa trayectoria, la calidad de sus obras, su popularidad y su masivo poder de convocatoria.\nSus canciones (con letra modificada) se cantan en los estadios de fútbol por las \"hinchadas\" de todo el continente. El domingo 8 de diciembre de 1992 tocaron en el Estadio José Amalfitani, del club Vélez Sarsfield antes que los brasileños Os Paralamas do Sucesso y los estadounidenses The B-52's, que estaban en la cumbre de su carrera. En años posteriores lograron un éxito en México muy importante, tocando en 2006 en el Palacio de los Deportes y dos veces en 2007 en el Teatro Metropolitan. Algunas de sus canciones son ya clásicas en la vida nocturna argentina, como «Corazón», «Loco (tu forma de ser)», «El gran señor», «Cómo me voy a olvidar», «Entreguá el marrón», «El murguero (Tu-Tá-Tu-Tá)», «Los piratas», «La guitarra», «Un osito de peluche de Taiwán», «La prima lejana», «Somos», «Besándote», «El dinero no es todo», «El pájaro vio el cielo y se voló», «Viviré por siempre» y «Vení Raquel».\nEn 2007, festejando sus veinte años como banda, tocaron en el Luna Park de Buenos Aires y grabaron un DVD en vivo que se editó con el nombre de Somos. El 31 de marzo de 2012, celebraron una vez más en el estadio Luna Park sus veinticinco años en conjunto.\nEn el festejo del 30 aniversario el 17 de noviembre de 2017, cerraron su gira latinoamericana en el Foro Sol de la Ciudad de México ante 65 000 seguidores. Su último disco, Fiesta nacional (MTV Unplugged), llevó más de 30 000 personas en su gira latinoamericana sumando cinco auditorios nacionales en Ciudad de México y recibiendo discos de Oro y Platino en Argentina y México.",
    "songs": [
      {
        "id": "loco-tu-forma-de-ser",
        "title": "Loco (Tu Forma de Ser)",
        "year": 1996,
        "youtubeId": "1gjJg_ikWMw"
      },
      {
        "id": "la-guitarra",
        "title": "La Guitarra",
        "year": 1991,
        "youtubeId": "ID-iJOw9rLo"
      },
      {
        "id": "corazon",
        "title": "Corazón",
        "year": 1991,
        "youtubeId": "Qso7QJUCZyI"
      },
      {
        "id": "un-osito-de-peluche-de-taiwan",
        "title": "Un Osito de Peluche de Taiwán",
        "year": 2003,
        "youtubeId": "WKM5jRAUgvU"
      },
      {
        "id": "el-murguero",
        "title": "El Murguero",
        "year": 1991,
        "youtubeId": "sx-43RqGgsk"
      },
      {
        "id": "besandote",
        "title": "Besándote",
        "year": 1996,
        "youtubeId": "WEr3S0J5Fcc"
      },
      {
        "id": "la-ladrona",
        "title": "La Ladrona",
        "year": 2022,
        "youtubeId": "_ojAvjbXgIw"
      },
      {
        "id": "golpes-en-el-corazon",
        "title": "Golpes en el Corazón",
        "year": 2021,
        "youtubeId": "RY0cvAKB7Ps"
      },
      {
        "id": "el-gran-senor",
        "title": "El Gran Señor",
        "year": 1996,
        "youtubeId": "Ji-6oid0HFk"
      },
      {
        "id": "no-me-importa-el-dinero",
        "title": "No Me Importa el Dinero",
        "year": 2012,
        "youtubeId": "LXFL5mdfP40"
      },
      {
        "id": "como-me-voy-a-olvidar",
        "title": "Cómo Me Voy a Olvidar",
        "year": 1997,
        "youtubeId": "tgTKLzG9e-M"
      },
      {
        "id": "el-pajaro-vio-el-cielo-y-se-volo",
        "title": "El Pájaro Vio el Cielo y Se Voló",
        "year": 1993,
        "youtubeId": "fXRvlqPYth0"
      },
      {
        "id": "borracho-y-solo",
        "title": "Borracho y Solo",
        "year": 1993,
        "youtubeId": "CvY2XLOBwLs"
      },
      {
        "id": "amor",
        "title": "Amor",
        "year": 2018,
        "youtubeId": "Pvope7xOzHg"
      }
    ]
  },
  {
    "slug": "los-fabulosos-cadillacs",
    "name": "Los Fabulosos Cadillacs",
    "genres": [
      "Ska",
      "Reggae"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Los_Fabulosos_Cadillacs",
    "bio": "Los Fabulosos Cadillacs es una banda argentina de ska proveniente de Buenos Aires y fundada en 1984. Llevan grabados 16 álbumes y a lo largo de sus distintas eras colaboraron con distintos artistas argentinos e internacionales, obteniendo en el medio un gran reconocimiento crítico y comercial. Varios de sus trabajos han sido incluidos en listas de mejores álbumes de rock latinoamericano (Al borde, Rolling Stone Argentina) y han recibido nominaciones y premios de MTV Latinoamérica, Premios Gardel, Fundación Konex y Grammy. Su último álbum de estudio se titula La salvación de Solo y Juan (2016), para cuya promoción realizaron festivales y conciertos en Latinoamérica, Estados Unidos, Europa y Asia.",
    "songs": [
      {
        "id": "matador",
        "title": "Matador",
        "year": 1993,
        "youtubeId": "pjPA7CXutDw"
      },
      {
        "id": "siguiendo-la-luna",
        "title": "Siguiendo la Luna",
        "year": 1992,
        "youtubeId": "94J9VrY9QBA"
      },
      {
        "id": "vasos-vacios",
        "title": "Vasos Vacíos",
        "year": 1988,
        "youtubeId": "8Zdhan166z0"
      },
      {
        "id": "mal-bicho",
        "title": "Mal Bicho",
        "year": 1995,
        "youtubeId": "MKIhV6OJczY"
      },
      {
        "id": "padre-nuestro",
        "title": "Padre Nuestro",
        "year": 2008,
        "youtubeId": "KcKMKVBEYME"
      },
      {
        "id": "calaveras-y-diablitos",
        "title": "Calaveras y Diablitos",
        "year": 1997,
        "youtubeId": "S8Ty8wPSsv8"
      },
      {
        "id": "manuel-santillan-el-leon",
        "title": "Manuel Santillán, el León (Versión Reggae)",
        "year": 1992,
        "youtubeId": "NhsUcmV32HY"
      },
      {
        "id": "revolution-rock",
        "title": "Revolution Rock",
        "year": 1988,
        "youtubeId": "wWiQ2wcbe-A"
      },
      {
        "id": "el-satanico-dr-cadillac",
        "title": "El Satánico Dr. Cadillac",
        "year": 1993,
        "youtubeId": "RytH1k3-moc"
      },
      {
        "id": "arde-buenos-aires",
        "title": "Arde Buenos Aires",
        "year": 1990,
        "youtubeId": "09BHOB39jaY"
      },
      {
        "id": "contrabando-de-amor",
        "title": "Contrabando de Amor",
        "year": 1989,
        "youtubeId": "qId6t4IgGN4"
      },
      {
        "id": "yo-no-me-sentaria-en-tu-mesa",
        "title": "Yo No Me Sentaría en Tu Mesa",
        "year": 1987,
        "youtubeId": "y5OdRh5lZOg"
      },
      {
        "id": "el-genio-del-dub",
        "title": "El Genio del Dub",
        "year": 1987,
        "youtubeId": "liVmydF5ePg"
      },
      {
        "id": "mi-novia-se-cayo-en-un-pozo-ciego",
        "title": "Mi Novia se Cayó en un Pozo Ciego",
        "year": 1987,
        "youtubeId": "jI_FfJSdqHE"
      }
    ]
  },
  {
    "slug": "los-pericos",
    "name": "Los Pericos",
    "genres": [
      "Reggae",
      "Ska"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Los_Pericos",
    "bio": "Los Pericos es una banda de reggae y ska argentina fundada en 1986. En 2006 había superado los dos millones y medio de discos vendidos y más de tres mil presentaciones en vivo. Fueron nombrados embajadores del reggae por Jamaica.",
    "songs": [
      {
        "id": "pupilas-lejanas",
        "title": "Pupilas Lejanas",
        "year": 1998,
        "youtubeId": "QasXUhjFTCw"
      },
      {
        "id": "runaway",
        "title": "Runaway",
        "year": 1994,
        "youtubeId": "do-SuB_JXf4"
      },
      {
        "id": "parate-y-mira",
        "title": "Párate y Mira",
        "year": 1994,
        "youtubeId": "_3XjwkJTwzU"
      },
      {
        "id": "mucha-experiencia",
        "title": "Mucha Experiencia",
        "year": 1994,
        "youtubeId": "QTm1xD5ZzJQ"
      },
      {
        "id": "waiting",
        "title": "Waiting",
        "year": 1992,
        "youtubeId": "lDnLgQxLXS0"
      },
      {
        "id": "me-late",
        "title": "Me Late",
        "year": 1992,
        "youtubeId": "LI6UdYWsVbU"
      },
      {
        "id": "nada-que-perder",
        "title": "Nada Que Perder",
        "year": 1994,
        "youtubeId": "y1hKO6V9T-s"
      },
      {
        "id": "mi-resistencia",
        "title": "Mi Resistencia",
        "year": 1992,
        "youtubeId": "Q9w_g-yriUA"
      },
      {
        "id": "complicado-y-aturdido",
        "title": "Complicado y Aturdido",
        "year": 2002,
        "youtubeId": "AyTt4WCzp34"
      },
      {
        "id": "caliente",
        "title": "Caliente",
        "year": 1992,
        "youtubeId": "PV7CE_XR-KQ"
      },
      {
        "id": "anonimos",
        "title": "Anónimos",
        "year": 2016,
        "youtubeId": "g2etFFihEcY"
      },
      {
        "id": "jamaica-reggae",
        "title": "Jamaica Reggae",
        "year": 1987,
        "youtubeId": "Jj2FULAupq0"
      }
    ]
  },
  {
    "slug": "los-piojos",
    "name": "Los Piojos",
    "genres": [
      "Rock",
      "Reggae"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Los_Piojos",
    "bio": "Los Piojos es una banda argentina de rock formada a fines del año 1988 en la localidad de Ciudad Jardín Lomas del Palomar, en la zona oeste del Gran Buenos Aires. Estuvo la mayor parte de su historia conformada por el vocalista, guitarrista, armonicista y letrista Andrés Ciro Martínez, los guitarristas Daniel Fernández y Gustavo Kupinski, los bateristas Sebastián Cardero (desde 2000) y Daniel Buira (hasta 1999), el percusionista Facundo Farías Gómez y el bajista Miguel Ángel Rodríguez.\n\nDe todos los grupos surgidos durante la década de los 90, Los Piojos se erigió como uno de los más populares incluso después de su separación, no solo por su poder de convocatoria y las importantes cifras de ventas en sus álbumes, sino también por una discografía de carácter sólido que fue haciéndose cada vez más personal.\n\nTras un período de formación de cuatro años de presentaciones en vivo por alrededor de Argentina, Los Piojos publicaron su primer álbum de estudio, Chactuchac, en 1992, que incluyó los sencillos «Tan solo» y «Yira - yira», que se convirtieron en insignias de la banda. Su segundo álbum, Ay ay ay (1994), continuó impulsando su popularidad. Su consagración definitiva se dio con 3er arco (1996), con los sencillos «El farolito» y «Verano del '92», incluido en la lista de \"Los 100 mejores álbumes del rock argentino\" según la revista Rolling Stone. A partir de allí, Los Piojos incorporaron elementos de candombe, murga y tango en sus siguientes proyectos, Azul (1998) y Verde paisaje del infierno (2000). La banda retornó al éxito comercial con Máquina de sangre (2003) y Civilización (2007), y se separó el 30 de mayo de 2009 con un espectáculo en el estadio de River Plate ante 65 mil personas. El 4 de septiembre de 2024, la banda anunció su regreso con una serie de espectáculos y una gira que se extendió hasta 2025.",
    "songs": [
      {
        "id": "bicho-de-ciudad",
        "title": "Bicho de Ciudad",
        "year": 2007,
        "youtubeId": "DdzF5zF6DBY"
      },
      {
        "id": "como-ali",
        "title": "Como Alí",
        "year": 2003,
        "youtubeId": "vDA8vEvDaMU"
      },
      {
        "id": "ando-ganas-llora-llora",
        "title": "Ando Ganas (Llora Llora)",
        "year": 1994,
        "youtubeId": "oHZCiDTPKTA"
      },
      {
        "id": "tan-solo",
        "title": "Tan Solo",
        "year": 1992,
        "youtubeId": "8TdbQUBo8iQ"
      },
      {
        "id": "el-farolito",
        "title": "El Farolito",
        "year": 1996,
        "youtubeId": "Jf_Ach2THWs"
      },
      {
        "id": "verano-del-92",
        "title": "Verano del '92",
        "year": 1996,
        "youtubeId": "GulXGGJ87pA"
      },
      {
        "id": "muy-despacito",
        "title": "Muy Despacito",
        "year": 1994,
        "youtubeId": "Js6gmi_Gu-k"
      },
      {
        "id": "agua",
        "title": "Agua",
        "year": 1998,
        "youtubeId": "lv8CZy0kcYM"
      },
      {
        "id": "marado",
        "title": "Maradó",
        "year": 1996,
        "youtubeId": "VRu0tB1bKfc"
      },
      {
        "id": "desde-lejos-no-se-ve",
        "title": "Desde Lejos No Se Ve",
        "year": 1998,
        "youtubeId": "SmjxfNKYUto"
      },
      {
        "id": "todo-pasa",
        "title": "Todo Pasa",
        "year": 1996,
        "youtubeId": "2_Cw5iQE0sI"
      },
      {
        "id": "vine-hasta-aqui",
        "title": "Vine Hasta Aquí",
        "year": 2000,
        "youtubeId": "2Rrv217PWS0"
      },
      {
        "id": "el-balneario-de-los-doctores-crotos",
        "title": "El Balneario de los Doctores Crotos",
        "year": 1998,
        "youtubeId": "2CU9XNTiXak"
      }
    ]
  },
  {
    "slug": "louis-armstrong",
    "name": "Louis Armstrong",
    "genres": [],
    "wikipedia": "https://es.wikipedia.org/wiki/Louis_Armstrong",
    "bio": "Louis Daniel Armstrong (Nueva Orleans, 4 de agosto de 1901 - Nueva York, 6 de julio de 1971), conocido como Satchmo o Pops, fue un trompetista y cantante estadounidense de jazz.\n\nSe trata de una de las figuras más carismáticas e innovadoras de la historia del jazz y su músico más popular. Gracias a sus habilidades musicales y a su brillante personalidad, transformó el jazz desde su condición inicial de música de baile en una forma de arte popular. Aunque en el arranque de su carrera cimentó su fama como cornetista y trompetista, más adelante, su condición de vocalista le consagraría como una figura internacional de enorme influencia para el canto jazzístico.\n\n\"Los logros de Satchmo escapan a lo meramente artístico o personal, pues se convirtieron en símbolo de la creatividad del americano.\"",
    "songs": [
      {
        "id": "what-a-wonderful-world",
        "title": "What a Wonderful World",
        "year": 1967,
        "youtubeId": "rBrd_3VMC3c"
      },
      {
        "id": "la-vie-en-rose",
        "title": "La Vie en Rose",
        "year": 1950,
        "youtubeId": "9n-hyA2-FDg"
      },
      {
        "id": "dream-a-little-dream-of-me",
        "title": "Dream a Little Dream of Me",
        "year": 1950,
        "youtubeId": "OAVZuSoP8dk"
      },
      {
        "id": "they-cant-take-that-away-from-me",
        "title": "They Can't Take That Away From Me",
        "year": 1956,
        "youtubeId": "_hKWbjBE7iU"
      },
      {
        "id": "the-nearness-of-you",
        "title": "The Nearness of You",
        "year": 1956,
        "youtubeId": "JhaCNIpAnPs"
      },
      {
        "id": "a-kiss-to-build-a-dream-on",
        "title": "A Kiss to Build a Dream On",
        "year": 1951,
        "youtubeId": "d_E6IJ7Yjdc"
      },
      {
        "id": "cheek-to-cheek",
        "title": "Cheek to Cheek",
        "year": 1956,
        "youtubeId": "20iOlPwz0J0"
      },
      {
        "id": "autumn-in-new-york",
        "title": "Autumn in New York",
        "year": 1957,
        "youtubeId": "bjiHAirzdxw"
      },
      {
        "id": "summertime",
        "title": "Summertime",
        "year": 1957,
        "youtubeId": "2HJCN3upMHE"
      },
      {
        "id": "isnt-this-a-lovely-day",
        "title": "Isn't This a Lovely Day?",
        "year": 1956,
        "youtubeId": "bn_JFsPwUzE"
      },
      {
        "id": "hello-dolly",
        "title": "Hello, Dolly!",
        "year": 1964,
        "youtubeId": "l7N2wssse14"
      },
      {
        "id": "mack-the-knife",
        "title": "Mack the Knife",
        "year": 1956,
        "youtubeId": "28ULUQgxJ5M"
      },
      {
        "id": "when-the-saints-go-marching-in",
        "title": "When the Saints Go Marching In",
        "year": 1938,
        "youtubeId": "wyLjbMBpGDA"
      },
      {
        "id": "st-louis-blues",
        "title": "St. Louis Blues",
        "year": 1954,
        "youtubeId": "VeS29FJmLTw"
      },
      {
        "id": "aint-misbehavin",
        "title": "Ain't Misbehavin'",
        "year": 1955,
        "youtubeId": "NU8fPHbiQPs"
      }
    ]
  },
  {
    "slug": "luis-alberto-spinetta",
    "name": "Luis Alberto Spinetta",
    "genres": [
      "Rock nacional",
      "Rock progresivo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Luis_Alberto_Spinetta",
    "bio": "Luis Alberto Spinetta (Núñez, 23 de enero de 1950-Villa Urquiza, 8 de febrero de 2012) fue un músico, cantante, guitarrista, poeta, escritor, compositor y multinstrumentista argentino, considerado uno de los más importantes músicos de Argentina, Latinoamérica y del habla hispana por la complejidad instrumental, compositiva, lírica y poética de sus obras musicales, tanto en sus múltiples agrupaciones y como solista. El gobierno argentino estableció el 23 de enero de cada año como «Día Nacional del Músico» en conmemoración a su nacimiento, bajo la Ley 27.106.\n\nEn sus años iniciales, Spinetta formaría diversas bandas de rock en las décadas de los 60 y 70 que serían muy influyentes e importantes en la evolución del rock nacional y latinoamericano, como lo serían Almendra, Pescado Rabioso e Invisible, introductoras de géneros como hard rock, blues, y rock progresivo en la escena musical argentina. Tras la disolución de Pescado Rabioso, pero usando aún el nombre de esa banda, editó Artaud (1973), considerado como el mejor disco de la historia del rock nacional argentino por la revista Rolling Stone.\n\nDurante la década de los 2000 editó sus últimos trabajos, y en 2008 lanzó su último álbum, Un mañana, a la par del recital Spinetta y las Bandas Eternas en 2009, donde celebró sus cuarenta años de trayectoria en un concierto de cinco horas y media ante 40 mil personas en el Estadio José Amalfitani.\n\nFalleció en 2012 a los 62 años, a causa de un cáncer de pulmón provocado por su adicción al cigarrillo. Sus cenizas fueron esparcidas en Río de la Plata.\n\nEn 2005 obtuvo el Premio Konex de Platino como el más destacado solista masculino de rock de la década en Argentina. Su canción fue considerada en 2002 como la segunda mejor canción de todos los tiempos del rock argentino y la vigésimo octava del rock de Hispanoamérica. Spinetta editó 376 canciones propias. En 1997 la revista Billboard lo definió como «ícono del rock argentino», y en 2001 el diario Página/12 lo consideró el artista más influyente en la historia del rock argentino.",
    "songs": [
      {
        "id": "seguir-viviendo-sin-tu-amor",
        "title": "Seguir Viviendo Sin Tu Amor",
        "year": 1985,
        "youtubeId": "BfYR6EH_9qg"
      },
      {
        "id": "muchacha-ojos-de-papel",
        "title": "Muchacha (Ojos de Papel)",
        "year": 1969,
        "youtubeId": "33bSMJF-SfE"
      },
      {
        "id": "bajan",
        "title": "Bajan",
        "year": 1973,
        "youtubeId": "pVD4xTf0EWU"
      },
      {
        "id": "cementerio-club",
        "title": "Cementerio Club",
        "year": 1973,
        "youtubeId": "nSEtZ7fCXl4"
      },
      {
        "id": "todas-las-hojas-son-del-viento",
        "title": "Todas las Hojas Son del Viento",
        "year": 1973,
        "youtubeId": "b-u-bchAnW4"
      },
      {
        "id": "las-habladurias-del-mundo",
        "title": "Las Habladurías del Mundo",
        "year": 1973,
        "youtubeId": "k5CNTHzu7eQ"
      },
      {
        "id": "barro-tal-vez",
        "title": "Barro Tal Vez",
        "year": 1982,
        "youtubeId": "W47hOuQjDag"
      },
      {
        "id": "a-estos-hombres-tristes",
        "title": "A Estos Hombres Tristes",
        "year": 1969,
        "youtubeId": "mXyamTEFa6M"
      },
      {
        "id": "rezo-por-vos",
        "title": "Rezo por Vos",
        "year": 1986,
        "youtubeId": "WyKAzMCUxlI"
      },
      {
        "id": "cheques",
        "title": "Cheques",
        "year": 1997,
        "youtubeId": "DNZDk5IgtyE"
      },
      {
        "id": "ya-no-mires-atras",
        "title": "Ya No Mires Atrás",
        "year": 2020,
        "youtubeId": "kDrjY2F5JUI"
      },
      {
        "id": "dejaste-ver-tu-corazon",
        "title": "Dejaste Ver Tu Corazón",
        "year": 1986,
        "youtubeId": "eFLh-qN6tQY"
      },
      {
        "id": "quedandote-o-yendote",
        "title": "Quedándote o Yéndote",
        "year": 1999,
        "youtubeId": "Jqi2rk5l0-k"
      },
      {
        "id": "plegaria-para-un-nino-dormido",
        "title": "Plegaria para un Niño Dormido",
        "year": 1969,
        "youtubeId": "9LvFHvHzglo"
      },
      {
        "id": "fina-ropa-blanca",
        "title": "Fina Ropa Blanca",
        "year": 1989,
        "youtubeId": "GBw75Gud2wk"
      }
    ]
  },
  {
    "slug": "mago-de-oz",
    "name": "Mägo de Oz",
    "genres": [
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Mago_de_Oz_(banda)",
    "bio": "Mägo de Oz es una banda española de folk metal fundada en Madrid el 7 de julio de 1988 por Txus di Fellatio.\n\nLa banda saltó al éxito en 1998 con el álbum La leyenda de La Mancha, llegando a las listas de éxitos musicales de España con canciones como «Molinos de viento» o posteriormente, con su álbum Finisterra, «Fiesta pagana». La fama del grupo y su éxito, tanto en la prensa especializada como en los medios convencionales a nivel nacional e internacional, especialmente en los lineales de cintas de gasolinera y en Hispanoamérica, se hizo aún mayor tras la publicación del disco Gaia en 2003, siendo el primer trabajo de una trilogía conceptual completada con los discos Gaia II: La voz dormida en 2005 y Gaia III: Atlantia en 2010, de igual o mayor éxito.\n\nDesde 1998 (La Leyenda de la Mancha) hasta 2010 (Gaia III: Atlantia) es considerado como la época dorada de Mägo de Oz, siendo 2005 y 2006 (Gaia II: La Voz Dormida) el punto más alto de fama y reconocimiento de su historia.\n\nEn el 2008, se les entregó el disco de diamante por superar el millón de copias vendidas de toda su obra discográfica solamente en España. Se calcula que habrían vendido más de tres millones de discos entre España y Latinoamérica hasta el año 2013.\n\nA lo largo de su carrera, Mägo de Oz ha sufrido numerosos cambios de integrantes, siendo Txus di Fellatio y Carlos Prieto «Mohamed», los únicos miembros originales que continúan en la banda.",
    "songs": [
      {
        "id": "fiesta-pagana",
        "title": "Fiesta Pagana",
        "year": 2000,
        "youtubeId": "mV_bxfA5cyA"
      },
      {
        "id": "molinos-de-viento",
        "title": "Molinos de Viento",
        "year": 1998,
        "youtubeId": "A-JIjV7pKC8"
      },
      {
        "id": "la-costa-del-silencio",
        "title": "La Costa del Silencio",
        "year": 2003,
        "youtubeId": "sy9nt1wvQrM"
      },
      {
        "id": "la-danza-del-fuego",
        "title": "La Danza del Fuego",
        "year": 2000,
        "youtubeId": "LnFOR-OJbVM"
      },
      {
        "id": "hasta-que-el-cuerpo-aguante",
        "title": "Hasta que el Cuerpo Aguante",
        "year": 2000,
        "youtubeId": "7YVrVZduMZI"
      },
      {
        "id": "la-posada-de-los-muertos",
        "title": "La Posada de los Muertos",
        "year": 2005,
        "youtubeId": "iL7s-Tyip50"
      },
      {
        "id": "la-rosa-de-los-vientos",
        "title": "La Rosa de los Vientos",
        "year": 2003,
        "youtubeId": "pW-Njfe6zcg"
      },
      {
        "id": "hoy-toca-ser-feliz",
        "title": "Hoy Toca Ser Feliz",
        "year": 2005,
        "youtubeId": "abLwErDrwJc"
      },
      {
        "id": "satania",
        "title": "Satania",
        "year": 2000,
        "youtubeId": "cKdPewBVvN0"
      },
      {
        "id": "gaia",
        "title": "Gaia",
        "year": 2003,
        "youtubeId": "539WE7w-5qs"
      },
      {
        "id": "y-ahora-voy-a-salir",
        "title": "Y Ahora Voy a Salir (Ranxeira)",
        "year": 1994,
        "youtubeId": "OVFeNPJICwQ"
      },
      {
        "id": "que-el-viento-sople-a-tu-favor",
        "title": "Que el Viento Sople a tu Favor",
        "year": 1998,
        "youtubeId": "wPx1UQsk2Cw"
      },
      {
        "id": "duerme",
        "title": "Duerme",
        "year": 2005,
        "youtubeId": "dH7wfN8OnIU"
      },
      {
        "id": "requiem",
        "title": "Réquiem",
        "year": 1998,
        "youtubeId": "34MibGCMhmo"
      }
    ]
  },
  {
    "slug": "massacre",
    "name": "Massacre",
    "genres": [
      "Punk rock",
      "Hardcore punk"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Massacre",
    "bio": "Massacre es una banda de rock argentina, pionera en el género denominado skate punk en Hispanoamérica. Originalmente llamados Massacre Palestina, se formaron en Buenos Aires en el año 1986. Se conformó por estudiantes secundarios influidos por bandas de la costa oeste estadounidense, que fusionaban hardcore y punk de fines de los setenta y comienzos de los ochenta.\n\nLa banda es conocida por su actitud basada en la autogestión, y durante muchos años fue considerada como una de las pocas bandas verdaderamente de culto de Argentina, hasta la edición de su sexto disco de estudio, titulado El mamut (2007), que alcanzó gran éxito y permitió que la banda alcanzara masividad a nivel popular, no solo en Argentina, sino también en el resto de Latinoamérica.\n\nTras su primer álbum de estudio, Sol Lucet Omnibus (1992), se rebautizaron como Massacre, debido al atentado a la embajada de Israel en Argentina, para evitar polémicas dada la extrema sensibilidad del momento tras el atentado.",
    "songs": [
      {
        "id": "tanto-amor",
        "title": "Tanto Amor",
        "year": 2011,
        "youtubeId": "E-0JNRDzltc"
      },
      {
        "id": "la-octava-maravilla",
        "title": "La Octava Maravilla",
        "year": 2007,
        "youtubeId": "wGOWrMAQN-k"
      },
      {
        "id": "la-reina-de-marte",
        "title": "La Reina de Marte",
        "year": 2007,
        "youtubeId": "ytaCTtAyHh4"
      },
      {
        "id": "te-leo-al-reves",
        "title": "Te Leo al Revés",
        "year": 1998,
        "youtubeId": "aR8SRFodBi4"
      },
      {
        "id": "nina-dios",
        "title": "Niña Dios",
        "year": 2015,
        "youtubeId": "whGHYCM50SE"
      },
      {
        "id": "divorcio",
        "title": "Divorcio",
        "year": 2009,
        "youtubeId": "xcQ4ZUMAWPQ"
      },
      {
        "id": "te-quiero-tanto",
        "title": "Te Quiero Tanto",
        "year": 2010,
        "youtubeId": "GCwK_xBijZA"
      },
      {
        "id": "tengo-captura",
        "title": "Tengo Captura",
        "year": 2012,
        "youtubeId": "GT0emvxiC2c"
      },
      {
        "id": "el-deseo",
        "title": "El Deseo",
        "year": 2013,
        "youtubeId": "pLw64wmPmME"
      },
      {
        "id": "querida-eugenia",
        "title": "Querida Eugenia",
        "year": 2011,
        "youtubeId": "H-gRpP_YDR8"
      },
      {
        "id": "muneca-roja",
        "title": "Muñeca Roja",
        "year": 2016,
        "youtubeId": "1iHnx7HRfac"
      },
      {
        "id": "nuevo-dia",
        "title": "Nuevo Día",
        "year": 2010,
        "youtubeId": "7hPBcugLq5M"
      },
      {
        "id": "insomnio",
        "title": "Insomnio",
        "year": 2024,
        "youtubeId": "O03naE0mrpc"
      },
      {
        "id": "mariposa",
        "title": "Mariposa",
        "year": 2021,
        "youtubeId": "zdnk09yM8Xc"
      },
      {
        "id": "ella-va",
        "title": "Ella Va",
        "year": 2023,
        "youtubeId": "O_4C4rXXqOI"
      }
    ]
  },
  {
    "slug": "megadeth",
    "name": "Megadeth",
    "genres": [
      "Thrash metal",
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Megadeth",
    "bio": "Megadeth es una banda estadounidense de thrash metal, formada en Los Ángeles, California. Fue fundada en 1983 por Dave Mustaine (vocalista, guitarrista y compositor principal), después de que fuera expulsado de Metallica, donde ocupaba el puesto de guitarrista principal. Es comúnmente mencionada como una de los cuatro grandes del thrash metal, junto a Metallica, Slayer y Anthrax.\n\nMegadeth ha tenido varios cambios en sus componentes, siendo Mustaine el único miembro permanente y el principal compositor; le sigue en duración el bajista y cofundador David Ellefson, que ha participado en la mayoría de sus álbumes y giras musicales. El grupo se disolvió en 2002 después de que Mustaine sufriese una grave lesión en los nervios de su brazo izquierdo como consecuencia de dormirse sobre él, pero tras una intensa terapia física, el guitarrista reunió al grupo musical en 2004. En todo este tiempo, el grupo ha lanzado dieciséis álbumes de estudio, tres EP y dos álbumes en vivo.\n\nMegadeth ha logrado obtener varios discos de platino y de oro (seis seguidos en Estados Unidos), incluido el álbum multiplatino y nominado al Grammy, Countdown to Extinction, en 1992. Ha recibido en total doce nominaciones a los premios Grammy y obtuvo uno en 2017 por la canción «Dystopia» del álbum homónimo. Además, ha figurado varias veces en el top 10 de las listas de Billboard, vendiendo casi 50 millones de copias en todo el mundo.\n\nEl 14 de agosto de 2025, Dave Mustaine anunció que su próximo álbum y gira de 2026 serán los últimos.",
    "songs": [
      {
        "id": "symphony-of-destruction",
        "title": "Symphony of Destruction",
        "year": 1992,
        "youtubeId": "vfpgpf6QVnI"
      },
      {
        "id": "peace-sells",
        "title": "Peace Sells",
        "year": 1986,
        "youtubeId": "rdEupVsL07E"
      },
      {
        "id": "holy-wars-the-punishment-due",
        "title": "Holy Wars... The Punishment Due",
        "year": 1990,
        "youtubeId": "9d4ui9q7eDM"
      },
      {
        "id": "tornado-of-souls",
        "title": "Tornado of Souls",
        "year": 1990,
        "youtubeId": "L8HhOMNrulE"
      },
      {
        "id": "angry-again",
        "title": "Angry Again",
        "year": 1993,
        "youtubeId": "X-hNsEghaXc"
      },
      {
        "id": "sweating-bullets",
        "title": "Sweating Bullets",
        "year": 1993,
        "youtubeId": "aOnKCcjP8Qs"
      },
      {
        "id": "wake-up-dead",
        "title": "Wake Up Dead",
        "year": 1987,
        "youtubeId": "4kSvN1dQjxc"
      },
      {
        "id": "in-my-darkest-hour",
        "title": "In My Darkest Hour",
        "year": 1988,
        "youtubeId": "mW0Ao9r2zkY"
      },
      {
        "id": "hangar-18",
        "title": "Hangar 18",
        "year": 1990,
        "youtubeId": "rUGIocJK9Tc"
      },
      {
        "id": "skin-o-my-teeth",
        "title": "Skin o' My Teeth",
        "year": 1992,
        "youtubeId": "OanHNxT_Nvg"
      },
      {
        "id": "foreclosure-of-a-dream",
        "title": "Foreclosure of a Dream",
        "year": 1992,
        "youtubeId": "RgikGBh6pbI"
      },
      {
        "id": "a-tout-le-monde",
        "title": "A Tout Le Monde",
        "year": 1994,
        "youtubeId": "aU-dKoFZT0A"
      },
      {
        "id": "no-more-mr-nice-guy",
        "title": "No More Mr. Nice Guy",
        "year": 1985,
        "youtubeId": "TN3P37LWXwY"
      },
      {
        "id": "kill-the-king",
        "title": "Kill the King",
        "year": 2004,
        "youtubeId": "Iou2cppd9kQ"
      }
    ]
  },
  {
    "slug": "mercedes-sosa",
    "name": "Mercedes Sosa",
    "genres": [
      "Folclore",
      "Trova"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Mercedes_Sosa",
    "bio": "Haydée Mercedes Sosa (San Miguel de Tucumán, 9 de julio de 1935-Buenos Aires, 4 de octubre de 2009), conocida simplemente como Mercedes Sosa o la Negra Sosa, fue una cantora de música popular argentina, considerada la mayor exponente del folklore argentino. Se la conoció como «la voz de América Latina».\n\nFundadora del movimiento del nuevo cancionero y una de las exponentes de la nueva canción latinoamericana, incursionó en otros géneros como el tango, el rock y el pop. Se definía a sí misma como «cantora» antes que «cantante», siendo una distinción fundamental de la nueva canción latinoamericana de la que ella fue una de las iniciadoras: «Cantante es el que puede y cantor el que debe».\n\nEse ideal fue expresado por Mercedes Sosa en los títulos de álbumes como Canciones con fundamento y Yo no canto por cantar. Entre las interpretaciones con que se ha destacado en el cancionero latinoamericano se encuentran «Al Jardín de la República», «Canción con todos», «Alfonsina y el mar», «Como la cigarra», «Zamba para no morir», «Solo le pido a Dios», «La maza», «Todo cambia», «Duerme negrito» y «Calle angosta».\n\nEntre sus discos se destacaron Canciones con fundamento (1965), Yo no canto por cantar (1966), Mujeres argentinas (1969), Homenaje a Violeta Parra (1971), Cantata sudamericana (1972), Mercedes Sosa interpreta a Atahualpa Yupanqui (1977), Mercedes Sosa en Argentina (1982), Alta fidelidad (1997), su interpretación de la Misa criolla (2000) y Cantora (2009), su último trabajo, lanzado poco antes de su muerte, que es un álbum doble donde interpreta 34 canciones a dúo con destacados cantantes iberoamericanos y cierra con el himno nacional argentino.",
    "songs": [
      {
        "id": "gracias-a-la-vida",
        "title": "Gracias a la Vida",
        "year": 1971,
        "youtubeId": "cIrGQD84F1g"
      },
      {
        "id": "todo-cambia",
        "title": "Todo Cambia",
        "year": 1984,
        "youtubeId": "0khKL3tTOTs"
      },
      {
        "id": "alfonsina-y-el-mar",
        "title": "Alfonsina y el Mar",
        "year": 1969,
        "youtubeId": "eU1Hpc_iqL8"
      },
      {
        "id": "la-maza",
        "title": "La Maza",
        "year": 1993,
        "youtubeId": "2o8_BGnDqRU"
      },
      {
        "id": "como-la-cigarra",
        "title": "Como la Cigarra",
        "year": 1979,
        "youtubeId": "FnxfPBIbcek"
      },
      {
        "id": "cancion-con-todos",
        "title": "Canción con Todos",
        "year": 1970,
        "youtubeId": "icrCSlBGkl0"
      },
      {
        "id": "luna-tucumana",
        "title": "Luna Tucumana",
        "year": 1965,
        "youtubeId": "657mpDNOqNM"
      },
      {
        "id": "solo-le-pido-a-dios",
        "title": "Sólo le Pido a Dios",
        "year": 1985,
        "youtubeId": "Gvyl_zdji2k"
      },
      {
        "id": "volver-a-los-17",
        "title": "Volver a los 17",
        "year": 1982,
        "youtubeId": "hSAUXioMrn8"
      },
      {
        "id": "duerme-negrito",
        "title": "Duerme Negrito",
        "year": 1966,
        "youtubeId": "hdnc95OqNos"
      },
      {
        "id": "balderrama",
        "title": "Balderrama",
        "year": 1965,
        "youtubeId": "bXt4yEpgdzo"
      },
      {
        "id": "cancion-de-las-simples-cosas",
        "title": "Canción de las Simples Cosas",
        "year": 1965,
        "youtubeId": "0cY5oZsxT7U"
      },
      {
        "id": "yo-vengo-a-ofrecer-mi-corazon",
        "title": "Yo Vengo a Ofrecer mi Corazón",
        "year": 1985,
        "youtubeId": "q1laUmcQg38"
      }
    ]
  },
  {
    "slug": "metallica",
    "name": "Metallica",
    "genres": [
      "Heavy metal",
      "Thrash metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Metallica",
    "bio": "Metallica es una banda estadounidense de heavy metal fundada en 1981 en Los Ángeles, aunque ha estado radicada en San Francisco durante la mayor parte de su carrera. Está integrada por el vocalista y guitarrista rítmico James Hetfield, el baterista Lars Ulrich, el guitarrista líder Kirk Hammett, y el bajista Robert Trujillo. Metallica es considerada como una de las bandas comercialmente más exitosas de todos los tiempos, habiendo vendido más de 125 millones de álbumes en todo el mundo.\n\nFue fundada en 1981 en Los Ángeles por Ulrich y Hetfield, a los que se les unirían Ron McGovney y Dave Mustaine. En 1982 McGovney dejó la banda siendo sustituido por Cliff Burton. Al año siguiente Mustaine fue despedido por problemas de comportamiento, siendo reemplazado por Kirk Hammett, exguitarrista de Exodus. En 1986, durante una gira de conciertos, Burton fallece en un accidente mientras viajaba en un autobús en Suecia, lo cual provocó la entrada al grupo de Jason Newsted. En 2001, Newsted abandonó a la banda, siendo reemplazado por Robert Trujillo en 2003.\n\nHasta la fecha, la banda ha publicado once álbumes de estudio, siendo el último de estos 72 Seasons, el cual fue lanzado mundialmente el 14 de abril de 2023. Metallica es considerada parte de los cuatro grandes del thrash metal, junto con Megadeth, Slayer y Anthrax. Además, el grupo ha conseguido numerosos premios musicales, entre los que destacan nueve Grammys, dos premios otorgados por la cadena musical MTV, dos galardones de la Academia de Música Americana y dos premios de la revista Billboard, además de pertenecer desde el año 2009 al Salón de la fama del Rock y poseer una estrella en el paseo de la fama de la revista Kerrang!.",
    "songs": [
      {
        "id": "enter-sandman",
        "title": "Enter Sandman",
        "year": 1991,
        "youtubeId": "CD-E-LDc384"
      },
      {
        "id": "master-of-puppets",
        "title": "Master of Puppets",
        "year": 1986,
        "youtubeId": "hx27NL_iqEM"
      },
      {
        "id": "nothing-else-matters",
        "title": "Nothing Else Matters",
        "year": 1991,
        "youtubeId": "tAGnKpE4NCI"
      },
      {
        "id": "one",
        "title": "One",
        "year": 1988,
        "youtubeId": "WM8bTdBs-cw"
      },
      {
        "id": "for-whom-the-bell-tolls",
        "title": "For Whom the Bell Tolls",
        "year": 1984,
        "youtubeId": "B_HSa1dEL9s"
      },
      {
        "id": "fade-to-black",
        "title": "Fade to Black",
        "year": 1984,
        "youtubeId": "l3EryN4stwQ"
      },
      {
        "id": "seek-and-destroy",
        "title": "Seek and Destroy",
        "year": 1983,
        "youtubeId": "GV5fcV_-MY4"
      },
      {
        "id": "the-unforgiven",
        "title": "The Unforgiven",
        "year": 1991,
        "youtubeId": "DDGhKS6bSAE"
      },
      {
        "id": "sad-but-true",
        "title": "Sad But True",
        "year": 1992,
        "youtubeId": "A8MO7fkZc5o"
      },
      {
        "id": "whiskey-in-the-jar",
        "title": "Whiskey in the Jar",
        "year": 1998,
        "youtubeId": "boanuwUMNNQ"
      },
      {
        "id": "wherever-i-may-roam",
        "title": "Wherever I May Roam",
        "year": 1992,
        "youtubeId": "dHUHxTiPFUU"
      },
      {
        "id": "moth-into-flame",
        "title": "Moth Into Flame",
        "year": 2016,
        "youtubeId": "4tdKl-gTpZg"
      },
      {
        "id": "st-anger",
        "title": "St. Anger",
        "year": 2003,
        "youtubeId": "3rFoGVkZ29w"
      },
      {
        "id": "until-it-sleeps",
        "title": "Until It Sleeps",
        "year": 1996,
        "youtubeId": "F3WIHtOmkBg"
      },
      {
        "id": "the-day-that-never-comes",
        "title": "The Day That Never Comes",
        "year": 2008,
        "youtubeId": "K6AJuRK2NE4"
      }
    ]
  },
  {
    "slug": "michael-jackson",
    "name": "Michael Jackson",
    "genres": [
      "Pop",
      "Rhythm and blues"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Michael_Jackson",
    "bio": "Michael Joseph Jackson fue un cantante, compositor, productor y bailarín estadounidense nacido el 29 de agosto de 1958 en Gary, Indiana, y fallecido el 25 de junio de 2009 en Los Ángeles, California. Apodado el \"Rey del Pop\", sus contribuciones durante más de cuatro décadas en la música y la danza lo convirtieron en una figura internacional en la cultura popular.\n\nJackson comenzó su carrera artística en los años 60 con el grupo The Jackson 5, publicando diez álbumes hasta 1975. A principios de la década de 1980, se convirtió en una figura dominante en la música popular. Sus videoclips revolucionarios rompieron barreras raciales en MTV y transformaron el medio en una herramienta promocional. El álbum Thriller (1982) se convirtió en el más vendido de todos los tiempos con aproximadamente 65 millones de copias vendidas.\n\nJackson fue incluido en el Salón de la Fama del Rock and Roll dos veces y ganó 13 premios Grammy, además de 26 premios American Music. Su legado incluye técnicas de baile innovadoras como el moonwalk y el robot, que influenciaron a numerosos artistas.\n\nSu vida personal fue controversial. En 1993 fue acusado de abuso sexual infantil, caso que se resolvió fuera de corte. En 2005 fue juzgado y absuelto de nuevas acusaciones. Jackson murió por intoxicación aguda de propofol y benzodiazepina, siendo su muerte dictaminada como homicidio involuntario.",
    "songs": [
      {
        "id": "billie-jean",
        "title": "Billie Jean",
        "year": 1983,
        "youtubeId": "Zi_XLOBDo_Y"
      },
      {
        "id": "thriller",
        "title": "Thriller",
        "year": 1983,
        "youtubeId": "sOnqjkJTMaA"
      },
      {
        "id": "beat-it",
        "title": "Beat It",
        "year": 1983,
        "youtubeId": "oRdxUFDoQe0"
      },
      {
        "id": "bad",
        "title": "Bad",
        "year": 1987,
        "youtubeId": "dsUXAEzaC3Q"
      },
      {
        "id": "black-or-white",
        "title": "Black or White",
        "year": 1991,
        "youtubeId": "F2AitTPI5U0"
      },
      {
        "id": "man-in-the-mirror",
        "title": "Man in the Mirror",
        "year": 1988,
        "youtubeId": "PivWY9wn5ps"
      },
      {
        "id": "rock-with-you",
        "title": "Rock with You",
        "year": 1979,
        "youtubeId": "5X-Mrc2l1d0"
      },
      {
        "id": "the-way-you-make-me-feel",
        "title": "The Way You Make Me Feel",
        "year": 1987,
        "youtubeId": "HzZ_urpj4As"
      },
      {
        "id": "remember-the-time",
        "title": "Remember the Time",
        "year": 1992,
        "youtubeId": "LeiFF0gvqcc"
      },
      {
        "id": "human-nature",
        "title": "Human Nature",
        "year": 1983,
        "youtubeId": "YNzuiRuQNYY"
      },
      {
        "id": "dont-stop-til-you-get-enough",
        "title": "Don't Stop 'Til You Get Enough",
        "year": 1979,
        "youtubeId": "yURRmWtbTbo"
      },
      {
        "id": "you-are-not-alone",
        "title": "You Are Not Alone",
        "year": 1995,
        "youtubeId": "pAyKJAtDNCw"
      },
      {
        "id": "heal-the-world",
        "title": "Heal the World",
        "year": 1991,
        "youtubeId": "BWf-eARnf6U"
      },
      {
        "id": "earth-song",
        "title": "Earth Song",
        "year": 1995,
        "youtubeId": "XAi3VTSdTxU"
      },
      {
        "id": "they-dont-care-about-us",
        "title": "They Don't Care About Us",
        "year": 1996,
        "youtubeId": "QNJL6nfu__Q"
      }
    ]
  },
  {
    "slug": "muse",
    "name": "Muse",
    "genres": [
      "Rock alternativo",
      "Rock progresivo",
      "Art rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Muse",
    "bio": "Muse es una banda de rock formada en 1994 en Teignmouth, Devon (Inglaterra). Desde su formación, sus integrantes son: Matt Bellamy (voz, guitarra, piano, composición), Christopher Wolstenholme (bajo, coros) y Dominic Howard (batería, percusión).\n\nLa banda es conocida por sus extravagantes espectáculos en vivo, por fusionar el rock con otros géneros musicales, y por sus temáticas de conspiración global, revoluciones, vida extraterrestre, apocalipsis y existencialismo, entre otras cosas.\n\nHasta el día de hoy, Muse ha lanzado diez álbumes de estudio: Showbiz (1999), Origin of Symmetry (2001), Absolution (2003), Black Holes and Revelations (2006), The Resistance (2009), The 2nd Law (2012), Drones (2015), Simulation Theory (2018), Will of the People (2022) y The Wow! Signal (2026). También han publicado tres álbumes en vivo: Hullabaloo Soundtrack (2001), el cual también contiene una compilación de lados B; HAARP (2008), que documenta las presentaciones de la banda en el Estadio de Wembley en 2007; Live at Rome Olympic Stadium (2013), una presentación ante más de 60.000 personas en el Estadio Olímpico de Roma; Simulation Theory film filmado en agosto de 2019 en el O2 Arena de Londres y estrenado un año más tarde en cines IMAX.\n\nMuse han ganado diversos premios, incluyendo dos Premios Grammy por \"Mejor Álbum de Rock\" por The Resistance (2011) y Drones (2016). A fecha de 2022, han vendido más de 30 millones de álbumes en todo el mundo.",
    "songs": [
      {
        "id": "supermassive-black-hole",
        "title": "Supermassive Black Hole",
        "year": 2006,
        "youtubeId": "Xsp3_a-PMTw"
      },
      {
        "id": "uprising",
        "title": "Uprising",
        "year": 2009,
        "youtubeId": "w8KQmps-Sog"
      },
      {
        "id": "starlight",
        "title": "Starlight",
        "year": 2006,
        "youtubeId": "Pgum6OT_VH8"
      },
      {
        "id": "hysteria",
        "title": "Hysteria",
        "year": 2003,
        "youtubeId": "3dm_5qWWDV8"
      },
      {
        "id": "madness",
        "title": "Madness",
        "year": 2012,
        "youtubeId": "Ek0SgwWmF9w"
      },
      {
        "id": "time-is-running-out",
        "title": "Time Is Running Out",
        "year": 2003,
        "youtubeId": "O2IuJPh6h_A"
      },
      {
        "id": "knights-of-cydonia",
        "title": "Knights of Cydonia",
        "year": 2006,
        "youtubeId": "G_sBOsh-vyI"
      },
      {
        "id": "psycho",
        "title": "Psycho",
        "year": 2015,
        "youtubeId": "UqLRqzTp6Rk"
      },
      {
        "id": "undisclosed-desires",
        "title": "Undisclosed Desires",
        "year": 2009,
        "youtubeId": "R8OOWcsFj0U"
      },
      {
        "id": "plug-in-baby",
        "title": "Plug In Baby",
        "year": 2001,
        "youtubeId": "dbB-mICjkQM"
      },
      {
        "id": "feeling-good",
        "title": "Feeling Good",
        "year": 2001,
        "youtubeId": "CmwRQqJsegw"
      },
      {
        "id": "resistance",
        "title": "Resistance",
        "year": 2009,
        "youtubeId": "TPE9uSFFxrI"
      },
      {
        "id": "stockholm-syndrome",
        "title": "Stockholm Syndrome",
        "year": 2003,
        "youtubeId": "gXN9acC9edU"
      },
      {
        "id": "new-born",
        "title": "New Born",
        "year": 2001,
        "youtubeId": "qhduQhDqtb4"
      },
      {
        "id": "dead-inside",
        "title": "Dead Inside",
        "year": 2015,
        "youtubeId": "I5sJhSNUkwQ"
      }
    ]
  },
  {
    "slug": "nirvana",
    "name": "Nirvana",
    "genres": [
      "Grunge",
      "Rock alternativo",
      "Punk rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Nirvana_(banda)",
    "bio": "Nirvana fue una banda de rock estadounidense formada por el vocalista y guitarrista Kurt Cobain y el bajista Krist Novoselic en Aberdeen (Washington) en 1987. La banda pasó por una sucesión de bateristas, siendo Chad Channing quien más tiempo permaneció hasta que en 1990 fue sustituido por Dave Grohl, su baterista definitivo. El éxito de la banda popularizó el rock alternativo y a menudo son considerados la banda más representativa de la Generación X. A pesar de contar con una corta carrera profesional que duró sólo siete años, su música sigue siendo popular y continúa influyendo en el rock moderno.\n\nA fines de la década de 1980, Nirvana formaba parte de la escena grunge de Seattle antes de lanzar su primer álbum, Bleach, en el sello discográfico independiente SubPop en 1989. Parte del sonido característico de muchas de sus canciones se basaba en estructuras que alternaban estrofas musicalmente tranquilas con estribillos más ruidosos y contundentes. Después de firmar con el sello discográfico DGC Records en 1991, Nirvana encontró un inesperado éxito comercial con \"Smells Like Teen Spirit\", el primer sencillo de su histórico segundo álbum Nevermind de 1991. El disco fue un fenómeno cultural de la década de 1990, certificado disco de diamante por la Asociación de la industria discográfica estadounidense (RIAA). A su éxito también se le atribuye el fin del dominio del hair metal dentro del hard rock.\n\nCaracterizados por su estética grunge, su fusión de melodías pop con noise rock y sus letras sobre alienación social les dieron popularidad mundial. Después de extensas giras y del lanzamiento del álbum recopilatorio Incesticide y del EP Hormoaning en 1992, la banda publicó su muy esperado tercer álbum de estudio, In Utero en 1993. El disco encabezó las listas de álbumes de Estados Unidos, Reino Unido y otros países y fue aclamado por la crítica. Nirvana se disolvió tras el suicidio de Cobain en abril de 1994. Novoselic, Grohl y la viuda de Cobain, Courtney Love, han supervisado varios lanzamientos póstumos.",
    "songs": [
      {
        "id": "smells-like-teen-spirit",
        "title": "Smells Like Teen Spirit",
        "year": 1991,
        "youtubeId": "hTWKbfoikeg"
      },
      {
        "id": "come-as-you-are",
        "title": "Come As You Are",
        "year": 1991,
        "youtubeId": "vabnZ9-ex7o"
      },
      {
        "id": "heart-shaped-box",
        "title": "Heart-Shaped Box",
        "year": 1993,
        "youtubeId": "n6P0SitRwy8"
      },
      {
        "id": "lithium",
        "title": "Lithium",
        "year": 1991,
        "youtubeId": "pkcJEvMcnEg"
      },
      {
        "id": "in-bloom",
        "title": "In Bloom",
        "year": 1991,
        "youtubeId": "PbgKEjNBHqM"
      },
      {
        "id": "about-a-girl",
        "title": "About a Girl",
        "year": 1989,
        "youtubeId": "AhcttcXcRYY"
      },
      {
        "id": "all-apologies",
        "title": "All Apologies",
        "year": 1993,
        "youtubeId": "aWmkuH1k7uA"
      },
      {
        "id": "polly",
        "title": "Polly",
        "year": 1991,
        "youtubeId": "DrlaVYKWeLU"
      },
      {
        "id": "breed",
        "title": "Breed",
        "year": 1991,
        "youtubeId": "J6EDW5WFb2M"
      },
      {
        "id": "dumb",
        "title": "Dumb",
        "year": 1993,
        "youtubeId": "4YFu4dvMHHY"
      },
      {
        "id": "rape-me",
        "title": "Rape Me",
        "year": 1993,
        "youtubeId": "_u0kDNOSjPI"
      },
      {
        "id": "on-a-plain",
        "title": "On a Plain",
        "year": 1991,
        "youtubeId": "c023U4oQGr4"
      },
      {
        "id": "where-did-you-sleep-last-night",
        "title": "Where Did You Sleep Last Night",
        "year": 1993,
        "youtubeId": "hEMm7gxBYSc"
      },
      {
        "id": "drain-you",
        "title": "Drain You",
        "year": 1991,
        "youtubeId": "AJUpHxlJUNQ"
      },
      {
        "id": "something-in-the-way",
        "title": "Something in the Way",
        "year": 1991,
        "youtubeId": "4VxdufqB9zg"
      }
    ]
  },
  {
    "slug": "pappos-blues",
    "name": "Pappo's Blues",
    "genres": [
      "Blues rock",
      "Hard rock",
      "Rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Pappo%27s_Blues",
    "bio": "Pappo's Blues fue un grupo musical de hard rock argentino liderado por el vocalista y guitarrista del grupo Pappo, que tuvo diferentes formaciones y reencuentros entre 1970 y 1999, y que grabó nueve álbumes de estudio.",
    "songs": [
      {
        "id": "el-hombre-suburbano",
        "title": "El Hombre Suburbano",
        "year": 1971,
        "youtubeId": "yjecye6ydlI"
      },
      {
        "id": "adonde-esta-la-libertad",
        "title": "Adónde Está la Libertad",
        "year": 1971,
        "youtubeId": "tBK9gaCjIdM"
      },
      {
        "id": "algo-ha-cambiado",
        "title": "Algo Ha Cambiado",
        "year": 1971,
        "youtubeId": "dEbRUAZLAd4"
      },
      {
        "id": "el-viejo",
        "title": "El Viejo",
        "year": 1971,
        "youtubeId": "YYaWtNOyjwY"
      },
      {
        "id": "solitario-juan",
        "title": "Solitario Juan",
        "year": 1972,
        "youtubeId": "2mveljrVkvA"
      },
      {
        "id": "llegara-la-paz",
        "title": "Llegará la Paz",
        "year": 1972,
        "youtubeId": "8TzAtq7MP-Q"
      },
      {
        "id": "caras-en-el-parque",
        "title": "Caras en el Parque",
        "year": 1973,
        "youtubeId": "fZW703H87p4"
      },
      {
        "id": "sandwiches-de-miga",
        "title": "Sandwiches de Miga",
        "year": 1973,
        "youtubeId": "7qyBEdJHjzQ"
      },
      {
        "id": "blues-de-santa-fe",
        "title": "Blues de Santa Fe",
        "year": 1972,
        "youtubeId": "TS8PCW_09-M"
      },
      {
        "id": "el-tren-de-las-16",
        "title": "El Tren de las 16",
        "year": 1972,
        "youtubeId": "q9dsKeORv14"
      },
      {
        "id": "insoluble",
        "title": "Insoluble",
        "year": 1972,
        "youtubeId": "mAmd3-VsSJI"
      },
      {
        "id": "desconfio",
        "title": "Desconfío",
        "year": 1972,
        "youtubeId": "hYgmT91EXlY"
      },
      {
        "id": "trabajando-en-el-ferrocarril",
        "title": "Trabajando en el Ferrocarril",
        "year": 1972,
        "youtubeId": "M6JvD0P_lBo"
      },
      {
        "id": "rock-and-roll-y-fiebre",
        "title": "Rock And Roll y Fiebre",
        "year": 1973,
        "youtubeId": "0W4bQ2NWGzI"
      },
      {
        "id": "pajaro-metalico",
        "title": "Pájaro Metálico",
        "year": 1973,
        "youtubeId": "6xt7lN4BO-4"
      }
    ]
  },
  {
    "slug": "patricio-rey-y-sus-redonditos-de-ricota",
    "name": "Patricio Rey y sus Redonditos de Ricota",
    "genres": [
      "Rock alternativo",
      "Hard rock",
      "Blues rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Patricio_Rey_y_sus_Redonditos_de_Ricota",
    "bio": "Patricio Rey y sus Redonditos de Ricota, también conocidos como Los Redondos, fue un grupo musical de rock argentino formado en La Plata en el año 1976 e integrado, en la mayor parte de su carrera, por el Indio Solari (voz y composición), Skay Beilinson (guitarra y composición), Semilla Bucciarelli (bajo), Walter Sidotti (batería) y Sergio Dawi (saxofón, armónica y piano). Son considerados uno de los fenómenos populares más importantes en la historia de la música de Argentina por la masiva convocatoria de sus actuaciones en vivo a partir de los años noventa, así como también una de las bandas más destacadas del rock nacional por su sonido, que incorporó elementos de post punk, new wave y rock alternativo, junto a sus letras que mezclaban poesía oscura y contracultural con críticas sociopolíticas sobre la vida de individuos pertenecientes a grupos marginales de la Argentina post-dictadura.\n\nOriginarios de la escena underground platense, comenzaron sus actuaciones en vivo en 1977 como una exhibición de rock teatral, con toda una troupe circense de monologuistas, payasos y bailarinas, que entre canciones subían al escenario a hacer sus números. Progresivamente fueron dejando de lado los números teatrales, algo que terminaron de descartar tras la recepción de su álbum debut, Gulp! (1985), donde se establecieron únicamente como un grupo musical. En la segunda mitad de los años ochenta tuvieron un ascenso categórico con Oktubre (1986), Un baión para el ojo idiota (1988) y ¡Bang! ¡Bang! Estás liquidado (1989). Ya en la década de 1990 se convirtieron en un fenómeno con conciertos en estadios cada vez más masivos, apodados \"misas ricoteras\", mientras publicaban discos como Lobo suelto, cordero atado (1993) y Luzbelito (1996). La violencia en los recitales y la represión policial fueron en aumento, con incidentes como la muerte de Walter Bulacio en 1991, lo que llevó a la banda a alejarse de Buenos Aires. A fines de siglo adoptaron un sonido de rock electrónico en Último bondi a Finisterre (1998) y Momo Sampler (2000), y llegaron a su clímax de convocatoria en abril de 2000 con 70 mil asistentes en el Estadio Monumental. El desgaste por la violencia crónica en sus recitales, sumado a diferencias artísticas entre sus miembros, llevó a que en noviembre de 2001 la banda anunciara su separación.\n\nLa banda recibió la aclamación de la crítica, ganando el Diploma al Mérito de la Fundación Konex en 1995 y 2005, y el Premio Konex de Platino a la mejor banda argentina de rock de la década en 2005, compartido con Divididos. En 2007 la revista Rolling Stone Argentina incluyó sus álbumes Luzbelito, ¡Bang! ¡Bang! Estás liquidado y Oktubre entre los 100 mejores álbumes de rock argentino de la historia.",
    "songs": [
      {
        "id": "jijiji",
        "title": "Jijiji",
        "year": 1986,
        "youtubeId": "CnJqYsSOgfg"
      },
      {
        "id": "juguetes-perdidos",
        "title": "Juguetes Perdidos",
        "year": 1996,
        "youtubeId": "U6lI8FkG8UI"
      },
      {
        "id": "la-bestia-pop",
        "title": "La Bestia Pop",
        "year": 1993,
        "youtubeId": "PAq7xAqXTxk"
      },
      {
        "id": "todo-un-palo",
        "title": "Todo un Palo",
        "year": 1988,
        "youtubeId": "XhYiBaYux4Y"
      },
      {
        "id": "motorpsico",
        "title": "Motorpsico",
        "year": 1986,
        "youtubeId": "6mFGt0UgA_w"
      },
      {
        "id": "el-pibe-de-los-astilleros",
        "title": "El Pibe de los Astilleros",
        "year": 1984,
        "youtubeId": "DRf5Nzgq3Lk"
      },
      {
        "id": "esa-estrella-era-mi-lujo",
        "title": "Esa Estrella Era Mi Lujo",
        "year": 1993,
        "youtubeId": "SePSMFlQcek"
      },
      {
        "id": "etiqueta-negra",
        "title": "Etiqueta Negra",
        "year": 1987,
        "youtubeId": "I-93xIHakJs"
      },
      {
        "id": "vencedores-vencidos",
        "title": "Vencedores Vencidos",
        "year": 1996,
        "youtubeId": "17Bz8rNJNsQ"
      },
      {
        "id": "un-angel-para-tu-soledad",
        "title": "Un Ángel Para Tu Soledad",
        "year": 2000,
        "youtubeId": "usC1r3DVbIY"
      },
      {
        "id": "ropa-sucia",
        "title": "Ropa Sucia",
        "year": 1989,
        "youtubeId": "-C5fVDXmOYU"
      },
      {
        "id": "un-poco-de-amor-frances",
        "title": "Un Poco de Amor Francés",
        "year": 1987,
        "youtubeId": "WlFLpKaC4_c"
      },
      {
        "id": "masacre-en-el-puticlub",
        "title": "Masacre en el Puticlub",
        "year": 1996,
        "youtubeId": "KwuRcvYWbFs"
      },
      {
        "id": "gualicho",
        "title": "Gualicho",
        "year": 1998,
        "youtubeId": "jhjbYUBJLVE"
      },
      {
        "id": "preso-en-mi-ciudad",
        "title": "Preso en mi Ciudad",
        "year": 1985,
        "youtubeId": "7ucP8NOtVtM"
      }
    ]
  },
  {
    "slug": "pearl-jam",
    "name": "Pearl Jam",
    "genres": [
      "Grunge",
      "Hard rock",
      "Rock alternativo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Pearl_Jam",
    "bio": "Pearl Jam es un grupo de grunge formado en Seattle, Estados Unidos, en el año 1990, con integrantes de las bandas Mother Love Bone y Temple of the Dog.\n\nCon la edición de su álbum debut \"Ten\" en 1991, Pearl Jam irrumpiría con fuerza en el ámbito musical alternativo. Junto a Nirvana, Alice in Chains, Stone Temple Pilots y Soundgarden están considerados como una de las bandas más grandes e influyentes de toda la escena del movimiento Grunge.\n\nSus miembros fundadores, y que aún siguen en el grupo, son: Stone Gossard (guitarra rítmica), Jeff Ament (bajo) -ambos de Green River y Mother Love Bone-, Mike McCready (guitarra principal) y Eddie Vedder (voz). Todos ellos participaron en Temple of the Dog con Chris Cornell y Matt Cameron, de Soundgarden.\n\nPese a ser reconocidos como uno de los grupos más importantes e influyentes del grunge, Pearl Jam siempre destacó por un \"rock con toques más melódicos e influencias de grupos de rock de los años 1960 y 70 como The Who, Led Zeppelin o The Doors\". Sus miembros siempre se han caracterizado por su rechazo a determinadas prácticas comunes en la industria musical, como por ejemplo la realización de vídeos promocionales; también es conocido su boicot a la empresa Ticketmaster.",
    "songs": [
      {
        "id": "alive",
        "title": "Alive",
        "year": 1991,
        "youtubeId": "qM0zINtulhM"
      },
      {
        "id": "even-flow",
        "title": "Even Flow",
        "year": 1991,
        "youtubeId": "CxKWTzr-k6s"
      },
      {
        "id": "jeremy",
        "title": "Jeremy",
        "year": 1991,
        "youtubeId": "MS91knuzoOA"
      },
      {
        "id": "black",
        "title": "Black",
        "year": 1991,
        "youtubeId": "qgaRVvAKoqQ"
      },
      {
        "id": "better-man",
        "title": "Better Man",
        "year": 1994,
        "youtubeId": "nDK-wsdEhNE"
      },
      {
        "id": "daughter",
        "title": "Daughter",
        "year": 1993,
        "youtubeId": "zgUwd2Gkb-E"
      },
      {
        "id": "yellow-ledbetter",
        "title": "Yellow Ledbetter",
        "year": 1992,
        "youtubeId": "iYtBMgLfqKQ"
      },
      {
        "id": "given-to-fly",
        "title": "Given to Fly",
        "year": 1998,
        "youtubeId": "satY_ofTNo4"
      },
      {
        "id": "do-the-evolution",
        "title": "Do the Evolution",
        "year": 1998,
        "youtubeId": "aDaOgu2CQtI"
      },
      {
        "id": "elderly-woman-behind-the-counter-in-a-small-town",
        "title": "Elderly Woman Behind the Counter in a Small Town",
        "year": 1993,
        "youtubeId": "4YFYNUu_sqE"
      },
      {
        "id": "last-kiss",
        "title": "Last Kiss",
        "year": 1999,
        "youtubeId": "tNDWJ_KDkAc"
      },
      {
        "id": "wishlist",
        "title": "Wishlist",
        "year": 1998,
        "youtubeId": "PH9KBA5D8T0"
      },
      {
        "id": "just-breathe",
        "title": "Just Breathe",
        "year": 2009,
        "youtubeId": "_7ioE4wRil8"
      },
      {
        "id": "nothingman",
        "title": "Nothingman",
        "year": 1994,
        "youtubeId": "xiNpezXV3ck"
      },
      {
        "id": "rearviewmirror",
        "title": "Rearviewmirror",
        "year": 1993,
        "youtubeId": "eHX_q86-Zpc"
      }
    ]
  },
  {
    "slug": "pescado-rabioso",
    "name": "Pescado Rabioso",
    "genres": [
      "Hard rock",
      "Blues rock",
      "Rock psicodélico"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Pescado_Rabioso",
    "bio": "Pescado Rabioso fue un grupo musical argentino de rock formado en 1971 e integrado, primordialmente, por Luis Alberto Spinetta, David Lebón, Black Amaya y Carlos Cutaia. Es considerado uno de los grupos fundacionales del rock argentino, por haber introducido hard rock, blues y rock psicodélico a la escena nacional.\n\nInspirados por el grupo Pappo's Blues y el rock psicodélico que copaba por esa época la escena nacional, y con el que Spinetta se había familiarizado en su reciente viaje a Inglaterra y Países Bajos, Pescado Rabioso publicó su álbum de estudio debut Desatormentándonos en 1972. Dos canciones del álbum han sido ubicadas entre las mejores 100 del rock argentino según Rolling Stone y MTV: «Me gusta ese tajo» (n.º 57), y «El monstruo de la laguna (Algo flota en la laguna)» (n.º 61). El segundo y último disco de la banda, Pescado 2 (1973), es considerado por la revista Rolling Stone como el 19.º mejor álbum de la historia del rock argentino. En ese mismo año, se publicó Artaud bajo el nombre de la agrupación, aunque se trató de un trabajo solista de Spinetta, ya que para ese entonces la banda ya se había disuelto.",
    "songs": [
      {
        "id": "blues-de-cris",
        "title": "Blues de Cris",
        "year": 1972,
        "youtubeId": "0n0hbrNSOLA"
      },
      {
        "id": "cementerio-club",
        "title": "Cementerio Club",
        "year": 1973,
        "youtubeId": "o_ihiAXyzjg"
      },
      {
        "id": "todas-las-hojas-son-del-viento",
        "title": "Todas las Hojas Son del Viento",
        "year": 1973,
        "youtubeId": "kHUrr8ZHe7U"
      },
      {
        "id": "post-crucifixion",
        "title": "Post-Crucifixión",
        "year": 1972,
        "youtubeId": "0vtl9K4-JCk"
      },
      {
        "id": "supercheria",
        "title": "Superchería",
        "year": 1973,
        "youtubeId": "oprQ5EKnqTw"
      },
      {
        "id": "cantata-de-puentes-amarillos",
        "title": "Cantata de Puentes Amarillos",
        "year": 1973,
        "youtubeId": "TfdUyVCs0k8"
      },
      {
        "id": "bajan",
        "title": "Bajan",
        "year": 1972,
        "youtubeId": "pVD4xTf0EWU"
      },
      {
        "id": "a-starosta-el-idiota",
        "title": "A Starosta, el Idiota",
        "year": 1973,
        "youtubeId": "Hse04iEhPzE"
      },
      {
        "id": "credulidad",
        "title": "Credulidad",
        "year": 1973,
        "youtubeId": "2sKbipngkEs"
      },
      {
        "id": "despiertate-nena",
        "title": "Despiértate Nena",
        "year": 1972,
        "youtubeId": "Ah_s3aZ20i0"
      },
      {
        "id": "la-sed-verdadera",
        "title": "La Sed Verdadera",
        "year": 1973,
        "youtubeId": "rKqXIYJQKIE"
      },
      {
        "id": "las-habladurias-del-mundo",
        "title": "Las Habladurías del Mundo",
        "year": 1973,
        "youtubeId": "4Ur-drrnluM"
      }
    ]
  },
  {
    "slug": "pink-floyd",
    "name": "Pink Floyd",
    "genres": [
      "Rock progresivo",
      "Rock psicodélico",
      "Art rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Pink_Floyd",
    "bio": "Pink Floyd es una banda de rock británica, fundada en Londres en 1965. Es considerada un ícono cultural del siglo XX y una de las bandas más influyentes, exitosas y aclamadas en la historia de la música popular. Obtuvo gran popularidad dentro del circuito underground gracias a su música psicodélica y espacial, que, con el paso del tiempo, evolucionó hacia el rock progresivo y el rock sinfónico adquiriendo la popularidad con la que hoy son recordados. Es conocida por sus canciones de alto contenido filosófico junto a la experimentación sonora, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo.\n\nSus ventas sobrepasan los 280 millones de álbumes vendidos en todo el mundo, 97,5 millones de ellos solamente en los Estados Unidos, convirtiéndose en una de las bandas con más ventas en la historia.\n\nInicialmente el grupo estaba formado por el baterista Nick Mason, el tecladista y vocalista Richard Wright, el bajista y vocalista Roger Waters y el guitarrista y vocalista principal Syd Barrett. El errático comportamiento de Barrett, causado por el excesivo consumo de drogas, hizo que en diciembre de 1967 David Gilmour se incorporara al grupo. Unos meses después, Barrett abandonó, y con el cuarteto formado por Mason, Wright, Waters y Gilmour quedó establecida la formación definitiva del grupo.",
    "songs": [
      {
        "id": "another-brick-in-the-wall-pt-2",
        "title": "Another Brick in the Wall, Pt. 2",
        "year": 1979,
        "youtubeId": "HrxX9TBj2zY"
      },
      {
        "id": "wish-you-were-here",
        "title": "Wish You Were Here",
        "year": 1975,
        "youtubeId": "K6qj09OHvjw"
      },
      {
        "id": "comfortably-numb",
        "title": "Comfortably Numb",
        "year": 1979,
        "youtubeId": "_FrOQC-zEog"
      },
      {
        "id": "money",
        "title": "Money",
        "year": 1973,
        "youtubeId": "-0kcet4aPpQ"
      },
      {
        "id": "breathe-in-the-air",
        "title": "Breathe (In the Air)",
        "year": 1973,
        "youtubeId": "jcz0YxYl6Ac"
      },
      {
        "id": "time",
        "title": "Time",
        "year": 1973,
        "youtubeId": "Qr0-7Ds79zo"
      },
      {
        "id": "the-great-gig-in-the-sky",
        "title": "The Great Gig in the Sky",
        "year": 1973,
        "youtubeId": "2PMnJ_Luk_o"
      },
      {
        "id": "hey-you",
        "title": "Hey You",
        "year": 1979,
        "youtubeId": "pPrte-OhUh4"
      },
      {
        "id": "shine-on-you-crazy-diamond",
        "title": "Shine On You Crazy Diamond",
        "year": 1975,
        "youtubeId": "4oK1Jco6JFM"
      },
      {
        "id": "brain-damage",
        "title": "Brain Damage",
        "year": 1973,
        "youtubeId": "QFdkM40KOhE"
      },
      {
        "id": "us-and-them",
        "title": "Us and Them",
        "year": 1973,
        "youtubeId": "HoLhKJuGhK0"
      },
      {
        "id": "learning-to-fly",
        "title": "Learning to Fly",
        "year": 1987,
        "youtubeId": "nVhNCTH8pDs"
      },
      {
        "id": "mother",
        "title": "Mother",
        "year": 1979,
        "youtubeId": "o7MlC_Qrmmc"
      },
      {
        "id": "young-lust",
        "title": "Young Lust",
        "year": 1979,
        "youtubeId": "GRsLPoNNV64"
      },
      {
        "id": "eclipse",
        "title": "Eclipse",
        "year": 1973,
        "youtubeId": "7-mFsGm1uvQ"
      }
    ]
  },
  {
    "slug": "poison",
    "name": "Poison",
    "genres": [
      "Glam metal",
      "Hard rock",
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Poison_(banda)",
    "bio": "Poison es una banda estadounidense de Glam metal formada en 1983 en Mechanicsburg, Pensilvania. La formación más exitosa de la banda está conformada por el cantante principal y guitarrista rítmico Bret Michaels, el baterista Rikki Rockett, el bajista y pianista Bobby Dall, y el guitarrista principal y corista C.C. DeVille. La banda logró un gran éxito comercial desde mediados de la década de 1980 hasta mediados de la década de 1990 con ventas de más de 40 millones de discos y DVD en todo el mundo.\n\nLa banda es principalmente conocida por el sencillo número uno del Billboard Hot 100 «Every Rose Has Its Thorn», y por otros sencillos exitosos dentro del Top 40 entre las décadas de 1980 y 1990. Su álbum debut Look What the Cat Dragged In (1986) fue multiplatino, seguido por Open Up and Say... Ahh! (1988), certificado cinco veces platino, y el más vendido Flesh & Blood (1990). El grupo ha publicado siete álbumes de estudio, cuatro álbumes en vivo, cinco álbumes recopilatorios y 28 sencillos radiales desde su debut en 1986.",
    "songs": [
      {
        "id": "every-rose-has-its-thorn",
        "title": "Every Rose Has Its Thorn",
        "year": 1988,
        "youtubeId": "j2r2nDhTzO4"
      },
      {
        "id": "nothin-but-a-good-time",
        "title": "Nothin' But a Good Time",
        "year": 1988,
        "youtubeId": "_88L-CU7PD4"
      },
      {
        "id": "talk-dirty-to-me",
        "title": "Talk Dirty to Me",
        "year": 1986,
        "youtubeId": "xCChxBSRo1Y"
      },
      {
        "id": "unskinny-bop",
        "title": "Unskinny Bop",
        "year": 1990,
        "youtubeId": "Xk5y4wvsLyY"
      },
      {
        "id": "fallen-angel",
        "title": "Fallen Angel",
        "year": 1988,
        "youtubeId": "AelpbAegA-4"
      },
      {
        "id": "something-to-believe-in",
        "title": "Something to Believe In",
        "year": 1990,
        "youtubeId": "G5uamDMoW4o"
      },
      {
        "id": "i-wont-forget-you",
        "title": "I Won't Forget You",
        "year": 1986,
        "youtubeId": "BJJ_HJ-9JNM"
      },
      {
        "id": "ride-the-wind",
        "title": "Ride the Wind",
        "year": 1990,
        "youtubeId": "juhBVAnLkHk"
      },
      {
        "id": "your-mama-dont-dance",
        "title": "Your Mama Don't Dance",
        "year": 1990,
        "youtubeId": "aB5JRS6JOck"
      },
      {
        "id": "life-goes-on",
        "title": "Life Goes On",
        "year": 1988,
        "youtubeId": "iOyleR-jQGk"
      },
      {
        "id": "look-what-the-cat-dragged-in",
        "title": "Look What the Cat Dragged In",
        "year": 1986,
        "youtubeId": "kPAlXQeaaKw"
      },
      {
        "id": "i-want-action",
        "title": "I Want Action",
        "year": 1986,
        "youtubeId": "GHcDX1C-J30"
      },
      {
        "id": "cry-tough",
        "title": "Cry Tough",
        "year": 1986,
        "youtubeId": "fOzdT_sAeDE"
      },
      {
        "id": "stand",
        "title": "Stand",
        "year": 1993,
        "youtubeId": "F3hmgkPYUuk"
      }
    ]
  },
  {
    "slug": "queen",
    "name": "Queen",
    "genres": [
      "Hard rock",
      "Glam rock",
      "Art rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Queen",
    "bio": "Queen es una banda británica de rock formada en 1970 en Londres (Reino Unido) integrada originalmente por el cantante y pianista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon (el cual llegaría un año después al grupo para completar la formación clásica). Sus primeros trabajos estuvieron influenciados por el rock progresivo y el hard rock, pero la banda se aventuró gradualmente en trabajos más convencionales y amigables con la radio, incorporando más estilos como el arena rock y el pop rock.\n\nAntes de formar Queen, May y Taylor habían tocado juntos en la banda Smile. Mercury se apegó a la banda y les animó a experimentar con técnicas escénicas y de grabación más elaboradas. Se unió en 1970 y sugirió el nombre de «Queen». Deacon fue reclutado en febrero de 1971, antes de que la banda lanzara su álbum debut homónimo en 1973. Queen apareció por primera vez en las listas de éxitos del Reino Unido con su segundo álbum, Queen II, en 1974. Sheer Heart Attack más tarde ese año y A Night at the Opera en 1975 trajeron con ellos, el éxito internacional. Este último presentó «Bohemian Rhapsody», que se mantuvo en el número uno en el Reino Unido durante nueve semanas y ayudó a popularizar el formato de vídeo musical.\n\nEl álbum de 1977 de la banda, News of the World, contenía «We Will Rock You» y «We Are the Champions», que se han convertido en himnos en los eventos deportivos. A principios de la década de 1980, Queen era una de las bandas de arena rock más importantes del mundo. «Another One Bites the Dust» de The Game (1980) se convirtió en su sencillo más vendido, mientras que su álbum recopilatorio de 1981 Greatest Hits es uno de los álbumes más vendidos a nivel mundial con más de 50 millones de copias. En el Reino Unido es el álbum más vendido con más de 7 millones de copias y está certificado como nueve veces platino en los EE. UU. Su actuación en el concierto Live Aid de 1985 y su concierto en Wembley Stadium en 1986 están clasificadas entre las mejores recitaciones de la historia del rock por varias publicaciones. En agosto de 1986, Freddie Mercury dio su última actuación con Queen en Knebworth, Inglaterra. En 1991 murió de bronconeumonía, una complicación del sida. Deacon se retiró en 1997. Desde 2004, May y Taylor han realizado giras como «Queen +», con los vocalistas Paul Rodgers y Adam Lambert.\n\nQueen ha tenido una presencia global en la cultura popular durante más de cinco décadas. Las estimaciones de sus ventas de discos oscilan entre 250 y 300 millones, lo que los convierten en unos de los artistas musicales con más ventas del mundo. En 1990, Queen recibió el Brit Award por su destacada contribución a la música británica. Fueron incluidos en el Salón de la Fama del Rock and Roll en 2001, y como cada miembro había compuesto varios sencillos exitosos, los cuatro fueron incluidos en el Salón de la Fama de los Compositores en 2003. En 2005 recibieron el Premio Ivor Novello a la Colección de Canciones Destacadas de la British Academy of Songwriters, Composers and Authors, y en 2018 recibieron el premio Grammy Lifetime Achievement Award.",
    "songs": [
      {
        "id": "bohemian-rhapsody",
        "title": "Bohemian Rhapsody",
        "year": 1975,
        "youtubeId": "fJ9rUzIMcZQ"
      },
      {
        "id": "dont-stop-me-now",
        "title": "Don't Stop Me Now",
        "year": 1978,
        "youtubeId": "HgzGwKwLmgM"
      },
      {
        "id": "another-one-bites-the-dust",
        "title": "Another One Bites the Dust",
        "year": 1980,
        "youtubeId": "rY0WxgSXdEE"
      },
      {
        "id": "under-pressure",
        "title": "Under Pressure",
        "year": 1981,
        "youtubeId": "a01QQZyl-_I"
      },
      {
        "id": "we-will-rock-you",
        "title": "We Will Rock You",
        "year": 1977,
        "youtubeId": "-tJYN-eG1zk"
      },
      {
        "id": "crazy-little-thing-called-love",
        "title": "Crazy Little Thing Called Love",
        "year": 1979,
        "youtubeId": "zO6D_BAuYCI"
      },
      {
        "id": "somebody-to-love",
        "title": "Somebody to Love",
        "year": 1976,
        "youtubeId": "kijpcUv-b8M"
      },
      {
        "id": "killer-queen",
        "title": "Killer Queen",
        "year": 1974,
        "youtubeId": "2ZBtPf7FOoM"
      },
      {
        "id": "we-are-the-champions",
        "title": "We Are the Champions",
        "year": 1977,
        "youtubeId": "04854XqcfCY"
      },
      {
        "id": "radio-ga-ga",
        "title": "Radio Ga Ga",
        "year": 1984,
        "youtubeId": "azdwsXLmrHE"
      },
      {
        "id": "i-want-to-break-free",
        "title": "I Want to Break Free",
        "year": 1984,
        "youtubeId": "f4Mc-NYPHaQ"
      },
      {
        "id": "love-of-my-life",
        "title": "Love of My Life",
        "year": 1975,
        "youtubeId": "sUJkCXE4sAA"
      },
      {
        "id": "the-show-must-go-on",
        "title": "The Show Must Go On",
        "year": 1991,
        "youtubeId": "t99KH0TR-J4"
      },
      {
        "id": "youre-my-best-friend",
        "title": "You're My Best Friend",
        "year": 1975,
        "youtubeId": "HaZpZQG2z10"
      },
      {
        "id": "good-old-fashioned-lover-boy",
        "title": "Good Old-Fashioned Lover Boy",
        "year": 1976,
        "youtubeId": "PI3LAgGBxqU"
      },
      {
        "id": "fat-bottomed-girls",
        "title": "Fat Bottomed Girls",
        "year": 1978,
        "youtubeId": "VMnjF1O4eH0"
      }
    ]
  },
  {
    "slug": "ramones",
    "name": "Ramones",
    "genres": [
      "Punk rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Ramones",
    "bio": "Los Ramones, también conocidos como The Ramones, fue una banda estadounidense de punk rock formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996.\n\nPioneros y líderes del naciente punk, cimentaron las bases de este género musical con composiciones simples, minimistas, repetitivas y letras muy simples, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970 con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras. Su sonido se caracteriza por ser rápido y directo, con influencias del rockabilly de los años 1950, el surf rock, The Beatles, The Who, The Velvet Underground, las bandas de chicas de los años 1960 como The Shangri-Las y el garage protopunk de MC5 y The Stooges.\n\nRamones lideró la primera ola del punk en Nueva York, compartiendo el escenario del mítico club CBGB con otras bandas de punk como Johnny Thunders and the Heartbreakers, Richard Hell & The Voidoids entre otros, de protopunk como Patti Smith y Television y de new wave como Blondie y Talking Heads entre otros, y sirviendo de inspiración para la gran mayoría de las bandas de punk surgidas en la década de 1970 tanto de EE. UU. como en el Reino Unido. Siendo una de las bandas más importantes de la historia del rock, su influencia se percibe en casi todas las formaciones de punk posteriores.",
    "songs": [
      {
        "id": "blitzkrieg-bop",
        "title": "Blitzkrieg Bop",
        "year": 1976,
        "youtubeId": "268C3N2dDYk"
      },
      {
        "id": "i-wanna-be-sedated",
        "title": "I Wanna Be Sedated",
        "year": 1978,
        "youtubeId": "bm51ihfi1p4"
      },
      {
        "id": "pet-sematary",
        "title": "Pet Sematary",
        "year": 1989,
        "youtubeId": "HJWFsZ_YUc4"
      },
      {
        "id": "sheena-is-a-punk-rocker",
        "title": "Sheena Is a Punk Rocker",
        "year": 1977,
        "youtubeId": "yCW7Aw8ugOI"
      },
      {
        "id": "baby-i-love-you",
        "title": "Baby, I Love You",
        "year": 1980,
        "youtubeId": "t6jI4kXz5pc"
      },
      {
        "id": "poison-heart",
        "title": "Poison Heart",
        "year": 1992,
        "youtubeId": "OfIfzVf8t6E"
      },
      {
        "id": "rockaway-beach",
        "title": "Rockaway Beach",
        "year": 1977,
        "youtubeId": "s0cLMW181mo"
      },
      {
        "id": "beat-on-the-brat",
        "title": "Beat on the Brat",
        "year": 1976,
        "youtubeId": "unvFK9I3vgc"
      },
      {
        "id": "rock-n-roll-high-school",
        "title": "Rock 'n' Roll High School",
        "year": 1979,
        "youtubeId": "oz7KYUkdlvE"
      },
      {
        "id": "bonzo-goes-to-bitburg",
        "title": "Bonzo Goes to Bitburg (My Brain Is Hanging Upside Down)",
        "year": 1985,
        "youtubeId": "P-L_5HedJbw"
      },
      {
        "id": "judy-is-a-punk",
        "title": "Judy Is a Punk",
        "year": 1976,
        "youtubeId": "MXcjg9o9HJ8"
      },
      {
        "id": "the-kkk-took-my-baby-away",
        "title": "The KKK Took My Baby Away",
        "year": 1981,
        "youtubeId": "RYXS5q0105Y"
      },
      {
        "id": "needles-and-pins",
        "title": "Needles and Pins",
        "year": 1978,
        "youtubeId": "bIaKHIyjrN0"
      },
      {
        "id": "i-wanna-be-your-boyfriend",
        "title": "I Wanna Be Your Boyfriend",
        "year": 1976,
        "youtubeId": "BDvtkIp8UU4"
      },
      {
        "id": "i-believe-in-miracles",
        "title": "I Believe in Miracles",
        "year": 1989,
        "youtubeId": "QCee-vToE_M"
      }
    ]
  },
  {
    "slug": "rata-blanca",
    "name": "Rata Blanca",
    "genres": [
      "Heavy metal",
      "Hard rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Rata_Blanca",
    "bio": "Rata Blanca es una banda de hard rock y heavy metal formada en 1985 por el guitarrista Walter Giardino en la zona del Bajo Flores, barrio ubicado al sur de la ciudad de Buenos Aires. Se la considera como una de las bandas más importantes e influyentes del hard rock y heavy metal en español, aunque durante su carrera también han incorporado pesados riffs con estructuras melódicas y armónicas de la música clásica. Con los años han sido clasificados en distintos subgéneros, sin embargo el grupo se considera simplemente \"rock metálico\".\nEl grupo se lanza al estrellato en los años 1990, destacándose como una de las bandas argentinas más populares de todos los tiempos. Tres de sus álbumes han sido incluidos entre los mejores 250 del rock iberoamericano.\nSu carrera parece impulsarse a los más altos niveles en 1990 con su segundo disco, Magos, espadas y rosas, logrando varias distinciones, y que le ha validado el comienzo de una larga hegemonía en el contexto internacional, estableciendo firmemente su reputación como banda en vivo.\nMuchas de sus canciones han logrado un alcance de popularidad hasta entonces inimaginables para el hard rock. Ostentan durante su trayectoria 12 discos de oro, 10 de platino y 3 doble platino, haciéndolos la banda del género más exitosa de su país, como así también una de las más reconocidas internacionalmente. La química se basa en el virtuosismo de Walter Giardino y la poderosa voz de Adrián Barilari.\nDesde sus comienzos, la banda ha sufrido varios cambios en su formación, siendo Walter Giardino el único miembro original que permanece hasta hoy. Su alineación actual está formada por Walter Giardino (guitarra), Adrián Barilari (voz), Alan Fritzler (batería), Danilo Moschen (teclados) y Juan Pablo Massanisso (bajo).",
    "songs": [
      {
        "id": "mujer-amante",
        "title": "Mujer Amante",
        "year": 1988,
        "youtubeId": "V7q1jN7k5lg"
      },
      {
        "id": "aun-estas-en-mis-suenos",
        "title": "Aún Estás en Mis Sueños",
        "year": 1988,
        "youtubeId": "c0aQkYxjMdI"
      },
      {
        "id": "la-leyenda-del-hada-y-el-mago",
        "title": "La Leyenda del Hada y el Mago",
        "year": 1990,
        "youtubeId": "51cZsDsVOqc"
      },
      {
        "id": "talisman",
        "title": "Talismán",
        "year": 1994,
        "youtubeId": "kyNBv1liYtQ"
      },
      {
        "id": "ella",
        "title": "Ella",
        "year": 1988,
        "youtubeId": "Al4A5GXUirk"
      },
      {
        "id": "el-reino-olvidado",
        "title": "El Reino Olvidado",
        "year": 2008,
        "youtubeId": "8Tj3cnbgXyo"
      },
      {
        "id": "volviendo-a-casa",
        "title": "Volviendo a Casa",
        "year": 2002,
        "youtubeId": "uNiusoqdTc4"
      },
      {
        "id": "el-sueno-de-la-gitana",
        "title": "El Sueño de la Gitana",
        "year": 1990,
        "youtubeId": "_ePMOOzLfqc"
      },
      {
        "id": "noches-sin-sueno",
        "title": "Noches sin Sueño",
        "year": 1988,
        "youtubeId": "0gv_0zdHO4Y"
      },
      {
        "id": "el-circulo-de-fuego",
        "title": "El Círculo de Fuego",
        "year": 1994,
        "youtubeId": "Tu6MOSXGz1w"
      },
      {
        "id": "la-llave-de-la-puerta-secreta",
        "title": "La Llave de la Puerta Secreta",
        "year": 1991,
        "youtubeId": "OyjXUwfIVdQ"
      },
      {
        "id": "guerrero-del-arco-iris",
        "title": "Guerrero del Arco Iris",
        "year": 1991,
        "youtubeId": "ey-M5FuoIC4"
      },
      {
        "id": "solo-para-amarte",
        "title": "Solo para Amarte",
        "year": 1994,
        "youtubeId": "2ODu4MVC8Qg"
      },
      {
        "id": "el-beso-de-la-bruja",
        "title": "El Beso de la Bruja",
        "year": 1990,
        "youtubeId": "fAY1MbZiKAU"
      },
      {
        "id": "cuando-la-luz-oscurece",
        "title": "Cuando la Luz Oscurece",
        "year": 1991,
        "youtubeId": "S3ok6l76w3I"
      }
    ]
  },
  {
    "slug": "red-hot-chili-peppers",
    "name": "Red Hot Chili Peppers",
    "genres": [
      "Rock alternativo",
      "Funk rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Red_Hot_Chili_Peppers",
    "bio": "Red Hot Chili Peppers es una banda estadounidense de rock formada en 1983 en Los Ángeles, California. Sus integrantes son el vocalista Anthony Kiedis, el guitarrista John Frusciante, el bajista Flea y el baterista Chad Smith. El estilo musical de la banda fusiona el funk tradicional con el rock y el rock alternativo incluyendo elementos de otros géneros como el rap, pop rock, heavy metal, dance, punk, hip hop e indie rock. Además, suelen ser considerados los inventores del punk funk.\n\nAdemás de Kiedis y Flea, la formación original del grupo la completaban el baterista Jack Irons y el guitarrista Hillel Slovak. En las grabaciones de los primeros discos hubo diversos cambios en la formación, y solo en The Uplift Mofo Party Plan (1987) coincidieron los cuatro miembros fundadores en el estudio. En 1988 el guitarrista Hillel Slovak murió de una sobredosis de heroína, lo que provocó la salida de Irons del grupo. Tras la llegada de Chad Smith y John Frusciante a finales de 1988 como sustitutos de Irons y Slovak, esta formación grabaría los álbumes Mother's Milk (1989), Blood Sugar Sex Magik (1991), Californication (1999), By the Way (2002), Stadium Arcadium (2006), Unlimited Love (2022) y Return of the Dream Canteen (2022). Mientras los Red Hot Chili Peppers estaban de gira por Japón en 1992, Frusciante dejó la banda, y no volvería hasta 1998. Dave Navarro se convirtió en su sustituto durante ese periodo, y con él lanzaron el álbum One Hot Minute (1995). Blood Sugar Sex Magik fue el gran salto al éxito internacional del grupo, siendo un referente claro de la fusión estilística que caracterizaría a la banda durante los '90. Tras el regreso de Frusciante en 1998, el cuarteto volvió a reunirse en el estudio para grabar Californication, disco que llegó a vender dieciséis millones de copias, convirtiéndose en su álbum de más éxito comercial hasta la fecha. By the Way y Stadium Arcadium continuarían cosechando éxitos y, se estima que desde su debut, la banda ha vendido más de 85 millones de álbumes en todo el mundo. Los Red Hot Chili Peppers han ganado siete Premios Grammy y en 2012 fueron elegidos para ingresar en el Salón de la Fama del Rock and Roll.\n\nEn 2008 la banda se tomó un descanso después de la última gira, durante el cual John Frusciante abandonó la banda. En octubre de 2009, con el guitarrista Josh Klinghoffer, trabajaron en su décimo álbum de estudio titulado I'm with You, publicado el 26 de agosto de 2011.",
    "songs": [
      {
        "id": "californication",
        "title": "Californication",
        "year": 1999,
        "youtubeId": "YlUKcNNmywk"
      },
      {
        "id": "under-the-bridge",
        "title": "Under the Bridge",
        "year": 1991,
        "youtubeId": "GLvohMXgcBo"
      },
      {
        "id": "cant-stop",
        "title": "Can't Stop",
        "year": 2002,
        "youtubeId": "8DyziWtkfBw"
      },
      {
        "id": "scar-tissue",
        "title": "Scar Tissue",
        "year": 1999,
        "youtubeId": "mzJj5-lubeM"
      },
      {
        "id": "otherside",
        "title": "Otherside",
        "year": 1999,
        "youtubeId": "rn_YodiJO6k"
      },
      {
        "id": "snow-hey-oh",
        "title": "Snow (Hey Oh)",
        "year": 2006,
        "youtubeId": "yuFI5KSPAt4"
      },
      {
        "id": "dani-california",
        "title": "Dani California",
        "year": 2006,
        "youtubeId": "Sb5aq5HcS1A"
      },
      {
        "id": "by-the-way",
        "title": "By the Way",
        "year": 2002,
        "youtubeId": "JnfyjwChuNU"
      },
      {
        "id": "dark-necessities",
        "title": "Dark Necessities",
        "year": 2016,
        "youtubeId": "Q0oIoR9mLwc"
      },
      {
        "id": "give-it-away",
        "title": "Give It Away",
        "year": 1991,
        "youtubeId": "Mr_uHJPUlO8"
      },
      {
        "id": "the-zephyr-song",
        "title": "The Zephyr Song",
        "year": 2002,
        "youtubeId": "0fcRa5Z6LmU"
      },
      {
        "id": "around-the-world",
        "title": "Around the World",
        "year": 1999,
        "youtubeId": "a9eNQZbjpJk"
      },
      {
        "id": "soul-to-squeeze",
        "title": "Soul to Squeeze",
        "year": 1993,
        "youtubeId": "0XcN12uVHeQ"
      },
      {
        "id": "road-trippin",
        "title": "Road Trippin'",
        "year": 1999,
        "youtubeId": "11GYvfYjyV0"
      },
      {
        "id": "suck-my-kiss",
        "title": "Suck My Kiss",
        "year": 1991,
        "youtubeId": "C6jElKMMOWM"
      }
    ]
  },
  {
    "slug": "rush",
    "name": "Rush",
    "genres": [
      "Rock progresivo",
      "Hard rock",
      "Heavy metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Rush_(banda)",
    "bio": "Rush es una banda canadiense de rock progresivo formada en 1968 en Toronto, Ontario. La formación se mantuvo estable desde 1974, cuando Neil Peart reemplazó al baterista original, John Rutsey, antes de su primera gira estadounidense. A partir de ese momento estuvo integrada por el bajista, teclista y cantante Geddy Lee, el guitarrista Alex Lifeson y el batería y letrista Neil Peart.\n\nDesde el lanzamiento de su primer sencillo en 1973 y álbum debut homónimo en marzo de 1974, han sido reconocidos por su maestría musical, por sus complejas composiciones y por la ecléctica temática de sus letras, dominadas por la ciencia ficción, la fantasía, la filosofía libertaria y desarrollando también temas humanitarios, sociales, emocionales y medioambientales.\n\nMusicalmente, su estilo ha evolucionado a lo largo de los años; en sus primeros álbumes muestran una influencia del heavy metal inspirado en el blues muy semejante a los primeros trabajos hechos por Budgie. Luego incursionaron en el hard rock y rock progresivo, y tuvieron un período en el que predominó el uso de sintetizadores. Han influido a numerosos artistas y bandas, como Metallica, The Smashing Pumpkins y Primus, además de bandas de metal progresivo como Queensrÿche, Dream Theater y Symphony X.",
    "songs": [
      {
        "id": "tom-sawyer",
        "title": "Tom Sawyer",
        "year": 1981,
        "youtubeId": "auLBLk4ibAk"
      },
      {
        "id": "limelight",
        "title": "Limelight",
        "year": 1981,
        "youtubeId": "ZiRuj2_czzw"
      },
      {
        "id": "the-spirit-of-radio",
        "title": "The Spirit of Radio",
        "year": 1980,
        "youtubeId": "g_QtO0Rhp0w"
      },
      {
        "id": "closer-to-the-heart",
        "title": "Closer to the Heart",
        "year": 1977,
        "youtubeId": "kyhW2v0NDM0"
      },
      {
        "id": "yyz",
        "title": "YYZ",
        "year": 1981,
        "youtubeId": "ftVTWDrtrlc"
      },
      {
        "id": "freewill",
        "title": "Freewill",
        "year": 1980,
        "youtubeId": "urBpdyFCZmo"
      },
      {
        "id": "subdivisions",
        "title": "Subdivisions",
        "year": 1982,
        "youtubeId": "V7_fdU7kUBI"
      },
      {
        "id": "fly-by-night",
        "title": "Fly by Night",
        "year": 1975,
        "youtubeId": "nEVDZl5UvN4"
      },
      {
        "id": "working-man",
        "title": "Working Man",
        "year": 1974,
        "youtubeId": "IrxzRFj03Ro"
      },
      {
        "id": "2112-overture-the-temples-of-syrinx",
        "title": "2112: Overture / The Temples of Syrinx",
        "year": 1976,
        "youtubeId": "nyFKxksQoSk"
      },
      {
        "id": "red-barchetta",
        "title": "Red Barchetta",
        "year": 1981,
        "youtubeId": "_LXKZq0fYDw"
      },
      {
        "id": "new-world-man",
        "title": "New World Man",
        "year": 1982,
        "youtubeId": "T7Zhr8RQt_M"
      },
      {
        "id": "time-stand-still",
        "title": "Time Stand Still",
        "year": 1987,
        "youtubeId": "dMSFqXGZ5TQ"
      },
      {
        "id": "distant-early-warning",
        "title": "Distant Early Warning",
        "year": 1984,
        "youtubeId": "JXrS9DeJyXw"
      },
      {
        "id": "the-trees",
        "title": "The Trees",
        "year": 1978,
        "youtubeId": "JnC88xBPkkc"
      }
    ]
  },
  {
    "slug": "seru-giran",
    "name": "Serú Girán",
    "genres": [
      "Rock progresivo",
      "Rock nacional"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Ser%C3%BA_Gir%C3%A1n",
    "bio": "Serú Girán fue un supergrupo argentino de rock progresivo, formado en 1978 por Charly García (1951–), David Lebón (1952–), Pedro Aznar (1959–) y Oscar Moro (1948–2006). En sus apenas cinco años de actividad, se convirtió en uno de los actos musicales más importantes en la historia de la música latinoamericana y en la evolución del rock en español, sirviendo como influencia a múltiples artistas y bandas que surgirían en los años posteriores. Además, Serú Girán sería parte de notoria atención mediática por sus declaraciones sociopolíticas en contra de la dictadura militar argentina que acechaba a la Argentina durante los fines de los 70 e inicios de los 80. Luego de que García y Lebón tuvieran un proyecto fallido en Brasil, ambos regresaron a Argentina, donde conocieron a un joven Pedro Aznar de 18 años, quien impresionó a los dos músicos por sus talentos como bajista. Moro sería el último miembro en unirse, al ser pedido por García, ya que ambos habían compartido grupo con La Máquina de Hacer Pájaros. Producidos por Billy Bond, el álbum debut de la banda, Serú Girán (1978), fue duramente criticado en su lanzamiento por los medios y el público, debido a su sonido orquestal poco convencional de la época, a pesar de que, en años posteriores, los cortes «Serú Girán», «Seminare» y «Eiti-Leda» se convirtieron en clásicos del rock argentino. La banda decidió cambiar drásticamente su sonido por canciones más directas y simples para su siguiente trabajo, La grasa de las capitales (1979), que incluyó el controversial «Viernes 3 a. m.», el cual fue censurado por la dictadura militar (no por razones políticas, paradójicamente, sino por incitación al suicidio), y fue un éxito comercial y crítico, siendo considerado uno de los mejores álbumes en la historia del rock nacional por la revista Rolling Stone. La banda continuó impulsando su crítica hacia el gobierno de facto en su tercer disco, Bicicleta (1980), y su aclamada «Canción de Alicia en el país», que le trajo aún más reconocimiento internacional y por parte del público y la crítica. Después de que lograran hacer un concierto histórico para el rock nacional, al tocar ante 70 000 personas en La Rural, Serú se separó en 1982 tras publicar Peperina (1981), y la aclamada y popular «No llores por mí, Argentina», compuesta en 1981 y lanzada en el 82 dedicada hacia el propio país y anticipando la situación tras la Guerra de las Malvinas de ese mismo año. Diez años después de su separación, los cuatro miembros volvieron a juntarse para lanzar su quinto y último álbum, Serú '92 (1992), que se convirtió en su álbum más exitoso, con 200 000 copias vendidas, y también lograron convertirse en la primera banda local en hacer un concierto en el Estadio Monumental, con dos fechas que fueron sold-out con una histórica marca de 160 000 entradas vendidas. Esa sería la última vez que los cuatro miembros estarían juntos, teniendo reuniones esporádicas en los siguientes años, hasta la muerte de Moro en 2006.",
    "songs": [
      {
        "id": "seminare",
        "title": "Seminare",
        "year": 1978,
        "youtubeId": "xVdtGR_zgdA"
      },
      {
        "id": "peperina",
        "title": "Peperina",
        "year": 1981,
        "youtubeId": "8VDXZbxRlHQ"
      },
      {
        "id": "cancion-de-alicia-en-el-pais",
        "title": "Canción de Alicia en el País",
        "year": 1980,
        "youtubeId": "YRNFye2SysM"
      },
      {
        "id": "eiti-leda",
        "title": "Eiti Leda",
        "year": 1978,
        "youtubeId": "qOOtah1Q__U"
      },
      {
        "id": "alto-en-la-torre",
        "title": "Alto en la Torre",
        "year": 1980,
        "youtubeId": "BOCTQuEB6xw"
      },
      {
        "id": "la-grasa-de-las-capitales",
        "title": "La Grasa de las Capitales",
        "year": 1979,
        "youtubeId": "lI7AzuekOJ4"
      },
      {
        "id": "encuentro-con-el-diablo",
        "title": "Encuentro con el Diablo",
        "year": 1980,
        "youtubeId": "iLmlBvydcp0"
      },
      {
        "id": "salir-de-la-melancolia",
        "title": "Salir de la Melancolía",
        "year": 1981,
        "youtubeId": "Csxuv6XMPO4"
      },
      {
        "id": "viernes-3-am",
        "title": "Viernes 3 AM",
        "year": 1979,
        "youtubeId": "6Kng6h1rpNY"
      },
      {
        "id": "desarma-y-sangra",
        "title": "Desarma y Sangra",
        "year": 1980,
        "youtubeId": "BxucLDUu4bg"
      },
      {
        "id": "cinema-verite",
        "title": "Cinema Verité",
        "year": 1981,
        "youtubeId": "6Tojy7dDpqQ"
      },
      {
        "id": "mientras-miro-las-nuevas-olas",
        "title": "Mientras Miro las Nuevas Olas",
        "year": 1980,
        "youtubeId": "JZb1zQ6dTkA"
      },
      {
        "id": "noche-de-perros",
        "title": "Noche de Perros",
        "year": 1979,
        "youtubeId": "F-5ZSwEevmw"
      },
      {
        "id": "autos-jets-aviones-barcos",
        "title": "Autos, Jets, Aviones, Barcos",
        "year": 1978,
        "youtubeId": "l0YV3zm04MY"
      }
    ]
  },
  {
    "slug": "soda-stereo",
    "name": "Soda Stereo",
    "genres": [
      "New wave",
      "Rock alternativo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Soda_Stereo",
    "bio": "Soda Stereo fue una banda de rock argentina formada en 1982 originalmente por el cantante y guitarrista Gustavo Cerati, el bajista Zeta Bosio y el baterista Charly Alberti. Es considerada por un sector de la crítica especializada como la banda más importante, popular e influyente del rock en español de todos los tiempos y una leyenda de la música latinoamericana. Fueron el primer grupo de habla hispana en conseguir un éxito masivo en Latinoamérica y tuvieron un papel muy importante en el desarrollo y la difusión del rock latinoamericano y el rock en español durante los años 80 y los 90. Durante su carrera protagonizaron diversos géneros, desde la música divertida de sus inicios hasta la new wave, el dark wave, el hard rock, el rock alternativo y el rock electrónico de sus etapas finales.\n\nSoda Stereo encabezó las listas de ventas y asistencia a conciertos en el mundo hispanohablante; se estima que vendió más de veinte millones de copias de sus álbumes. En 1995 ganó en los Premios Konex el Diploma al Mérito y el Premio Konex de Platino a la mejor banda de rock argentino de la década, y en 2002 recibió el Premio Leyenda de MTV Latinoamérica. Canciones como «De música ligera», «Persiana americana», «En la ciudad de la furia» y «Cuando pase el temblor» figuran entre las mejores del rock argentino e iberoamericano según diversas listas de Rolling Stone, MTV y la revista Al Borde.\n\nEn 1997 la banda se disolvió con una gira de despedida que finalizó en el estadio de River Plate. En 2007 anunció su regreso con la gira continental Me Verás Volver, que reunió a más de un millón de seguidores. Tras el fallecimiento de Gustavo Cerati en 2014, los miembros restantes realizaron la gira Gracias Totales - Soda Stereo (2020-2022), y en 2026 la banda volvió a girar utilizando tecnología para simular la presencia de Cerati en escena, en Soda Stereo Ecos.",
    "songs": [
      {
        "id": "de-musica-ligera",
        "title": "De Música Ligera",
        "year": 1986,
        "youtubeId": "ie-jNqM3J4A"
      },
      {
        "id": "persiana-americana",
        "title": "Persiana Americana",
        "year": 1986,
        "youtubeId": "OhbGkSxIqOk"
      },
      {
        "id": "cuando-pase-el-temblor",
        "title": "Cuando Pase el Temblor",
        "year": 1985,
        "youtubeId": "hP92cL-ZtUE"
      },
      {
        "id": "profugos",
        "title": "Prófugos",
        "year": 1988,
        "youtubeId": "36ZIg14V_v0"
      },
      {
        "id": "en-la-ciudad-de-la-furia",
        "title": "En la Ciudad de la Furia",
        "year": 1988,
        "youtubeId": "AVEDgT_lG60"
      },
      {
        "id": "sobredosis-de-tv",
        "title": "Sobredosis de TV",
        "year": 1990,
        "youtubeId": "AtQSF-JVR7o"
      },
      {
        "id": "un-millon-de-anos-luz",
        "title": "Un Millón de Años Luz",
        "year": 1990,
        "youtubeId": "Kql2tjIQy0A"
      },
      {
        "id": "nada-personal",
        "title": "Nada Personal",
        "year": 1985,
        "youtubeId": "ko24BZXdK8c"
      },
      {
        "id": "tratame-suavemente",
        "title": "Trátame Suavemente",
        "year": 1984,
        "youtubeId": "UPVfQKUHTSc"
      },
      {
        "id": "corazon-delator",
        "title": "Corazón Delator",
        "year": 1990,
        "youtubeId": "tX1nCmFUaVM"
      },
      {
        "id": "zoom",
        "title": "Zoom",
        "year": 1992,
        "youtubeId": "HBO2nDIYi0E"
      },
      {
        "id": "ella-uso-mi-cabeza-como-un-revolver",
        "title": "Ella Usó Mi Cabeza Como un Revólver",
        "year": 1990,
        "youtubeId": "1zzzby2tAQM"
      },
      {
        "id": "te-hacen-falta-vitaminas",
        "title": "Te Hacen Falta Vitaminas",
        "year": 1984,
        "youtubeId": "G0xLD2stayM"
      },
      {
        "id": "signos",
        "title": "Signos",
        "year": 1986,
        "youtubeId": "CEb99v79yRM"
      },
      {
        "id": "danza-rota",
        "title": "Danza Rota",
        "year": 1987,
        "youtubeId": "R2f8KvURNw8"
      }
    ]
  },
  {
    "slug": "soledad-pastorutti",
    "name": "Soledad Pastorutti",
    "genres": [
      "Folclore",
      "Pop"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Soledad_(cantante)",
    "bio": "Soledad Pastorutti (Arequito, 12 de octubre de 1980), conocida simplemente como Soledad o por su apodo La Sole, es una cantante, compositora, actriz, conductora y productora argentina. Ganó el Premio Nacional SADAIC a los artistas en el Festival Nacional de Folklore de Cosquín el 26 de enero de 1996, evento que la lanzó a la fama. Su música renovó el folclore argentino en la segunda mitad de la década de 1990 y provocó un acercamiento de esta corriente musical a los jóvenes. Es considerada dentro de la camada del \"Folklore Joven\" junto a otros artistas contemporáneos como Abel Pintos y Luciano Pereyra.\n\nHa vendido más de siete millones de discos. Ganó dos Grammy Latinos, dos discos de diamante, cuatro Premios Gardel, tres Premios Martín Fierro y discos de oro y platino. Los dos discos de diamante ganados la convierten en la primera y única artista argentina que recibe ese premio, el primero lo recibió en 2003 por el disco Poncho al viento, el segundo por haber superado las 950 000 unidades vendidas de su álbum La Sole, cuando cumplió diez años de carrera. Realizó más de 2500 shows en Argentina y otros países. En 2014 y 2024 obtuvo el Grammy Latino por los álbumes Raíz y Raíz, nunca me fui, junto a la mexicana Lila Downs y la española Niña Pastori como mejores álbumes folclóricos, también fueron nominadas al Grammy en 2015. Tuvo papeles como actriz en cine y en televisión (como en la telenovela Rincón de luz) y también como conductora desde 2008 hasta 2015 en el programa televisivo Ecos de mi tierra, dedicado a la música argentina.",
    "songs": [
      {
        "id": "tren-del-cielo",
        "title": "Tren del Cielo",
        "year": 2001,
        "youtubeId": "a-28PW8o9Kw"
      },
      {
        "id": "a-don-ata",
        "title": "A Don Ata",
        "year": 1996,
        "youtubeId": "4rWsCoNumKw"
      },
      {
        "id": "brindis",
        "title": "Brindis",
        "year": 2010,
        "youtubeId": "_ZLp6UlKEGI"
      },
      {
        "id": "adonde-vayas",
        "title": "Adónde Vayas",
        "year": 2003,
        "youtubeId": "CAhOvgSmZRM"
      },
      {
        "id": "la-gringa",
        "title": "La Gringa",
        "year": 2019,
        "youtubeId": "WxMHzsVF2EM"
      },
      {
        "id": "pide-un-deseo",
        "title": "Pide un Deseo",
        "year": 2004,
        "youtubeId": "9zrcLg21Y4Q"
      },
      {
        "id": "que-nadie-sepa-mi-sufrir",
        "title": "Que Nadie Sepa Mi Sufrir",
        "year": 1998,
        "youtubeId": "QFqcdJqAayo"
      },
      {
        "id": "aunque-me-digas-que-no",
        "title": "Aunque Me Digas Que No",
        "year": 2015,
        "youtubeId": "iDv9uD3xysM"
      },
      {
        "id": "la-raiz-de-mi-tierra",
        "title": "La Raíz de Mi Tierra",
        "year": 2014,
        "youtubeId": "_8ZHvCTCoAc"
      },
      {
        "id": "zamba-para-decir-adios",
        "title": "Zamba para Decir Adiós",
        "year": 2008,
        "youtubeId": "y7lRj79_UKU"
      },
      {
        "id": "alma-corazon-y-vida",
        "title": "Alma, Corazón y Vida",
        "year": 2008,
        "youtubeId": "iZ8pqVSSMOY"
      },
      {
        "id": "vivir-es-hoy",
        "title": "Vivir es Hoy",
        "year": 2015,
        "youtubeId": "7NaqEixNApo"
      }
    ]
  },
  {
    "slug": "soundgarden",
    "name": "Soundgarden",
    "genres": [
      "Grunge",
      "Rock alternativo",
      "Hard rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Soundgarden",
    "bio": "Soundgarden fue una banda estadounidense de grunge formada en Seattle, Washington, en 1984 por el vocalista Chris Cornell, el bajista Hiro Yamamoto y el guitarrista Kim Thayil. Matt Cameron se unió al grupo como batería permanente en 1986 y Ben Shepherd se convirtió en reemplazo definitivo de Yamamoto en 1990. Cornell se mantuvo en la banda hasta su muerte en mayo de 2017.\n\nLa banda fue una de las pioneras del grunge, género musical derivado del rock alternativo que se desarrolló en Seattle. Fue la primera banda grunge en ser fichada por una compañía discográfica de renombre (A&M Records en 1988), aunque la banda no alcanzó el éxito comercial hasta que popularizaron el género a principio de los noventa junto a sus contemporáneos de Seattle: Nirvana, Pearl Jam o Alice in Chains.\n\nEl disco Superunknown (1994) fue su mayor éxito y el que les dio fama mundial al contener los sencillos \"Black Hole Sun\" y \"Spoonman\", ambos ganadores de un premio Grammy. El grupo se separó en 1997 debido a diferencias internas acerca del sentido que debía tomar la música de la banda. Después de más de una década en la que los integrantes del grupo participaron en otros proyectos musicales, Soundgarden se reagrupó en 2010 y se separó de forma definitiva en enero de 2019, ofreciendo un show final en un evento homenaje dedicado en honor a la memoria de Cornell.",
    "songs": [
      {
        "id": "black-hole-sun",
        "title": "Black Hole Sun",
        "year": 1994,
        "youtubeId": "efc7njKAfgo"
      },
      {
        "id": "spoonman",
        "title": "Spoonman",
        "year": 1994,
        "youtubeId": "T0_zzCLLRvE"
      },
      {
        "id": "fell-on-black-days",
        "title": "Fell on Black Days",
        "year": 1994,
        "youtubeId": "ySzrJ4GRF7s"
      },
      {
        "id": "rusty-cage",
        "title": "Rusty Cage",
        "year": 1991,
        "youtubeId": "pBZs_Py-1_0"
      },
      {
        "id": "outshined",
        "title": "Outshined",
        "year": 1991,
        "youtubeId": "sNh-iw7gsuI"
      },
      {
        "id": "jesus-christ-pose",
        "title": "Jesus Christ Pose",
        "year": 1991,
        "youtubeId": "14r7y6rM6zA"
      },
      {
        "id": "burden-in-my-hand",
        "title": "Burden in My Hand",
        "year": 1996,
        "youtubeId": "BTmD0wSaZJE"
      },
      {
        "id": "pretty-noose",
        "title": "Pretty Noose",
        "year": 1996,
        "youtubeId": "f8nkHrv_4Mg"
      },
      {
        "id": "my-wave",
        "title": "My Wave",
        "year": 1994,
        "youtubeId": "HEbYxEXM2cE"
      },
      {
        "id": "the-day-i-tried-to-live",
        "title": "The Day I Tried to Live",
        "year": 1994,
        "youtubeId": "dbckIuT_YDc"
      },
      {
        "id": "blow-up-the-outside-world",
        "title": "Blow Up the Outside World",
        "year": 1996,
        "youtubeId": "sC2GjXMk7i4"
      },
      {
        "id": "been-away-too-long",
        "title": "Been Away Too Long",
        "year": 2012,
        "youtubeId": "NeBjhpw_Ee0"
      },
      {
        "id": "loud-love",
        "title": "Loud Love",
        "year": 1989,
        "youtubeId": "j0xosEFe8Ik"
      },
      {
        "id": "superunknown",
        "title": "Superunknown",
        "year": 1994,
        "youtubeId": "AwdjreJKggg"
      },
      {
        "id": "hunted-down",
        "title": "Hunted Down",
        "year": 1987,
        "youtubeId": "4WmKBvDHXaE"
      }
    ]
  },
  {
    "slug": "sui-generis",
    "name": "Sui Generis",
    "genres": [
      "Folk rock",
      "Rock progresivo",
      "Rock nacional"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Sui_Generis_(banda)",
    "bio": "Sui Generis fue una banda argentina de folk-rock y rock progresivo, pionera del rock nacional. Estaba formada principalmente por Charly García (teclados, guitarra acústica, voz y composiciones) y Nito Mestre (flauta, guitarra acústica y voz). Es considerada como una de las más importantes en su estilo en Latinoamérica. Sus canciones (en particular las de sus dos primeros álbumes) se convirtieron virtualmente en himnos cantados por generaciones de argentinos, formando hoy parte del paisaje cultural nacional de ese país. Si bien a lo largo de su carrera la banda contó con otros miembros, fue el dúo García-Mestre el que quedó asociado con el nombre, y al que debieron su enorme fama posterior.\nLa banda surgió en 1968 de la fusión de dos grupos de rock colegiales del barrio porteño de Caballito y adoptó la forma de sexteto, cuarteto y dúo, en diversos momentos. Otros miembros estables de Sui Generis fueron Carlos \"Piraña\" Piegari, Beto Rodríguez, Juan Bellia, Alejandro Correa, Rolando Fortich, Francisco \"Paco\" Prati, Juan Rodríguez y Rinaldo Rafanelli.\nEn su primera etapa grabó tres álbumes de estudio (Vida, Confesiones de invierno y Pequeñas anécdotas sobre las instituciones); el tercero y el primero han sido incluidos en la lista de los 100 mejores álbumes del rock argentino según Rolling Stone, en los puestos 31 y 66, respectivamente. Grabó también un álbum doble en vivo y una película sobre el histórico show de despedida llamado Adiós Sui Generis. En 2000 se reunió brevemente y editó un nuevo álbum, Sinfonías para adolescentes. Dos de sus temas, «Rasguña las piedras» (#3) y «Canción para mi muerte» (#11) han sido incluidas por la revista Rolling Stone y la cadena MTV entre las 100 canciones más destacadas del rock argentino.\nEl dúo decidió separarse a fines de 1975, con una serie de recitales en varias partes del país durante dos semanas, que se iniciaron en el célebre mega-concierto doble en el Luna Park y finalizó en la Patagonia.",
    "songs": [
      {
        "id": "cancion-para-mi-muerte",
        "title": "Canción para mi Muerte",
        "year": 1972,
        "youtubeId": "1Zjm0uh8oeA"
      },
      {
        "id": "rasguna-las-piedras",
        "title": "Rasguña las Piedras",
        "year": 1973,
        "youtubeId": "DrKRNJGAyHw"
      },
      {
        "id": "confesiones-de-invierno",
        "title": "Confesiones de Invierno",
        "year": 1973,
        "youtubeId": "TumINAbkdSY"
      },
      {
        "id": "quizas-porque",
        "title": "Quizás, Porque",
        "year": 1972,
        "youtubeId": "qt83jtmjClM"
      },
      {
        "id": "necesito",
        "title": "Necesito",
        "year": 1972,
        "youtubeId": "kA2NW3WwFDY"
      },
      {
        "id": "instituciones",
        "title": "Instituciones",
        "year": 1974,
        "youtubeId": "ogdU3iH9_qI"
      },
      {
        "id": "mariel-y-el-capitan",
        "title": "Mariel y el Capitán",
        "year": 1972,
        "youtubeId": "Jq-wcvEvS6c"
      },
      {
        "id": "aprendizaje",
        "title": "Aprendizaje",
        "year": 1972,
        "youtubeId": "oi1AbEfowOs"
      },
      {
        "id": "botas-locas",
        "title": "Botas Locas",
        "year": 1974,
        "youtubeId": "qHEctqcjfxo"
      },
      {
        "id": "un-hada-un-cisne",
        "title": "Un Hada, un Cisne",
        "year": 1973,
        "youtubeId": "Cqx1mg_VVT4"
      },
      {
        "id": "bienvenidos-al-tren",
        "title": "Bienvenidos al Tren",
        "year": 1973,
        "youtubeId": "5i-ZV_AIQoc"
      },
      {
        "id": "juan-represion",
        "title": "Juan Represión",
        "year": 1974,
        "youtubeId": "pCTrGF0AsUU"
      }
    ]
  },
  {
    "slug": "sum-41",
    "name": "Sum 41",
    "genres": [
      "Pop punk",
      "Punk rock",
      "Rock alternativo"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Sum_41",
    "bio": "Sum 41 fue una banda canadiense de punk rock formada en Ajax, Ontario, el 31 de julio de 1996 y disuelta oficialmente en marzo de 2025 tras su gira mundial de despedida. Su formación estable y final estuvo integrada por Deryck Whibley (voz principal y guitarra rítmica, único miembro fundador permanente), Jason McCaslin (bajo), Dave Baksh (guitarra líder), Tom Thacker (guitarra y teclados) y Frank Zummo (batería desde 2015), tras el paso del baterista original Steve Jocz (1996-2013).\n\nSu estilo evolucionó del pop punk y punk rock hacia mezclas con rock alternativo, metal y punk melódico. Publicó ocho álbumes de estudio: All Killer No Filler (2001), con éxitos «Fat Lip» e «In Too Deep»), Does This Look Infected? (2002), Chuck (2004), Underclass Hero (2007), Screaming Bloody Murder (2011), 13 Voices (2016), Order In Decline (2019) y su trabajo final Heaven :x: Hell (2024). Vendió más de 15 millones de copias en todo el mundo, ganó varios premios Juno, obtuvo una nominación al Grammy y fue incluido en el Canadian Music Hall of Fame en su año de despedida.",
    "songs": [
      {
        "id": "fat-lip",
        "title": "Fat Lip",
        "year": 2001,
        "youtubeId": "CMX2lPum_pg"
      },
      {
        "id": "in-too-deep",
        "title": "In Too Deep",
        "year": 2001,
        "youtubeId": "emGri7i8Y2Y"
      },
      {
        "id": "motivation",
        "title": "Motivation",
        "year": 2001,
        "youtubeId": "X-iBGSLkfCU"
      },
      {
        "id": "still-waiting",
        "title": "Still Waiting",
        "year": 2002,
        "youtubeId": "qO-mSLxih-c"
      },
      {
        "id": "the-hell-song",
        "title": "The Hell Song",
        "year": 2004,
        "youtubeId": "7pE8ReA5cn4"
      },
      {
        "id": "pieces",
        "title": "Pieces",
        "year": 2004,
        "youtubeId": "By7ctqcWxyM"
      },
      {
        "id": "were-all-to-blame",
        "title": "We're All to Blame",
        "year": 2004,
        "youtubeId": "aUultIb2pPc"
      },
      {
        "id": "with-me",
        "title": "With Me",
        "year": 2007,
        "youtubeId": "g8z-qP34-1Y"
      },
      {
        "id": "underclass-hero",
        "title": "Underclass Hero",
        "year": 2007,
        "youtubeId": "PEz2d49XTk0"
      },
      {
        "id": "walking-disaster",
        "title": "Walking Disaster",
        "year": 2007,
        "youtubeId": "PHx-xqs3hO8"
      },
      {
        "id": "screaming-bloody-murder",
        "title": "Screaming Bloody Murder",
        "year": 2011,
        "youtubeId": "ZEbemsHuB-4"
      },
      {
        "id": "blood-in-my-eyes",
        "title": "Blood in My Eyes",
        "year": 2011,
        "youtubeId": "6dqujrkYnDE"
      },
      {
        "id": "landmines",
        "title": "Landmines",
        "year": 2016,
        "youtubeId": "eQEY1gPeZgk"
      },
      {
        "id": "war",
        "title": "War",
        "year": 2016,
        "youtubeId": "o5fuqdczxEE"
      },
      {
        "id": "fake-my-own-death",
        "title": "Fake My Own Death",
        "year": 2019,
        "youtubeId": "waixG1Dhr3w"
      }
    ]
  },
  {
    "slug": "sumo",
    "name": "Sumo",
    "genres": [
      "Rock alternativo",
      "Post-punk",
      "New wave"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Sumo_(banda)",
    "bio": "Sumo fue una banda de rock argentina formada en Hurlingham, Buenos Aires en 1981 por Luca Prodan (voz), Germán Daffunchio (guitarra), Ricardo Mollo (guitarra), Diego Arnedo (bajo), Alberto Troglio (batería) y Roberto Pettinato (saxofón).\n\nOriginaria de la localidad de Nono, en las sierras de Córdoba, el grupo musical tendría varios cambios en su formación durante sus años iniciales, y luego sería trasladada a Hurlingham, donde publicarían su primer álbum de estudio, Divididos por la felicidad (1985), considerado el quinto mejor álbum de la historia del rock nacional argentino por la revista Rolling Stone. Sería seguido por los también exitosos álbumes Llegando los monos (1986) y After Chabón (1987), convirtiendo a Sumo en uno de los grupos más importantes de la cultura underground de Argentina durante la década de los 80's. Luego de la muerte del vocalista y líder Luca Prodan en el año 1987, el grupo musical acabaría separándose en 1988, y dos grupos se formarían por exintegrantes de Sumo: Divididos y Las Pelotas.\n\nEn 1993 fue reeditado Corpiños en la madrugada, un demo editado en 1983 en el cual hay versiones iniciales de algunas canciones que luego serían incluidas en los álbumes de estudio de la banda, entre ellas «Divididos por la felicidad», «Banderitas y globos», «La rubia tarada», etc.\n\nSumo, a pesar de mantenerse en el underground en su corto período de actividad, se volvería uno de los grupos más influyentes en moldear el rock argentino contemporáneo. Se le acredita por introducir el post-punk británico en la escena latinoamericana, más que nada por sus canciones con letras en inglés, y por brindar un contrapunto visceral a las influencias progresivas y de nueva canción entonces dominantes en el rock en español.",
    "songs": [
      {
        "id": "la-rubia-tarada",
        "title": "La Rubia Tarada",
        "year": 1986,
        "youtubeId": "QuaGBNkdTso"
      },
      {
        "id": "mejor-no-hablar-de-ciertas-cosas",
        "title": "Mejor No Hablar De Ciertas Cosas",
        "year": 1985,
        "youtubeId": "P7M9U0D06iI"
      },
      {
        "id": "los-viejos-vinagres",
        "title": "Los Viejos Vinagres",
        "year": 1986,
        "youtubeId": "v-uUfI8IVyw"
      },
      {
        "id": "divididos-por-la-felicidad",
        "title": "Divididos por la Felicidad",
        "year": 1985,
        "youtubeId": "TOvzf8OepZg"
      },
      {
        "id": "regtest",
        "title": "Regtest",
        "year": 1985,
        "youtubeId": "kLMwDxxZHQk"
      },
      {
        "id": "heroina",
        "title": "Heroína",
        "year": 1985,
        "youtubeId": "Q-LgQLTEJ74"
      },
      {
        "id": "estallando-desde-el-oceano",
        "title": "Estallando Desde el Océano",
        "year": 1986,
        "youtubeId": "q_18Ms-0VTA"
      },
      {
        "id": "no-tan-distintos",
        "title": "No Tan Distintos",
        "year": 1986,
        "youtubeId": "D3n9JrAcOBY"
      },
      {
        "id": "el-ojo-blindado",
        "title": "El Ojo Blindado",
        "year": 1987,
        "youtubeId": "vUn10QHFmDM"
      },
      {
        "id": "debede",
        "title": "Debede",
        "year": 1986,
        "youtubeId": "GFGaBuNeCVg"
      },
      {
        "id": "manana-en-el-abasto",
        "title": "Mañana en el Abasto",
        "year": 1987,
        "youtubeId": "zrXYrql9qyY"
      },
      {
        "id": "crua-chan",
        "title": "Crua Chan",
        "year": 1987,
        "youtubeId": "RtLea5jOo24"
      },
      {
        "id": "lo-quiero-ya",
        "title": "Lo Quiero Ya",
        "year": 1987,
        "youtubeId": "_0SDbL282sM"
      }
    ]
  },
  {
    "slug": "the-beatles",
    "name": "The Beatles",
    "genres": [
      "Rock",
      "Pop",
      "Rock psicodélico"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/The_Beatles",
    "bio": "The Beatles, conocida en el mundo hispano como Los Beatles, fue una banda de rock británica formada en Liverpool en 1960. La agrupación original estaba compuesta por John Lennon, Paul McCartney, George Harrison y Ringo Starr. Son ampliamente considerados como la banda más influyente de la música popular y fueron fundamentales para el desarrollo de la contracultura de los años 60 y el reconocimiento de la música popular como una forma de arte. Con raíces en el skiffle, el beat y el rock 'n' roll de los años 50, su sonido incorporó elementos de la música clásica y el pop tradicional de maneras innovadoras. La banda también exploró estilos musicales que iban desde el folk y la música india hasta la psicodelia y el hard rock. Como pioneros en la grabación, composición y presentación artística, los Beatles revolucionaron muchos aspectos de la industria musical y a menudo fueron presentados como líderes de los movimientos juveniles y socioculturales de la época.\n\nLiderados por los principales compositores Lennon-McCartney, los Beatles evolucionaron a partir del grupo anterior de Lennon, The Quarrymen, y forjaron su reputación tocando en clubes de Liverpool y Hamburgo (Alemania), a partir de 1960. El trío principal formado por Lennon, McCartney y Harrison, juntos desde 1958, tuvo varios bateristas antes de invitar a Starr a unirse a ellos en 1962. El mánager Brian Epstein los convirtió en un grupo profesional, y el productor George Martin desarrolló sus grabaciones, y expandieron enormemente su éxito en el Reino Unido tras firmar con EMI y lograron su primer éxito, «Love Me Do», a finales de 1962. A medida que su popularidad crecía hasta convertirse en el intenso frenesí de los fanáticos conocido como «Beatlemanía», la banda adquirió el apodo de «los Fab Four». A principios de 1964, los Beatles eran estrellas internacionales y habían alcanzado niveles sin precedentes de éxito de crítica y comercial. Se convirtieron en una fuerza líder del resurgimiento cultural británico, dando paso a la invasión británica del mercado pop estadounidense. Pronto debutaron en el cine con A Hard Day's Night (1964).\n\nUn creciente deseo de perfeccionar su trabajo en el estudio, sumado a la exigencia de sus giras de conciertos, llevó a la banda a retirarse de las presentaciones en vivo en 1966. Durante este tiempo, produjeron álbumes de mayor sofisticación, como Rubber Soul (1965), Revolver (1966) y Sgt. Pepper's Lonely Hearts Club Band (1967). Disfrutaron de un mayor éxito comercial con The Beatles —también conocido como «el Álbum Blanco», 1968— y Abbey Road (1969). El éxito de estos discos marcó el comienzo de la era del álbum, aumentó el interés del público por las drogas psicodélicas y la espiritualidad oriental, e impulsó los avances en la música electrónica, el diseño de portadas y los videoclips. En 1968, fundaron Apple Corps, una corporación multimedia con múltiples divisiones que continúa supervisando proyectos relacionados con el legado de la banda. Tras la disolución del grupo en 1970, todos los exmiembros principales cosecharon éxitos como solistas. Si bien se produjeron algunas reuniones parciales durante la década siguiente, los cuatro miembros nunca se reunieron por completo. Lennon fue asesinado en 1980 y Harrison falleció de cáncer de pulmón en 2001; McCartney y Starr siguen activos musicalmente.\n\nLos Beatles son el grupo musical más vendido de todos los tiempos, con ventas estimadas de más de 600 millones de unidades en todo el mundo. Son la banda más exitosa en la historia de las listas de Billboard de Estados Unidos, con la mayor cantidad de sencillos número uno en la lista Billboard Hot 100 —20—. Ostentan el récord de mayor cantidad de sencillos vendidos en el Reino Unido —21,9 millones— y mantuvieron el récord de mayor cantidad de álbumes número uno en la lista de álbumes del Reino Unido —15— hasta que Robbie Williams los superó en 2026. El grupo recibió numerosos galardones, incluyendo ocho premios Grammy, cuatro premios Brit, un premio Óscar —a Mejor Banda Sonora Original por el documental de 1970 Let It Be— y quince premios Ivor Novello. Fueron incluidos en el Salón de la Fama del Rock and Roll en su primer año de elegibilidad, 1988, y cada miembro principal fue incorporado individualmente entre 1994 y 2015. En 2004 y 2011, el grupo encabezó las listas de Rolling Stone de los mejores artistas de la historia. La revista Time los incluyó entre las 100 personas más importantes del siglo XX.",
    "songs": [
      {
        "id": "come-together",
        "title": "Come Together",
        "year": 1969,
        "youtubeId": "45cYwDMibGo"
      },
      {
        "id": "let-it-be",
        "title": "Let It Be",
        "year": 1970,
        "youtubeId": "CGj85pVzRJs"
      },
      {
        "id": "hey-jude",
        "title": "Hey Jude",
        "year": 1968,
        "youtubeId": "A_MjCqQoLLA"
      },
      {
        "id": "love-me-do",
        "title": "Love Me Do",
        "year": 1962,
        "youtubeId": "0pGOFX1D_jg"
      },
      {
        "id": "yesterday",
        "title": "Yesterday",
        "year": 1965,
        "youtubeId": "NrgmdOz227I"
      },
      {
        "id": "here-comes-the-sun",
        "title": "Here Comes the Sun",
        "year": 1969,
        "youtubeId": "KQetemT1sWc"
      },
      {
        "id": "help",
        "title": "Help!",
        "year": 1965,
        "youtubeId": "2Q_ZzBGPdqE"
      },
      {
        "id": "all-you-need-is-love",
        "title": "All You Need Is Love",
        "year": 1967,
        "youtubeId": "_7xMfIp-irg"
      },
      {
        "id": "i-want-to-hold-your-hand",
        "title": "I Want to Hold Your Hand",
        "year": 1963,
        "youtubeId": "v1HDt1tknTc"
      },
      {
        "id": "twist-and-shout",
        "title": "Twist and Shout",
        "year": 1963,
        "youtubeId": "2RicaUqd9Hg"
      },
      {
        "id": "blackbird",
        "title": "Blackbird",
        "year": 1968,
        "youtubeId": "Man4Xw8Xypo"
      },
      {
        "id": "in-my-life",
        "title": "In My Life",
        "year": 1965,
        "youtubeId": "YBcdt6DsLQA"
      },
      {
        "id": "she-loves-you",
        "title": "She Loves You",
        "year": 1963,
        "youtubeId": "nGbWU8S3vzs"
      },
      {
        "id": "ticket-to-ride",
        "title": "Ticket to Ride",
        "year": 1965,
        "youtubeId": "SyNt5zm3U_M"
      },
      {
        "id": "eleanor-rigby",
        "title": "Eleanor Rigby",
        "year": 1966,
        "youtubeId": "HuS5NuXRb5Y"
      },
      {
        "id": "strawberry-fields-forever",
        "title": "Strawberry Fields Forever",
        "year": 1967,
        "youtubeId": "HtUH9z_Oey8"
      },
      {
        "id": "penny-lane",
        "title": "Penny Lane",
        "year": 1967,
        "youtubeId": "S-rB0pHI9fU"
      },
      {
        "id": "get-back",
        "title": "Get Back",
        "year": 1969,
        "youtubeId": "YEESfv-11ng"
      },
      {
        "id": "while-my-guitar-gently-weeps",
        "title": "While My Guitar Gently Weeps",
        "year": 1968,
        "youtubeId": "VJDJs9dumZI"
      },
      {
        "id": "a-hard-days-night",
        "title": "A Hard Day's Night",
        "year": 1964,
        "youtubeId": "zx2TFk0vh1I"
      }
    ]
  },
  {
    "slug": "the-clash",
    "name": "The Clash",
    "genres": [
      "Punk rock",
      "Reggae",
      "New wave"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/The_Clash",
    "bio": "The Clash fue una banda británica de punk rock que estuvo activa entre 1976 y 1986. El grupo fue uno de los más importantes e icónicos de la primera ola del punk originada a fines de los años 1970 y, a diferencia de la mayoría de las bandas punk que se caracterizaban por su simplicidad musical, incorporó reggae, rock, rockabilly, ska, rhythm and blues, jazz, funk y dub entre otros variados estilos en su repertorio. The Clash llegó a ser una banda muy influyente en la música mundial.\n\nSumado a esto, The Clash exhibió una intencionalidad política en sus letras que con el tiempo se convertiría en su característica distintiva fundamental. El idealismo expresado en las composiciones de Joe Strummer y Mick Jones contrastó con el nihilismo de Sex Pistols y la sencillez de Ramones, las otras bandas emblemas del punk en la época. Aunque su éxito en el Reino Unido fue inmediato, la banda no se ganó al público estadounidense hasta los años 1980.\n\nSu tercer álbum, London Calling (publicado en 1979), es considerado uno de los mejores discos de la historia de la música comercial. De hecho, la revista Billboard lo calificó como el mejor de los años 1980, y según la revista Rolling Stone como el octavo mejor de la historia en su lista de los 500 mejores álbumes de todos los tiempos, donde también figuran otros dos discos del grupo, The Clash y Sandinista!, en las posiciones n.º 77 y n.º 404 respectivamente.\n\nAlgunos de sus temas más reconocidos fueron \"Police & Thieves\", \"White Riot\", \"Tommy Gun\", \"London Calling\", \"I Fought the Law\", \"Train in Vain\", \"(White Man) In Hammersmith Palais\", \"The Guns of Brixton\", \"Complete Control\", \"Rock the Casbah\" y \"Should I Stay or Should I Go\". Esta última canción fue un gran éxito 6 años después de la disolución del grupo debido a su uso en una campaña publicitaria de Levi's.\n\nEn 2003 fueron incluidos en el Salón de la Fama del Rock situado en Ohio, Estados Unidos. Un año más tarde, Rolling Stone los incluyó en la posición n.º 28 de \"The Immortals\".\n\nA lo largo del tiempo, se ha asentado entre los fanáticos y los críticos el apodo atribuido en una ocasión por su discográfica CBS Records, \"the only band that matters\" (en español \"la única banda que importa\") para referirlos. La aplicación del mismo refiere a que el grupo nunca se desvió de sus ideales ni de sus costumbres por buscar beneficios personales.",
    "songs": [
      {
        "id": "should-i-stay-or-should-i-go",
        "title": "Should I Stay or Should I Go",
        "year": 1982,
        "youtubeId": "xMaE6toi4mk"
      },
      {
        "id": "rock-the-casbah",
        "title": "Rock the Casbah",
        "year": 1982,
        "youtubeId": "bJ9r8LMU9bQ"
      },
      {
        "id": "london-calling",
        "title": "London Calling",
        "year": 1979,
        "youtubeId": "EfK-WX2pa8c"
      },
      {
        "id": "train-in-vain",
        "title": "Train in Vain",
        "year": 1979,
        "youtubeId": "aUzBgeI5dpc"
      },
      {
        "id": "i-fought-the-law",
        "title": "I Fought the Law",
        "year": 1979,
        "youtubeId": "AL8chWFuM-s"
      },
      {
        "id": "lost-in-the-supermarket",
        "title": "Lost in the Supermarket",
        "year": 1979,
        "youtubeId": "hZw23sWlyG0"
      },
      {
        "id": "the-guns-of-brixton",
        "title": "The Guns of Brixton",
        "year": 1979,
        "youtubeId": "JcW8VNwYvL0"
      },
      {
        "id": "straight-to-hell",
        "title": "Straight to Hell",
        "year": 1982,
        "youtubeId": "t7SvtikTkrM"
      },
      {
        "id": "the-magnificent-seven",
        "title": "The Magnificent Seven",
        "year": 1980,
        "youtubeId": "WD5N0rTsulQ"
      },
      {
        "id": "spanish-bombs",
        "title": "Spanish Bombs",
        "year": 1979,
        "youtubeId": "Ul0uJfhywW8"
      },
      {
        "id": "brand-new-cadillac",
        "title": "Brand New Cadillac",
        "year": 1979,
        "youtubeId": "uqTpZXcTc_s"
      },
      {
        "id": "police-and-thieves",
        "title": "Police & Thieves",
        "year": 1977,
        "youtubeId": "N3A8uNG3GH4"
      },
      {
        "id": "rudie-cant-fail",
        "title": "Rudie Can't Fail",
        "year": 1979,
        "youtubeId": "uEK9oK02D1M"
      },
      {
        "id": "white-riot",
        "title": "White Riot",
        "year": 1977,
        "youtubeId": "IvG3is7Bm1w"
      },
      {
        "id": "clampdown",
        "title": "Clampdown",
        "year": 1979,
        "youtubeId": "_lt4O-EHNnw"
      }
    ]
  },
  {
    "slug": "the-killers",
    "name": "The Killers",
    "genres": [
      "Rock alternativo",
      "Post-punk revival",
      "New wave"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/The_Killers",
    "bio": "The Killers es una banda de rock estadounidense formada en 2001 en Las Vegas (Nevada) por el vocalista, tecladista, bajista Brandon Flowers y el guitarrista Dave Keuning. La banda actualmente está conformada por Brandon Flowers, Dave Keuning, Mark Stoermer y Ronnie Vannucci Jr.\n\nLa banda ha lanzado siete álbumes de estudio: Hot Fuss (2004), Sam's Town (2006), Day & Age (2008), Battle Born (2012), Wonderful Wonderful (2017), Imploding the Mirage (2020) y su reciente álbum Pressure Machine (2021). Todos los álbumes han ocupado el puesto número uno en UK y en Irlanda. Por otra parte, también han lanzado un álbum recopilatorio (Sawdust, en 2007), un álbum en vivo (Live from the Royal Albert Hall, en 2009) y un álbum de grandes éxitos (Direct Hits, en 2013).\n\nThe Killers son considerados una de las bandas de rock más grandes del siglo XXI, vendiendo más de 30 millones de discos en todo el mundo, incluidos 11 millones solo en los EE. UU.",
    "songs": [
      {
        "id": "mr-brightside",
        "title": "Mr. Brightside",
        "year": 2003,
        "youtubeId": "gGdGFtwCNBE"
      },
      {
        "id": "somebody-told-me",
        "title": "Somebody Told Me",
        "year": 2004,
        "youtubeId": "Y5fBdpreJiU"
      },
      {
        "id": "when-you-were-young",
        "title": "When You Were Young",
        "year": 2006,
        "youtubeId": "ff0oWESdmH0"
      },
      {
        "id": "human",
        "title": "Human",
        "year": 2008,
        "youtubeId": "RIZdjT1472Y"
      },
      {
        "id": "all-these-things-that-ive-done",
        "title": "All These Things That I've Done",
        "year": 2004,
        "youtubeId": "sZTpLvsYYHw"
      },
      {
        "id": "read-my-mind",
        "title": "Read My Mind",
        "year": 2006,
        "youtubeId": "zc8hbSM1zVo"
      },
      {
        "id": "smile-like-you-mean-it",
        "title": "Smile Like You Mean It",
        "year": 2004,
        "youtubeId": "ZAErD8xzjCM"
      },
      {
        "id": "the-man",
        "title": "The Man",
        "year": 2017,
        "youtubeId": "w3xcybdis1k"
      },
      {
        "id": "shot-at-the-night",
        "title": "Shot at the Night",
        "year": 2012,
        "youtubeId": "X4YK-DEkvcw"
      },
      {
        "id": "spaceman",
        "title": "Spaceman",
        "year": 2008,
        "youtubeId": "Hc16Y9fiCvQ"
      },
      {
        "id": "run-for-cover",
        "title": "Run for Cover",
        "year": 2017,
        "youtubeId": "XO7JGfqPB0s"
      },
      {
        "id": "runaways",
        "title": "Runaways",
        "year": 2012,
        "youtubeId": "TMbyWSGYUgc"
      },
      {
        "id": "jenny-was-a-friend-of-mine",
        "title": "Jenny Was a Friend of Mine",
        "year": 2004,
        "youtubeId": "MQwu08Sc2vA"
      },
      {
        "id": "miss-atomic-bomb",
        "title": "Miss Atomic Bomb",
        "year": 2012,
        "youtubeId": "Qok9Ialei4c"
      },
      {
        "id": "a-dustland-fairytale",
        "title": "A Dustland Fairytale",
        "year": 2008,
        "youtubeId": "-3hyrkzFRss"
      }
    ]
  },
  {
    "slug": "the-offspring",
    "name": "The Offspring",
    "genres": [
      "Punk rock",
      "Pop punk"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/The_Offspring",
    "bio": "The Offspring es una banda de punk estadounidense, formada en Huntington Beach, California, en 1984 bajo el nombre de Manic Subsidal. Actualmente está integrada por Dexter Holland, Noodles, Todd Morse, Jonah Nimoy y Brandon Pertzborn.\n\nLa banda ha sido una de las más influyentes en el resurgir del punk en la escena mainstream, abanderando la escena californiana de dichos géneros junto a Bad Religion, Rancid y NOFX a comienzos y mediados de los años 1990. Han vendido alrededor de 70 millones de copias en todo el mundo, de los cuales 14,5 millones son solamente copias despachadas en los Estados Unidos. Su cúspide comercial y artística fue alcanzada con el aclamado Smash de 1994, el álbum bajo sello independiente más vendido de la historia, con 17 millones de copias. El disco fue parte integrante, junto a Dookie de Green Day y Punk in Drublic de NOFX, de la revolución anteriormente mencionada.",
    "songs": [
      {
        "id": "youre-gonna-go-far-kid",
        "title": "You're Gonna Go Far, Kid",
        "year": 2008,
        "youtubeId": "ql9-82oV2JE"
      },
      {
        "id": "the-kids-arent-alright",
        "title": "The Kids Aren't Alright",
        "year": 1998,
        "youtubeId": "7iNbnineUCI"
      },
      {
        "id": "self-esteem",
        "title": "Self Esteem",
        "year": 1994,
        "youtubeId": "EtNZnhxWLHo"
      },
      {
        "id": "pretty-fly-for-a-white-guy",
        "title": "Pretty Fly (For a White Guy)",
        "year": 1998,
        "youtubeId": "QtTR-_Klcq8"
      },
      {
        "id": "why-dont-you-get-a-job",
        "title": "Why Don't You Get a Job?",
        "year": 1998,
        "youtubeId": "LH-i8IvYIcg"
      },
      {
        "id": "come-out-and-play",
        "title": "Come Out and Play",
        "year": 1994,
        "youtubeId": "GHUql3OC_uU"
      },
      {
        "id": "want-you-bad",
        "title": "Want You Bad",
        "year": 2000,
        "youtubeId": "_g19fCJotPc"
      },
      {
        "id": "gone-away",
        "title": "Gone Away",
        "year": 1997,
        "youtubeId": "40V9_1PMUGM"
      },
      {
        "id": "hit-that",
        "title": "Hit That",
        "year": 2003,
        "youtubeId": "HwRL1LNVTLI"
      },
      {
        "id": "all-i-want",
        "title": "All I Want",
        "year": 1997,
        "youtubeId": "us8OhI-OTHg"
      },
      {
        "id": "original-prankster",
        "title": "Original Prankster",
        "year": 2000,
        "youtubeId": "Qp6Qn8IwPf8"
      },
      {
        "id": "staring-at-the-sun",
        "title": "Staring at the Sun",
        "year": 1997,
        "youtubeId": "R1xM-r4TF6Q"
      },
      {
        "id": "gotta-get-away",
        "title": "Gotta Get Away",
        "year": 1992,
        "youtubeId": "vSEUJHZDppo"
      },
      {
        "id": "bad-habit",
        "title": "Bad Habit",
        "year": 1994,
        "youtubeId": "U43XOSiKfqM"
      },
      {
        "id": "days-go-by",
        "title": "Days Go By",
        "year": 2012,
        "youtubeId": "XrBet1Rv32k"
      }
    ]
  },
  {
    "slug": "the-rolling-stones",
    "name": "The Rolling Stones",
    "genres": [
      "Rock",
      "Blues rock",
      "Hard rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/The_Rolling_Stones",
    "bio": "The Rolling Stones, más conocido en el mundo hispanohablante como los Rolling Stones o, simplemente, los Rolling, o los Stones, es una banda británica de rock originaria de Londres. Fue formada en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards e Ian Stewart, junto a varios bajistas y bateristas que nunca permanecieron fijos en la formación hasta la llegada de Bill Wyman y Charlie Watts unos meses después, quienes completarían la primera formación oficial de la banda.\n\nSus primeras producciones incluían versiones y temas de blues, rock and roll y R&B estadounidense con las que encabezaron el movimiento del R&B británico. No obstante, en el transcurso de su trayectoria añadieron toques estilísticos de otros géneros para adaptarse a cada época recibiendo influencias de la música psicodélica, el country, el punk, la música disco, el soul, el reggae o la música electrónica.\n\nPese a encabezar junto a The Beatles la «invasión británica» en los primeros años de la década de 1960, no fue sino hasta el lanzamiento de \"(I Can't Get No) Satisfaction\" en 1965 cuando alcanzaron el estrellato internacional y se establecieron como una de las bandas más populares en la escena musical.\n\nHasta la fecha, la banda ha editado veinticinco álbumes de estudio y colocado treinta y dos sencillos dentro de los diez más populares de Reino Unido y de Estados Unidos. Las ventas totales de The Rolling Stones se estiman entre 200 y 250 millones de discos, convirtiéndose en unos de los artistas más exitosos de todos los tiempos.\n\nLos Rolling están considerados como una de las bandas más grandes e influyentes de la historia del rock, siendo una de las agrupaciones que sentó las bases del rock contemporáneo. Ningún grupo de rock hasta la fecha ha sostenido una trayectoria tan duradera y todavía mundialmente reconocida como los Rolling Stones; con Mick Jagger y Keith Richards como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock.",
    "songs": [
      {
        "id": "i-cant-get-no-satisfaction",
        "title": "(I Can't Get No) Satisfaction",
        "year": 1965,
        "youtubeId": "nrIPxlFzDi0"
      },
      {
        "id": "under-my-thumb",
        "title": "Under My Thumb",
        "year": 1966,
        "youtubeId": "UHcR648Cg3I"
      },
      {
        "id": "paint-it-black",
        "title": "Paint It, Black",
        "year": 1966,
        "youtubeId": "O4irXQhgMqg"
      },
      {
        "id": "jumpin-jack-flash",
        "title": "Jumpin' Jack Flash",
        "year": 1968,
        "youtubeId": "G3dFpQzu54w"
      },
      {
        "id": "sympathy-for-the-devil",
        "title": "Sympathy for the Devil",
        "year": 1968,
        "youtubeId": "GgnClrx8N2k"
      },
      {
        "id": "gimme-shelter",
        "title": "Gimme Shelter",
        "year": 1969,
        "youtubeId": "RbmS3tQJ7Os"
      },
      {
        "id": "honky-tonk-women",
        "title": "Honky Tonk Women",
        "year": 1969,
        "youtubeId": "hqqkGxZ1_8I"
      },
      {
        "id": "you-cant-always-get-what-you-want",
        "title": "You Can't Always Get What You Want",
        "year": 1969,
        "youtubeId": "krxU5Y9lCS8"
      },
      {
        "id": "brown-sugar",
        "title": "Brown Sugar",
        "year": 1971,
        "youtubeId": "Bar7SzNLnY0"
      },
      {
        "id": "wild-horses",
        "title": "Wild Horses",
        "year": 1971,
        "youtubeId": "SQTHB4jM-KQ"
      },
      {
        "id": "angie",
        "title": "Angie",
        "year": 1973,
        "youtubeId": "oWRr03VcA-0"
      },
      {
        "id": "its-only-rock-n-roll",
        "title": "It's Only Rock 'n Roll (But I Like It)",
        "year": 1974,
        "youtubeId": "JGaBlygm0UY"
      },
      {
        "id": "miss-you",
        "title": "Miss You",
        "year": 1978,
        "youtubeId": "WXF0xJsFAiI"
      },
      {
        "id": "beast-of-burden",
        "title": "Beast of Burden",
        "year": 1978,
        "youtubeId": "tuk1NnnMQBA"
      },
      {
        "id": "start-me-up",
        "title": "Start Me Up",
        "year": 1981,
        "youtubeId": "7JR10AThY8M"
      }
    ]
  },
  {
    "slug": "the-strokes",
    "name": "The Strokes",
    "genres": [
      "Indie rock",
      "Garage rock revival",
      "Post-punk revival"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/The_Strokes",
    "bio": "The Strokes es una quinteto estadounidense de indie rock y garage rock revival. Formada en 1998 en la ciudad de Nueva York, la banda está compuesta por el cantante Julian Casablancas, los guitarristas Nick Valensi y Albert Hammond, Jr., el bajista Nikolai Fraiture y el baterista Fabrizio Moretti.",
    "songs": [
      {
        "id": "last-nite",
        "title": "Last Nite",
        "year": 2001,
        "youtubeId": "TOypSnKFHrE"
      },
      {
        "id": "hard-to-explain",
        "title": "Hard to Explain",
        "year": 2001,
        "youtubeId": "BXkm6h6uq0k"
      },
      {
        "id": "someday",
        "title": "Someday",
        "year": 2001,
        "youtubeId": "knU9gRUWCno"
      },
      {
        "id": "12-51",
        "title": "12:51",
        "year": 2003,
        "youtubeId": "LPAVDHo1Elc"
      },
      {
        "id": "reptilia",
        "title": "Reptilia",
        "year": 2003,
        "youtubeId": "b8-tXG8KrWs"
      },
      {
        "id": "juicebox",
        "title": "Juicebox",
        "year": 2005,
        "youtubeId": "GoltwBHXCx8"
      },
      {
        "id": "you-only-live-once",
        "title": "You Only Live Once",
        "year": 2006,
        "youtubeId": "pT68FS3YbQ4"
      },
      {
        "id": "heart-in-a-cage",
        "title": "Heart in a Cage",
        "year": 2006,
        "youtubeId": "3dyNbMVfeyM"
      },
      {
        "id": "under-cover-of-darkness",
        "title": "Under Cover of Darkness",
        "year": 2011,
        "youtubeId": "_l09H-3zzgA"
      },
      {
        "id": "all-the-time",
        "title": "All the Time",
        "year": 2013,
        "youtubeId": "TJC8zeu3MHk"
      },
      {
        "id": "the-adults-are-talking",
        "title": "The Adults Are Talking",
        "year": 2020,
        "youtubeId": "ewOPQZZn4SY"
      },
      {
        "id": "ode-to-the-mets",
        "title": "Ode to the Mets",
        "year": 2020,
        "youtubeId": "BjC0KUxiMhc"
      }
    ]
  },
  {
    "slug": "tracy-chapman",
    "name": "Tracy Chapman",
    "genres": [
      "Folk rock"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Tracy_Chapman",
    "bio": "Tracy Chapman (Cleveland, Ohio; 30 de marzo de 1964) es una cantante estadounidense ganadora de varios premios Grammy y conocida por el éxito de canciones como «Fast Car», «Across the Lines», «Talkin' Bout a Revolution», «Baby Can I Hold You», «Subcity» y «Give Me One Reason», que aúnan la fórmula del éxito con el compromiso político de sus letras. Es prima directa de la Familia Jackson.\n\nHasta 2018, Chapman ha publicados ocho discos de estudio, que le han hecho ganar un total de 4 Premios Grammy, 2 Brits Awards y 1 Billboard Music Award. Y su primer álbum Tracy Chapman de 1988 es uno de los trabajos hechos por una mujer más exitosos de la historia.",
    "songs": [
      {
        "id": "fast-car",
        "title": "Fast Car",
        "year": 1988,
        "youtubeId": "AIOAlaACuv4"
      },
      {
        "id": "talkin-bout-a-revolution",
        "title": "Talkin' 'bout a Revolution",
        "year": 1988,
        "youtubeId": "Xv8FBjo1Y8I"
      },
      {
        "id": "baby-can-i-hold-you",
        "title": "Baby Can I Hold You",
        "year": 1988,
        "youtubeId": "DqoLMGSBGYc"
      },
      {
        "id": "shes-got-her-ticket",
        "title": "She's Got Her Ticket",
        "year": 1988,
        "youtubeId": "6Qr2c68ypDA"
      },
      {
        "id": "crossroads",
        "title": "Crossroads",
        "year": 1989,
        "youtubeId": "DGwK1jjemgE"
      },
      {
        "id": "subcity",
        "title": "Subcity",
        "year": 1989,
        "youtubeId": "WFBbzPuwRug"
      },
      {
        "id": "give-me-one-reason",
        "title": "Give Me One Reason",
        "year": 1995,
        "youtubeId": "V6hQ9HSKlIE"
      },
      {
        "id": "the-promise",
        "title": "The Promise",
        "year": 1995,
        "youtubeId": "p-nqzwIvnZ0"
      },
      {
        "id": "telling-stories",
        "title": "Telling Stories",
        "year": 2000,
        "youtubeId": "wapCTd5fS2Y"
      },
      {
        "id": "change",
        "title": "Change",
        "year": 2005,
        "youtubeId": "bukXKdzyGEY"
      }
    ]
  },
  {
    "slug": "victor-heredia",
    "name": "Víctor Heredia",
    "genres": [
      "Trova",
      "Canción de protesta"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Víctor_Heredia",
    "bio": "Víctor Ramón Cournou Heredia (Buenos Aires, 24 de enero de 1947), conocido como Víctor Heredia, es un cantautor, poeta, escritor y trovador argentino cuyas composiciones regularmente tratan sobre el amor, la paz y la libertad.\n\nEs padre del productor musical Taiu, conocido por la canción «Rara vez», con el cantante argentino Milo J.",
    "songs": [
      {
        "id": "informe-de-la-situacion",
        "title": "Informe de la Situación",
        "year": 1972,
        "youtubeId": "6ykoFHxBFM8"
      },
      {
        "id": "bailando-con-tu-sombra-aleli",
        "title": "Bailando con tu Sombra (Alelí)",
        "year": 1975,
        "youtubeId": "SrBGdz2iSqQ"
      },
      {
        "id": "ojos-de-cielo",
        "title": "Ojos de Cielo",
        "year": 1979,
        "youtubeId": "BLWQEi90DFA"
      },
      {
        "id": "todavia-cantamos",
        "title": "Todavía Cantamos",
        "year": 1982,
        "youtubeId": "idU8AzhDVXU"
      },
      {
        "id": "sobreviviendo",
        "title": "Sobreviviendo",
        "year": 1984,
        "youtubeId": "-yiETwudHZc"
      },
      {
        "id": "razon-de-vivir",
        "title": "Razón de Vivir",
        "year": 1985,
        "youtubeId": "pc4UwKoeyMo"
      },
      {
        "id": "ahora-coraje",
        "title": "Ahora, Coraje",
        "year": 1985,
        "youtubeId": "8Q54uqih3Nc"
      },
      {
        "id": "campesino-has-de-traer-el-sol",
        "title": "Campesino, Has de Traer el Sol",
        "year": 1986,
        "youtubeId": "QQxHzVk_SZg"
      },
      {
        "id": "tiernamente-amigos",
        "title": "Tiernamente Amigos",
        "year": 1994,
        "youtubeId": "Be64zZ_fRr8"
      },
      {
        "id": "tierra-zanta",
        "title": "Tierra Zanta",
        "year": 2022,
        "youtubeId": "POAdMW-4yfw"
      }
    ]
  },
  {
    "slug": "whitesnake",
    "name": "Whitesnake",
    "genres": [
      "Hard rock",
      "Blues rock",
      "Glam metal"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Whitesnake",
    "bio": "Whitesnake fue una banda británica de hard rock fundada en el año 1978 por David Coverdale tras su separación de la banda Deep Purple, de la cual formó parte como vocalista desde finales de 1973 hasta mediados de 1976. En sus primeros años, su música estuvo orientada hacia el rock, el blues y el soul, destacando el álbum Saints & Sinners, pero a partir de 1984, con la salida de Slide It In, dieron un cambio notable a su música, orientándola hacia el hard rock comercial de la época. Bajo esa línea la banda vivió su época dorada y alcanzó su cima con la salida del álbum 1987, que trajo consigo los exitosos sencillos «Still of the Night», «Here I Go Again» y la balada «Is This Love». Cerraron esta etapa con Slip of the Tongue en 1989. Tras esto, han seguido estando activos en diferentes épocas y han editado algunos discos. En 2019 regresaron al hard rock ochentero con el álbum Flesh & Blood, que fue elogiado por sus fanes.\n\nUn aspecto que ha caracterizado a la banda durante su historia ha sido la inconsistencia de sus formaciones a lo largo de los años, involucrando a diversos músicos británicos y estadounidenses, con la excepción de David Coverdale, fundador de la banda como líder y único miembro permanente.",
    "songs": [
      {
        "id": "dont-break-my-heart-again",
        "title": "Don't Break My Heart Again",
        "year": 1981,
        "youtubeId": "SMT-Uyxy5pg"
      },
      {
        "id": "ready-an-willing",
        "title": "Ready an' Willing",
        "year": 1980,
        "youtubeId": "GFk4VOlWkm4"
      },
      {
        "id": "fool-for-your-loving",
        "title": "Fool for Your Loving",
        "year": 1980,
        "youtubeId": "8Tp0K9YiTPE"
      },
      {
        "id": "love-aint-no-stranger",
        "title": "Love Ain't No Stranger",
        "year": 1984,
        "youtubeId": "unHzLEA6gvI"
      },
      {
        "id": "slide-it-in",
        "title": "Slide It In",
        "year": 1984,
        "youtubeId": "iHRVkWi5Iik"
      },
      {
        "id": "slow-an-easy",
        "title": "Slow an' Easy",
        "year": 1984,
        "youtubeId": "1qqAtPV-kgs"
      },
      {
        "id": "here-i-go-again",
        "title": "Here I Go Again",
        "year": 1987,
        "youtubeId": "WyF8RHM1OCg"
      },
      {
        "id": "is-this-love",
        "title": "Is This Love",
        "year": 1987,
        "youtubeId": "GOJk0HW_hJw"
      },
      {
        "id": "still-of-the-night",
        "title": "Still of the Night",
        "year": 1987,
        "youtubeId": "swPt9HBRXuE"
      },
      {
        "id": "give-me-all-your-love",
        "title": "Give Me All Your Love",
        "year": 1987,
        "youtubeId": "dkl2hiTHUrc"
      },
      {
        "id": "crying-in-the-rain",
        "title": "Crying in the Rain",
        "year": 1987,
        "youtubeId": "PCHlCGBrwLU"
      },
      {
        "id": "the-deeper-the-love",
        "title": "The Deeper the Love",
        "year": 1989,
        "youtubeId": "E-pqA-RmUyc"
      }
    ]
  },
  {
    "slug": "whitney-houston",
    "name": "Whitney Houston",
    "genres": [
      "Pop",
      "Rhythm and blues"
    ],
    "wikipedia": "https://es.wikipedia.org/wiki/Whitney_Houston",
    "bio": "Whitney Elizabeth Houston (Newark, Nueva Jersey, 9 de agosto de 1963-Beverly Hills, California, 11 de febrero de 2012) fue una cantante, compositora, productora discográfica, actriz, empresaria y modelo estadounidense. Apodada «la Voz», es una de las artistas musicales más vendidas de todos los tiempos, con más de 260 millones de discos en todo el mundo. En 2023, Rolling Stone la nombró la segunda mejor cantante de todos los tiempos.\n\nHouston influyó en muchos cantantes de música popular y era conocida por su voz poderosa y conmovedora, sus habilidades de improvisación vocal y el uso de técnicas de canto góspel en la música pop.\n\nTuvo once sencillos número uno en el Billboard Hot 100 y es la única artista que tiene siete sencillos número uno consecutivos en la lista. Houston logró una mayor popularidad al ingresar a la industria del cine. Sus elogios incluyen ocho premios Grammy, dieciséis Billboard Music Awards, dos premios Emmy y veintiocho Guinness World Records. Las inducciones de Houston incluyen el Salón de la Fama de los Grammy (dos veces), el Salón de la Fama de la Música Rhythm and Blues, el Salón de la Fama del Rock and Roll, el Salón de la Fama de Nueva Jersey y el Registro Nacional de Grabaciones en la Biblioteca del Congreso.\n\nHouston fue influida en el canto por su madre, también cantante. Comenzó a cantar en la iglesia cuando era niña y se convirtió en corista mientras estaba en la escuela secundaria. Fue una de las primeras mujeres negras en aparecer en la portada de Seventeen después de convertirse en modelo adolescente en 1981. Con la guía del presidente de Arista Records, Clive Davis, Houston firmó con el sello a los diecinueve años. Sus dos primeros álbumes de estudio, Whitney Houston (1985) y Whitney (1987), ambos alcanzaron el número uno en el Billboard 200 y se encuentran entre los álbumes más vendidos de todos los tiempos. El tercer álbum de estudio de Houston, I'm Your Baby Tonight (1990), produjo dos sencillos número uno en Billboard Hot 100: la canción principal y «All the Man That I Need».\n\nHouston hizo su debut actoral con la película de suspenso romántico The Bodyguard (1992), que se convirtió en la décima película más taquillera hasta esa fecha a pesar de recibir malas críticas por su guion y actuaciones principales. Grabó seis canciones para la banda sonora de la película, incluida «I Will Always Love You», que ganó el premio Grammy a grabación del año y se convirtió en el sencillo físico más vendido de una mujer en la historia de la música. La banda sonora de The Bodyguard ganó el premio Grammy por Álbum del año y sigue siendo el álbum de bandas sonoras más vendido de todos los tiempos. Houston pasó a protagonizar y grabar bandas sonoras para Waiting to Exhale (1995) y The Preacher's Wife (1996). Houston produjo la banda sonora de este último, que se convirtió en el álbum de góspel más vendido de todos los tiempos. Como productora de cine, produjo películas multiculturales, como Cinderella (1997), y series, como The Princess Diaries y The Cheetah Girls.\n\nEl primer álbum de estudio de Houston en ocho años, My Love Is Your Love (1998), generó varios sencillos exitosos, incluida la canción principal, «Heartbreak Hotel» y «It's Not Right but It's Okay». Tras el éxito, renovó su contrato con Arista por cien millones de dólares, uno de los mayores acuerdos discográficos de todos los tiempos. Sin embargo, sus problemas personales comenzaron a ensombrecer su carrera. Su álbum de estudio de 2002, Just Whitney, recibió críticas mixtas, mientras que su consumo de drogas y un tumultuoso matrimonio con el cantante Bobby Brown recibieron una amplia cobertura mediática. Después de un descanso de seis años de la grabación, Houston volvió a la cima de la lista Billboard 200 con su último álbum de estudio, I Look to You (2009). El 11 de febrero de 2012, Houston se ahogó accidentalmente en una bañera en el hotel Beverly Hilton en Beverly Hills, con enfermedades cardíacas y consumo de cocaína como factores contribuyentes. La noticia de su muerte coincidió con los premios Grammy de 2012 (que tuvieron lugar el día siguiente a su muerte) y tuvo cobertura internacional.\n\nSu vida y carrera fueron dramatizadas en la película biográfica de 2022 I Wanna Dance with Somebody.",
    "songs": [
      {
        "id": "how-will-i-know",
        "title": "How Will I Know",
        "year": 1985,
        "youtubeId": "m3-hY-hlhBg"
      },
      {
        "id": "saving-all-my-love-for-you",
        "title": "Saving All My Love for You",
        "year": 1985,
        "youtubeId": "ewxmv2tyeRs"
      },
      {
        "id": "greatest-love-of-all",
        "title": "Greatest Love of All",
        "year": 1985,
        "youtubeId": "IYzlVDlE72w"
      },
      {
        "id": "i-wanna-dance-with-somebody",
        "title": "I Wanna Dance with Somebody (Who Loves Me)",
        "year": 1987,
        "youtubeId": "eH3giaIzONA"
      },
      {
        "id": "so-emotional",
        "title": "So Emotional",
        "year": 1987,
        "youtubeId": "0YjSHbA6HQQ"
      },
      {
        "id": "didnt-we-almost-have-it-all",
        "title": "Didn't We Almost Have It All",
        "year": 1987,
        "youtubeId": "dzBhGheAIYo"
      },
      {
        "id": "where-do-broken-hearts-go",
        "title": "Where Do Broken Hearts Go",
        "year": 1988,
        "youtubeId": "wa3tfVjGCQ8"
      },
      {
        "id": "one-moment-in-time",
        "title": "One Moment in Time",
        "year": 1988,
        "youtubeId": "96aAx0kxVSA"
      },
      {
        "id": "all-the-man-that-i-need",
        "title": "All the Man That I Need",
        "year": 1990,
        "youtubeId": "3WH1Ma50QUk"
      },
      {
        "id": "i-will-always-love-you",
        "title": "I Will Always Love You",
        "year": 1992,
        "youtubeId": "3JWTaaS7LdU"
      },
      {
        "id": "im-every-woman",
        "title": "I'm Every Woman",
        "year": 1993,
        "youtubeId": "H7_sqdkaAfo"
      },
      {
        "id": "i-have-nothing",
        "title": "I Have Nothing",
        "year": 1993,
        "youtubeId": "FxYw0XPEoKE"
      },
      {
        "id": "exhale-shoop-shoop",
        "title": "Exhale (Shoop Shoop)",
        "year": 1995,
        "youtubeId": "wrTuV4Szxzo"
      },
      {
        "id": "my-love-is-your-love",
        "title": "My Love Is Your Love",
        "year": 1998,
        "youtubeId": "kxZD0VQvfqU"
      },
      {
        "id": "its-not-right-but-its-okay",
        "title": "It's Not Right But It's Okay",
        "year": 1999,
        "youtubeId": "6J538b-OLRU"
      }
    ]
  }
];
