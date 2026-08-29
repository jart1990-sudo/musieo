// Datos de la biblioteca musical.
// Generado a partir de investigacion en Wikipedia y YouTube.
// Cada artista: slug (id unico en la URL), name, genres (array), bio (texto extraido de la intro de Wikipedia),
// wikipedia (url de referencia), songs: [{ id, title, year, youtubeId }]

const ARTISTS = [
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
  }
];
