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
        "id": "tnt",
        "title": "T.N.T.",
        "year": 1975,
        "youtubeId": "rB9-McrpJew"
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
        "id": "walk-this-way",
        "title": "Walk This Way",
        "year": 1975,
        "youtubeId": "3qb3MDqtYOE"
      },
      {
        "id": "i-dont-want-to-miss-a-thing",
        "title": "I Don't Want to Miss a Thing",
        "year": 1998,
        "youtubeId": "JkK8g6FMEXE"
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
        "id": "toro-y-pampa",
        "title": "Toro y pampa",
        "year": 2006,
        "youtubeId": "TD1e3EdW6Lk"
      },
      {
        "id": "a-vos-amigo",
        "title": "A Vos Amigo",
        "year": 1999,
        "youtubeId": "ItQoKaeohEI"
      },
      {
        "id": "caballo-negro",
        "title": "Caballo Negro",
        "year": 2012,
        "youtubeId": "2opOOq0cicM"
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
        "title": "Muchacha (Ojos de papel)",
        "year": 1969,
        "youtubeId": "LRJQTG2ze7w"
      },
      {
        "id": "plegaria-para-un-nino-dormido",
        "title": "Plegaria para un Niño Dormido",
        "year": 1969,
        "youtubeId": "9LvFHvHzglo"
      },
      {
        "id": "ana-no-duerme",
        "title": "Ana No Duerme",
        "year": 1969,
        "youtubeId": "Cg2EdtBguc4"
      },
      {
        "id": "toma-el-tren-hacia-el-sur",
        "title": "Toma el Tren Hacia el Sur",
        "year": 1970,
        "youtubeId": "GqV9TunWUUY"
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
        "id": "el-fantasma",
        "title": "El Fantasma",
        "year": 2004,
        "youtubeId": "ppL3Jf98ivQ"
      },
      {
        "id": "pequenos-suenos",
        "title": "Pequeños Sueños",
        "year": 2004,
        "youtubeId": "2r5yZu5uhio"
      },
      {
        "id": "revoloteando",
        "title": "Revoloteando",
        "year": 2007,
        "youtubeId": "czhVw-noAjA"
      },
      {
        "id": "la-vida-es-todo-lo-que-vos-quieras",
        "title": "La vida es todo lo que vos quieras",
        "year": 2018,
        "youtubeId": "OnijZNI9Spg"
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
        "id": "do-i-wanna-know",
        "title": "Do I Wanna Know?",
        "year": 2013,
        "youtubeId": "bpOSxM0rNPM"
      },
      {
        "id": "r-u-mine",
        "title": "R U Mine?",
        "year": 2012,
        "youtubeId": "VQH8ZTgna3Q"
      },
      {
        "id": "i-bet-you-look-good-on-the-dancefloor",
        "title": "I Bet You Look Good on the Dancefloor",
        "year": 2005,
        "youtubeId": "pK7egZaT3hs"
      },
      {
        "id": "505",
        "title": "505",
        "year": 2007,
        "youtubeId": "jlyG-PFgueM"
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
        "year": 1959,
        "youtubeId": "ne6nc1S_2zw"
      },
      {
        "id": "balada-para-un-loco",
        "title": "Balada para un loco",
        "year": 1969,
        "youtubeId": "g4P3bK0JqZ8"
      },
      {
        "id": "oblivion",
        "title": "Oblivion",
        "year": 1982,
        "youtubeId": "hLX1-0VFjwE"
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
        "id": "hacelo-por-mi",
        "title": "Hacelo por Mí",
        "year": 1990,
        "youtubeId": "BfWtPkUf8MM"
      },
      {
        "id": "angeles-caidos",
        "title": "Ángeles Caídos",
        "year": 1993,
        "youtubeId": "jrnBaHutUCY"
      },
      {
        "id": "todo-esta-al-reves",
        "title": "Todo Está al Revés",
        "year": 1993,
        "youtubeId": "ko7W8y8TOjo"
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
        "year": 2003,
        "youtubeId": "gZV2Q9zH2eg"
      },
      {
        "id": "delectrico",
        "title": "Deléctrico",
        "year": 2001,
        "youtubeId": "SbHppJC4CKA"
      },
      {
        "id": "pijamas",
        "title": "Pijamas",
        "year": 2007,
        "youtubeId": "v0N8kqu4ph0"
      },
      {
        "id": "los-calientes",
        "title": "Los Calientes",
        "year": 2001,
        "youtubeId": "4AVJ7Cxi7KA"
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
        "id": "no-woman-no-cry",
        "title": "No Woman, No Cry",
        "year": 1975,
        "youtubeId": "IT8XvzIfi4U"
      },
      {
        "id": "redemption-song",
        "title": "Redemption Song",
        "year": 1980,
        "youtubeId": "rE941A9YPXs"
      },
      {
        "id": "one-love",
        "title": "One Love / People Get Ready",
        "year": 1977,
        "youtubeId": "IN0KkGeEURw"
      },
      {
        "id": "could-you-be-loved",
        "title": "Could You Be Loved",
        "year": 1980,
        "youtubeId": "qmuf45t5KZo"
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
        "youtubeId": "lMGaiSqOp58"
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
        "id": "una-nueva-noche-fria",
        "title": "Una nueva noche fría",
        "year": 2000,
        "youtubeId": "a6a2LhKQJ7Y"
      },
      {
        "id": "rocanroles-sin-destino",
        "title": "Rocanroles sin destino",
        "year": 2004,
        "youtubeId": "iDV2vVAdEqM"
      },
      {
        "id": "prohibido",
        "title": "Prohibido",
        "year": 2004,
        "youtubeId": "y3ahqkCAcEQ"
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
        "title": "Mi Buenos Aires querido",
        "year": 1934,
        "youtubeId": "iqONTxrkyJE"
      },
      {
        "id": "volver",
        "title": "Volver",
        "year": 1934,
        "youtubeId": "kY655kfTuEs"
      },
      {
        "id": "el-dia-que-me-quieras",
        "title": "El día que me quieras",
        "year": 1935,
        "youtubeId": "ubvfktaFkJ8"
      },
      {
        "id": "por-una-cabeza",
        "title": "Por una cabeza",
        "year": 1935,
        "youtubeId": "UcUekXtC2wY"
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
        "id": "manuel-santillan-el-leon",
        "title": "Manuel Santillán, El León",
        "year": 2011,
        "youtubeId": "uA1AMZDUYp8"
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
        "id": "la-ley-y-la-trampa",
        "title": "La ley y la trampa",
        "year": 2005,
        "youtubeId": "QB1N3-OH3EE"
      },
      {
        "id": "soy",
        "title": "Soy",
        "year": 2013,
        "youtubeId": "LVxJHo5hvSA"
      },
      {
        "id": "zamba-del-panuelo",
        "title": "Zamba del pañuelo",
        "year": 1998,
        "youtubeId": "ZtFFArYKGbg"
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
        "id": "los-dinosaurios",
        "title": "Los Dinosaurios",
        "year": 1983,
        "youtubeId": "UILQU0VEWII"
      },
      {
        "id": "demoliendo-hoteles",
        "title": "Demoliendo Hoteles",
        "year": 1984,
        "youtubeId": "Mm3IgrVsu24"
      },
      {
        "id": "no-voy-en-tren",
        "title": "No Voy en Tren",
        "year": 1987,
        "youtubeId": "U0SeZuBkGfM"
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
        "id": "one-more-time",
        "title": "One More Time",
        "year": 2000,
        "youtubeId": "FGBhQbmPwH8"
      },
      {
        "id": "harder-better-faster-stronger",
        "title": "Harder, Better, Faster, Stronger",
        "year": 2001,
        "youtubeId": "gAjR4_CbPpQ"
      },
      {
        "id": "get-lucky",
        "title": "Get Lucky",
        "year": 2013,
        "youtubeId": "5NV6Rdv1a3I"
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
        "id": "heroes",
        "title": "Heroes",
        "year": 1977,
        "youtubeId": "lXgkuM2NhYI"
      },
      {
        "id": "lets-dance",
        "title": "Let's Dance",
        "year": 1983,
        "youtubeId": "VbD_kBJc_gI"
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
        "id": "ala-delta",
        "title": "Ala Delta",
        "year": 1991,
        "youtubeId": "e-Vi5uugYtY"
      },
      {
        "id": "sabado",
        "title": "Sábado",
        "year": 1991,
        "youtubeId": "DmhRbzS0puI"
      },
      {
        "id": "san-saltarin",
        "title": "San Saltarín",
        "year": 1993,
        "youtubeId": "TF205_8t5Hc"
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
        "id": "your-song",
        "title": "Your Song",
        "year": 1970,
        "youtubeId": "YfQPHbITuJM"
      },
      {
        "id": "rocket-man",
        "title": "Rocket Man",
        "year": 1972,
        "youtubeId": "DtVBCG6ThDk"
      },
      {
        "id": "im-still-standing",
        "title": "I'm Still Standing",
        "year": 1983,
        "youtubeId": "ZHwVBirqD2s"
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
        "youtubeId": "U4zENZjsFNc"
      },
      {
        "id": "yira-yira",
        "title": "Yira, yira",
        "year": 1929,
        "youtubeId": "5TBHeVx1PjM"
      },
      {
        "id": "uno",
        "title": "Uno",
        "year": 1943,
        "youtubeId": "iQDIl3KcqkM"
      },
      {
        "id": "cafetin-de-buenos-aires",
        "title": "Cafetín de Buenos Aires",
        "year": 1948,
        "youtubeId": "fH4AOtQPrCU"
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
        "id": "dont-stop",
        "title": "Don't Stop",
        "year": 1977,
        "youtubeId": "QV9JJmSCiI8"
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
        "id": "learn-to-fly",
        "title": "Learn to Fly",
        "year": 1999,
        "youtubeId": "Xwh9wAh6HlI"
      },
      {
        "id": "the-pretender",
        "title": "The Pretender",
        "year": 2007,
        "youtubeId": "SBjQ9tuuTJQ"
      },
      {
        "id": "best-of-you",
        "title": "Best of You",
        "year": 2005,
        "youtubeId": "h_L4Rixya64"
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
        "youtubeId": "uFBu3HVuKqQ"
      },
      {
        "id": "american-idiot",
        "title": "American Idiot",
        "year": 2004,
        "youtubeId": "_vbUJ2LtFF8"
      },
      {
        "id": "boulevard-of-broken-dreams",
        "title": "Boulevard of Broken Dreams",
        "year": 2004,
        "youtubeId": "Soa3gO7tL-c"
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
        "youtubeId": "AcEcTrnfo2g"
      },
      {
        "id": "paradise-city",
        "title": "Paradise City",
        "year": 1988,
        "youtubeId": "Rbm6GXllBiw"
      },
      {
        "id": "november-rain",
        "title": "November Rain",
        "year": 1992,
        "youtubeId": "6YjdYg7qtQI"
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
        "title": "Entre dos tierras",
        "year": 1990,
        "youtubeId": "SzimletXB7M"
      },
      {
        "id": "maldito-duende",
        "title": "Maldito duende",
        "year": 1990,
        "youtubeId": "Ux6U83ThqhI"
      },
      {
        "id": "iberia-sumergida",
        "title": "Iberia sumergida",
        "year": 1995,
        "youtubeId": "BzhmKG6AYt4"
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
        "id": "radioactive",
        "title": "Radioactive",
        "year": 2012,
        "youtubeId": "ANkhOIzuRu4"
      },
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
        "youtubeId": "H5hTRY2HtIo"
      },
      {
        "id": "its-time",
        "title": "It's Time",
        "year": 2012,
        "youtubeId": "sENM2wA_FTg"
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
        "id": "el-tesoro-de-los-inocentes",
        "title": "El tesoro de los inocentes",
        "year": 2004,
        "youtubeId": "R5BLseQkma0"
      },
      {
        "id": "la-muerte-y-yo",
        "title": "La Muerte y yo",
        "year": 2004,
        "youtubeId": "3rmtO2PhsNE"
      },
      {
        "id": "y-mientras-tanto-el-sol-se-muere",
        "title": "Y mientras tanto el sol se muere",
        "year": 2007,
        "youtubeId": "O_gZxjZMOOw"
      },
      {
        "id": "pabellon-septimo",
        "title": "Pabellón séptimo",
        "year": 2004,
        "youtubeId": "mzNLQLoYNgE"
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
        "id": "run-to-the-hills",
        "title": "Run to the Hills",
        "year": 1982,
        "youtubeId": "86URGgqONvA"
      },
      {
        "id": "the-number-of-the-beast",
        "title": "The Number of the Beast",
        "year": 1982,
        "youtubeId": "UnPyXv31UI8"
      },
      {
        "id": "fear-of-the-dark",
        "title": "Fear of the Dark",
        "year": 1992,
        "youtubeId": "L4EDWVbNKnM"
      },
      {
        "id": "the-trooper",
        "title": "The Trooper",
        "year": 1983,
        "youtubeId": "L_AtRCmLNuE"
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
        "id": "club-foot",
        "title": "Club Foot",
        "year": 2004,
        "youtubeId": "lk5iMgG-WJI"
      },
      {
        "id": "fire",
        "title": "Fire",
        "year": 2009,
        "youtubeId": "agVpq_XXRmU"
      },
      {
        "id": "lsf-lost-souls-forever",
        "title": "L.S.F. (Lost Souls Forever)",
        "year": 2004,
        "youtubeId": "iO-9aO0QNL0"
      },
      {
        "id": "shoot-the-runner",
        "title": "Shoot the Runner",
        "year": 2006,
        "youtubeId": "Eony4yGNsNo"
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
        "youtubeId": "Ff9efKdyz84"
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
        "id": "panic-show",
        "title": "Panic Show",
        "year": 2000,
        "youtubeId": "jlucNfrUxrw"
      },
      {
        "id": "balada-del-diablo-y-la-muerte",
        "title": "Balada del Diablo y la Muerte",
        "year": 1996,
        "youtubeId": "wUZOZuVU-P0"
      },
      {
        "id": "el-ojo-del-huracan",
        "title": "El Ojo del Huracán",
        "year": 2003,
        "youtubeId": "4xVRg43OVhg"
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
        "id": "interpretacion",
        "title": "Interpretación",
        "year": 2006,
        "youtubeId": "Vz28Lm6Xe_I"
      },
      {
        "id": "incontinencia-verbal",
        "title": "Incontinencia Verbal",
        "year": 2019,
        "youtubeId": "fE1XtDTywrM"
      },
      {
        "id": "dulce",
        "title": "Dulce (part. Abel Pintos)",
        "year": 2022,
        "youtubeId": "47-ZZ52truo"
      },
      {
        "id": "excusa",
        "title": "Excusa",
        "year": 2026,
        "youtubeId": "bBv8_HgH-48"
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
        "year": 2003,
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
        "id": "si-supieras",
        "title": "Si Supieras",
        "year": 1994,
        "youtubeId": "wFds5hyUPzU"
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
        "id": "whole-lotta-love",
        "title": "Whole Lotta Love",
        "year": 1969,
        "youtubeId": "HQmmM_qwG4k"
      },
      {
        "id": "kashmir",
        "title": "Kashmir",
        "year": 1975,
        "youtubeId": "qEhfoJHHRpY"
      },
      {
        "id": "immigrant-song",
        "title": "Immigrant Song",
        "year": 1970,
        "youtubeId": "P3Y8OWkiUts"
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
        "title": "Sólo le pido a Dios",
        "year": 1978,
        "youtubeId": "x5PJoP9x-Ys"
      },
      {
        "id": "la-memoria",
        "title": "La memoria",
        "year": 2001,
        "youtubeId": "WYrnI7PQfi0"
      },
      {
        "id": "cinco-siglos-igual",
        "title": "Cinco siglos igual",
        "year": 1987,
        "youtubeId": "1Rba9z27i3g"
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
        "id": "corazon",
        "title": "Corazón",
        "year": 1995,
        "youtubeId": "Qso7QJUCZyI"
      },
      {
        "id": "loco-tu-forma-de-ser",
        "title": "Loco (Tu Forma de Ser)",
        "year": 1989,
        "youtubeId": "fgXDHQm5eq4"
      },
      {
        "id": "la-guitarra",
        "title": "La Guitarra",
        "year": 1995,
        "youtubeId": "ID-iJOw9rLo"
      },
      {
        "id": "somos",
        "title": "Somos",
        "year": 2006,
        "youtubeId": "CtAXia8iQSU"
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
        "id": "mal-bicho",
        "title": "Mal Bicho",
        "year": 1989,
        "youtubeId": "MKIhV6OJczY"
      },
      {
        "id": "vasos-vacios",
        "title": "Vasos Vacíos",
        "year": 1993,
        "youtubeId": "8Zdhan166z0"
      },
      {
        "id": "padre-nuestro",
        "title": "Padre Nuestro",
        "year": 2008,
        "youtubeId": "KcKMKVBEYME"
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
        "id": "runaway",
        "title": "Runaway",
        "year": 1994,
        "youtubeId": "0sv3hB-7mwA"
      },
      {
        "id": "pupilas-lejanas",
        "title": "Pupilas Lejanas",
        "year": 1998,
        "youtubeId": "rJqHPDVJjq8"
      },
      {
        "id": "no-me-pares",
        "title": "No Me Pares",
        "year": 1996,
        "youtubeId": "wToRwosgero"
      },
      {
        "id": "jamaica-reggae",
        "title": "Jamaica Reggae",
        "year": 1988,
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
        "id": "tan-solo",
        "title": "Tan Solo",
        "year": 1992,
        "youtubeId": "8TdbQUBo8iQ"
      },
      {
        "id": "verano-del-92",
        "title": "Verano del '92",
        "year": 1996,
        "youtubeId": "GulXGGJ87pA"
      },
      {
        "id": "el-farolito",
        "title": "El Farolito",
        "year": 1996,
        "youtubeId": "e5CoiMbkvDc"
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
        "youtubeId": "M9FRCxGMz-0"
      },
      {
        "id": "hello-dolly",
        "title": "Hello, Dolly!",
        "year": 1964,
        "youtubeId": "Kx2AYFvwxKY"
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
        "title": "Seguir viviendo sin tu amor",
        "year": 1991,
        "youtubeId": "gOlMNZvYyMI"
      },
      {
        "id": "barro-tal-vez",
        "title": "Barro tal vez",
        "year": 1982,
        "youtubeId": "W47hOuQjDag"
      },
      {
        "id": "rezo-por-vos",
        "title": "Rezo por vos",
        "year": 1985,
        "youtubeId": "kHPja5eLZdU"
      },
      {
        "id": "cementerio-club",
        "title": "Cementerio Club",
        "year": 1973,
        "youtubeId": "V1TNlxEClis"
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
        "id": "molinos-de-viento",
        "title": "Molinos de viento",
        "year": 1998,
        "youtubeId": "TVWyQK04Qtc"
      },
      {
        "id": "fiesta-pagana",
        "title": "Fiesta pagana",
        "year": 1999,
        "youtubeId": "iWHBmsOJ26E"
      },
      {
        "id": "la-costa-del-silencio",
        "title": "La costa del silencio",
        "year": 2003,
        "youtubeId": "mEZOnudn-NM"
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
        "id": "la-octava-maravilla",
        "title": "La Octava Maravilla",
        "year": 2007,
        "youtubeId": "wGOWrMAQN-k"
      },
      {
        "id": "tanto-amor",
        "title": "Tanto Amor",
        "year": 2011,
        "youtubeId": "E-0JNRDzltc"
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
        "youtubeId": "gBEZQdks1f0"
      },
      {
        "id": "holy-wars-the-punishment-due",
        "title": "Holy Wars... The Punishment Due",
        "year": 1990,
        "youtubeId": "9d4ui9q7eDM"
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
        "title": "Gracias a la vida",
        "year": 1974,
        "youtubeId": "fwY4NaHiRbE"
      },
      {
        "id": "alfonsina-y-el-mar",
        "title": "Alfonsina y el mar",
        "year": 1969,
        "youtubeId": "AHiqZoatqy0"
      },
      {
        "id": "todo-cambia",
        "title": "Todo cambia",
        "year": 1984,
        "youtubeId": "6BP4nhKkiKE"
      },
      {
        "id": "como-la-cigarra",
        "title": "Como la cigarra",
        "year": 1979,
        "youtubeId": "ArcS3QeYR8s"
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
        "youtubeId": "6xjJ2XIbGRk"
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
        "id": "thriller",
        "title": "Thriller",
        "year": 1982,
        "youtubeId": "sOnqjkJTMaA"
      },
      {
        "id": "billie-jean",
        "title": "Billie Jean",
        "year": 1983,
        "youtubeId": "Zi_XLOBDo_Y"
      },
      {
        "id": "beat-it",
        "title": "Beat It",
        "year": 1983,
        "youtubeId": "oRdxUFDoQe0"
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
        "id": "starlight",
        "title": "Starlight",
        "year": 2006,
        "youtubeId": "Pgum6OT_VH8"
      },
      {
        "id": "uprising",
        "title": "Uprising",
        "year": 2009,
        "youtubeId": "w8KQmps-Sog"
      },
      {
        "id": "supermassive-black-hole",
        "title": "Supermassive Black Hole",
        "year": 2006,
        "youtubeId": "Xsp3_a-PMTw"
      },
      {
        "id": "knights-of-cydonia",
        "title": "Knights of Cydonia",
        "year": 2006,
        "youtubeId": "Q3Yc3HhSl1Q"
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
        "year": 1992,
        "youtubeId": "vabnZ9-ex7o"
      },
      {
        "id": "lithium",
        "title": "Lithium",
        "year": 1992,
        "youtubeId": "pkcJEvMcnEg"
      },
      {
        "id": "heart-shaped-box",
        "title": "Heart-Shaped Box",
        "year": 1993,
        "youtubeId": "UThKn_TmfmM"
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
        "title": "El hombre suburbano",
        "year": 1971,
        "youtubeId": "whikfAKRGSU"
      },
      {
        "id": "adonde-esta-la-libertad",
        "title": "Adónde está la libertad",
        "year": 1971,
        "youtubeId": "lEbBujAr980"
      },
      {
        "id": "sucio-y-desprolijo",
        "title": "Sucio y Desprolijo",
        "year": 1972,
        "youtubeId": "mAr_QQ9uSFc"
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
        "id": "vencedores-vencidos",
        "title": "Vencedores Vencidos",
        "year": 1988,
        "youtubeId": "17Bz8rNJNsQ"
      },
      {
        "id": "un-poco-de-amor-frances",
        "title": "Un Poco de Amor Francés",
        "year": 1991,
        "youtubeId": "WlFLpKaC4_c"
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
        "id": "jeremy",
        "title": "Jeremy",
        "year": 1992,
        "youtubeId": "MS91knuzoOA"
      },
      {
        "id": "even-flow",
        "title": "Even Flow",
        "year": 1992,
        "youtubeId": "CxKWTzr-k6s"
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
        "id": "me-gusta-ese-tajo",
        "title": "Me gusta ese tajo",
        "year": 1972,
        "youtubeId": "vLXG0FLBQdQ"
      },
      {
        "id": "el-monstruo-de-la-laguna",
        "title": "El monstruo de la laguna",
        "year": 1972,
        "youtubeId": "LOJBc18wzLQ"
      },
      {
        "id": "blues-de-cris",
        "title": "Blues de Cris",
        "year": 1972,
        "youtubeId": "0n0hbrNSOLA"
      },
      {
        "id": "bajan",
        "title": "Bajan",
        "year": 1973,
        "youtubeId": "pVD4xTf0EWU"
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
        "id": "another-brick-in-the-wall",
        "title": "Another Brick in the Wall, Part 2",
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
        "youtubeId": "MWw1on9jVvg"
      },
      {
        "id": "money",
        "title": "Money",
        "year": 1973,
        "youtubeId": "MDHfOQClQrw"
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
        "id": "talk-dirty-to-me",
        "title": "Talk Dirty to Me",
        "year": 1986,
        "youtubeId": "xCChxBSRo1Y"
      },
      {
        "id": "nothin-but-a-good-time",
        "title": "Nothin' but a Good Time",
        "year": 1988,
        "youtubeId": "_88L-CU7PD4"
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
        "id": "we-will-rock-you",
        "title": "We Will Rock You",
        "year": 1977,
        "youtubeId": "-tJYN-eG1zk"
      },
      {
        "id": "we-are-the-champions",
        "title": "We Are the Champions",
        "year": 1977,
        "youtubeId": "04854XqcfCY"
      },
      {
        "id": "dont-stop-me-now",
        "title": "Don't Stop Me Now",
        "year": 1978,
        "youtubeId": "HgzGwKwLmgM"
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
        "youtubeId": "xOnYeIuDhQE"
      },
      {
        "id": "sheena-is-a-punk-rocker",
        "title": "Sheena Is a Punk Rocker",
        "year": 1977,
        "youtubeId": "-MjGQm0Gomw"
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
        "year": 1990,
        "youtubeId": "G4HeLeCZF1Q"
      },
      {
        "id": "guerrero-del-arco-iris",
        "title": "Guerrero del Arco Iris",
        "year": 1991,
        "youtubeId": "EzeHbWMHTww"
      },
      {
        "id": "la-leyenda-del-hada-y-el-mago",
        "title": "La Leyenda del Hada y el Mago",
        "year": 1991,
        "youtubeId": "51cZsDsVOqc"
      },
      {
        "id": "talisman",
        "title": "Talismán",
        "year": 2008,
        "youtubeId": "kyNBv1liYtQ"
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
        "id": "under-the-bridge",
        "title": "Under the Bridge",
        "year": 1991,
        "youtubeId": "LjYdlipjGTI"
      },
      {
        "id": "californication",
        "title": "Californication",
        "year": 1999,
        "youtubeId": "uA1URBXZjAs"
      },
      {
        "id": "otherside",
        "title": "Otherside",
        "year": 1999,
        "youtubeId": "XFvl2qsFLCs"
      },
      {
        "id": "cant-stop",
        "title": "Can't Stop",
        "year": 2002,
        "youtubeId": "8DyziWtkfBw"
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
        "youtubeId": "Yg8BIMh_KgQ"
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
        "id": "eiti-leda",
        "title": "Eiti-Leda",
        "year": 1978,
        "youtubeId": "qOOtah1Q__U"
      },
      {
        "id": "cancion-de-alicia-en-el-pais",
        "title": "Canción de Alicia en el país",
        "year": 1980,
        "youtubeId": "YRNFye2SysM"
      },
      {
        "id": "no-llores-por-mi-argentina",
        "title": "No llores por mí, Argentina",
        "year": 1982,
        "youtubeId": "u4E3QsmW61c"
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
        "id": "persiana-americana",
        "title": "Persiana Americana",
        "year": 1986,
        "youtubeId": "OhbGkSxIqOk"
      },
      {
        "id": "en-la-ciudad-de-la-furia",
        "title": "En la Ciudad de la Furia",
        "year": 1988,
        "youtubeId": "PJoB_SWEqEg"
      },
      {
        "id": "de-musica-ligera",
        "title": "De Música Ligera",
        "year": 1990,
        "youtubeId": "ie-jNqM3J4A"
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
        "id": "puerto-tirol",
        "title": "Puerto Tirol",
        "year": 1996,
        "youtubeId": "HZGFKFh2x70"
      },
      {
        "id": "tren-del-cielo",
        "title": "Tren del cielo",
        "year": 2007,
        "youtubeId": "a-28PW8o9Kw"
      },
      {
        "id": "el-bahiano",
        "title": "El Bahiano",
        "year": 2003,
        "youtubeId": "8_CcdCDMkcw"
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
        "youtubeId": "haeoUzvcl_M"
      },
      {
        "id": "spoonman",
        "title": "Spoonman",
        "year": 1994,
        "youtubeId": "T0_zzCLLRvE"
      },
      {
        "id": "rusty-cage",
        "title": "Rusty Cage",
        "year": 1992,
        "youtubeId": "pBZs_Py-1_0"
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
        "id": "rasguna-las-piedras",
        "title": "Rasguña las piedras",
        "year": 1973,
        "youtubeId": "DrKRNJGAyHw"
      },
      {
        "id": "cancion-para-mi-muerte",
        "title": "Canción para mi muerte",
        "year": 1972,
        "youtubeId": "1Zjm0uh8oeA"
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
        "youtubeId": "JoC3PUBmhFs"
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
        "id": "mejor-no-hablar-de-ciertas-cosas",
        "title": "Mejor no hablar de ciertas cosas",
        "year": 1985,
        "youtubeId": "P7M9U0D06iI"
      },
      {
        "id": "la-rubia-tarada",
        "title": "La Rubia Tarada",
        "year": 1985,
        "youtubeId": "nWvA8ThFH8M"
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
        "id": "hey-jude",
        "title": "Hey Jude",
        "year": 1968,
        "youtubeId": "A_MjCqQoLLA"
      },
      {
        "id": "let-it-be",
        "title": "Let It Be",
        "year": 1970,
        "youtubeId": "8QIN7SfSRyI"
      },
      {
        "id": "come-together",
        "title": "Come Together",
        "year": 1969,
        "youtubeId": "45cYwDMibGo"
      },
      {
        "id": "here-comes-the-sun",
        "title": "Here Comes the Sun",
        "year": 1969,
        "youtubeId": "KQetemT1sWc"
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
        "id": "london-calling",
        "title": "London Calling",
        "year": 1979,
        "youtubeId": "EfK-WX2pa8c"
      },
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
        "id": "train-in-vain",
        "title": "Train in Vain",
        "year": 1979,
        "youtubeId": "aUzBgeI5dpc"
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
        "year": 2004,
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
        "id": "self-esteem",
        "title": "Self Esteem",
        "year": 1994,
        "youtubeId": "w-GVMRLeaVs"
      },
      {
        "id": "come-out-and-play",
        "title": "Come Out and Play",
        "year": 1994,
        "youtubeId": "QJ9r4gM20ME"
      },
      {
        "id": "the-kids-arent-alright",
        "title": "The Kids Aren't Alright",
        "year": 1999,
        "youtubeId": "7iNbnineUCI"
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
        "id": "paint-it-black",
        "title": "Paint It, Black",
        "year": 1966,
        "youtubeId": "O4irXQhgMqg"
      },
      {
        "id": "angie",
        "title": "Angie",
        "year": 1973,
        "youtubeId": "oWRr03VcA-0"
      },
      {
        "id": "start-me-up",
        "title": "Start Me Up",
        "year": 1981,
        "youtubeId": "j9qwFiHSU9c"
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
        "id": "someday",
        "title": "Someday",
        "year": 2001,
        "youtubeId": "knU9gRUWCno"
      },
      {
        "id": "reptilia",
        "title": "Reptilia",
        "year": 2003,
        "youtubeId": "b8-tXG8KrWs"
      },
      {
        "id": "hard-to-explain",
        "title": "Hard to Explain",
        "year": 2001,
        "youtubeId": "BXkm6h6uq0k"
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
        "title": "Talkin' 'Bout a Revolution",
        "year": 1988,
        "youtubeId": "Xv8FBjo1Y8I"
      },
      {
        "id": "give-me-one-reason",
        "title": "Give Me One Reason",
        "year": 1995,
        "youtubeId": "V6hQ9HSKlIE"
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
        "id": "todavia-cantamos",
        "title": "Todavía cantamos",
        "year": 1982,
        "youtubeId": "idU8AzhDVXU"
      },
      {
        "id": "razon-de-vivir",
        "title": "Razón de vivir",
        "year": 1995,
        "youtubeId": "QKCDQK3S5pI"
      },
      {
        "id": "sobreviviendo",
        "title": "Sobreviviendo",
        "year": 2020,
        "youtubeId": "JFJB7KkT6AU"
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
        "youtubeId": "Es63CNwm71c"
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
        "id": "i-will-always-love-you",
        "title": "I Will Always Love You",
        "year": 1992,
        "youtubeId": "T9Ybsvw_0p4"
      },
      {
        "id": "i-wanna-dance-with-somebody",
        "title": "I Wanna Dance with Somebody (Who Loves Me)",
        "year": 1987,
        "youtubeId": "eH3giaIzONA"
      },
      {
        "id": "greatest-love-of-all",
        "title": "Greatest Love of All",
        "year": 1986,
        "youtubeId": "IYzlVDlE72w"
      }
    ]
  }
];
