import { CategoriesType, FullProductType } from "../types/componentTypes";

export const games: FullProductType[] = [
   {
        id: "1",
        name: "Gothic Dania Town",
        img: ["/img/goth-1.png","/img/goth-2.png","/img/goth-3.png"],
        price: 1099,
        stock: 0, 
        info: {
            category: 'Aventura',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Adéntrate en los sombríos callejones de Dania Town, una metrópolis gótica plagada de misterios y peligros ancestrales. En Gothic Dania Town, asumes el papel de un detective paranormal con la misión de desentrañar una conspiración oscura que amenaza con consumir la ciudad. Explora entornos intrincados, interactúa con personajes enigmáticos y desvela secretos ocultos mientras enfrentas criaturas de pesadilla. Cada decisión cuenta en esta aventura narrativa donde la atmósfera opresiva y los giros inesperados te mantendrán pegado a la pantalla.',
            titleDescription: 'Un viaje épico de misterio y terror gótico en la ciudad de Dania.',
            developer: 'Shadowlore Studios',
            lunchDate: '15/05/2012',
            numberOfPlayers: '1 jugador',
            rating: '4.2',
            size: '8 GB'
        },
    },
    {
        id: "28",
        name: "Tech Dungeon",
        img: ["/img/tech-dungeon-1.png","/img/tech-dungeon-2.png","/img/tech-dungeon-3.png"],
        stock: 120, 
        price: 2000,
        info: {
            category: 'RPG',
            clasification: 'T (Teen)',
            console: 'PlayStation 4',
            description: 'Bienvenido a Tech Dungeon, un RPG de acción con elementos roguelike donde la tecnología y la fantasía se fusionan en un mundo posapocalíptico. Desciende a mazmorras generadas proceduralmente, repletas de robots hostiles, trampas láser y poderosos jefes cibernéticos. Recolecta componentes tecnológicos para mejorar tu armamento y armadura, y desbloquea habilidades cibernéticas únicas. La estrategia y la adaptabilidad son clave para sobrevivir en este entorno impredecible que promete una experiencia diferente en cada partida.',
            titleDescription: 'Explora un futuro distópico lleno de peligros cibernéticos y mejoras tecnológicas.',
            developer: 'Cybernetic Games',
            lunchDate: '01/11/2018',
            numberOfPlayers: '1-2 jugadores (Co-op local)',
            rating: '4.6',
            size: '15 GB'
        },
    },
    {
        id: "17",
        name: "Burnoutt",
        img: ["/img/burnoutt-1.jpg","/img/burnoutt-2.jpg","/img/notice-3.png",],
        stock: 80, 
        price: 1500, 
        info: {
            category: 'Accion',
            clasification: 'E10+ (Everyone 10+)',
            console: 'Xbox 360',
            description: 'Siente la adrenalina en Burnoutt, un frenético juego de carreras arcade donde la velocidad no es el único objetivo. Provoca colisiones espectaculares, realiza derrapes imposibles y utiliza el nitro para dejar a tus oponentes en el polvo. Con una amplia gama de vehículos personalizables y modos de juego que van desde carreras callejeras hasta desafíos de destrucción, Burnoutt es el paraíso para los amantes de la velocidad y el caos vehicular. Prepárate para quemar el asfalto y dejar tu marca.',
            titleDescription: 'Carreras explosivas y acción sin límites. ¡Siente la velocidad!',
            developer: 'NitroDrive Studios',
            lunchDate: '20/07/2006',
            numberOfPlayers: '1-4 jugadores (Splitscreen)',
            rating: '4.7',
            size: '6 GB'
        },
    },
    {
        id: "8",
        name: "Warped",
        img: ["/img/warped-1.png","/img/warped-3.png","/img/warped-2.png"],
        stock: 65, 
        price: 1800, 
        info: {
            category: 'RPG',
            clasification: 'T (Teen)',
            console: 'Nintendo Switch',
            description: 'Warped te sumerge en un RPG de fantasía oscura con una narrativa ramificada y un sistema de combate táctico por turnos. Explora un reino devastado por una antigua maldición, forma un equipo de héroes únicos y enfréntate a criaturas grotescas. Cada decisión que tomes afectará el destino del mundo y de tus compañeros. Con un estilo artístico único y una banda sonora envolvente, Warped ofrece una experiencia de rol profunda y memorable para los aficionados al género.',
            titleDescription: 'Un RPG de fantasía oscura con decisiones que cambian el destino.',
            developer: 'DreamForge Games',
            lunchDate: '10/03/2020',
            numberOfPlayers: '1 jugador',
            rating: '4.3',
            size: '18 GB'
        },
    },
    {
        id: "3",
        name: "Sunny Land",
        img: ["/img/sunnyland-1.png","/img/sunnyland-2.png","/img/sunnyland-3.jpg"],
        stock: 200, 
        price: 800, 
        info: {
            category: 'Aventura',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Embárcate en una encantadora aventura de plataformas en Sunny Land, donde la luz del sol nunca se apaga y el peligro acecha en cada esquina. Juega como un pequeño héroe que debe salvar a sus amigos de una misteriosa oscuridad que se cierne sobre el reino. Salta, corre y resuelve puzles en niveles coloridos y llenos de vida. Con un estilo artístico adorable y una jugabilidad accesible, Sunny Land es perfecto para jugadores de todas las edades que buscan una experiencia alegre y desafiante.',
            titleDescription: 'Una aventura de plataformas brillante y llena de alegría para toda la familia.',
            developer: 'PixelBloom Studios',
            lunchDate: '05/08/2015',
            numberOfPlayers: '1 jugador',
            rating: '4.0',
            size: '2 GB'
        },
    },
    {
        id: "7",
        name: "Tiny Swords",
        img: ["/img/tiny-swords-1.png","/img/tiny-swords-2.jpeg","/img/notice-5.png"],
        stock: 90, 
        price: 1200, 
        info: {
            category: 'Rol',
            clasification: 'E10+ (Everyone 10+)',
            console: 'Móvil',
            description: 'Comanda un ejército de héroes diminutos en Tiny Swords, un RPG de rol táctico donde el tamaño no importa. Construye tu equipo definitivo, mejora sus habilidades y equipamiento, y enfréntate a hordas de enemigos en batallas estratégicas por turnos. Explora un vasto mundo lleno de secretos, completa misiones desafiantes y participa en eventos épicos. A pesar de su apariencia adorable, Tiny Swords ofrece una profundidad estratégica que pondrá a prueba tus habilidades tácticas.',
            titleDescription: 'Pequeños héroes, grandes aventuras: un RPG táctico que te sorprenderá.',
            developer: 'PocketRealm Games',
            lunchDate: '12/02/2019',
            numberOfPlayers: '1 jugador',
            rating: '4.1',
            size: '1.5 GB'
        },
    },
    {
        id: "9",
        name: "World Travel",
        img: ["/img/world-travel-1.png","/img/world-travel-2.png","/img/world-travel-3.png",],
        stock: 70, 
        price: 1300, 
        info: {
            category: 'Estrategia',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'En World Travel, tu misión es construir un imperio turístico global. Desarrolla aeropuertos, hoteles y atracciones en ciudades icónicas de todo el mundo. Gestiona tus recursos, investiga nuevas tecnologías y compite contra otras empresas para atraer a más turistas. Diseña rutas de vuelo eficientes, invierte en marketing y responde a los desafíos económicos y climáticos. ¿Podrás crear la red de viajes más exitosa y sostenible del planeta?',
            titleDescription: 'Conquista el mundo del turismo en este juego de estrategia y gestión global.',
            developer: 'GlobalSim Studios',
            lunchDate: '01/09/2017',
            numberOfPlayers: '1 jugador',
            rating: '3.9',
            size: '4 GB'
        },
    },
    {
        id: "4",
        name: "Alien Royal",
        img: ["/img/alien-crash-1.jpg","/img/alien-crash-2.png","/img/alien-crash-3.png"],
        stock: 40, 
        price: 2200, 
        info: {
            category: 'Accion',
            clasification: 'M (Mature 17+)',
            console: 'PC',
            description: 'Lucha por la supervivencia en Alien Royal, un intenso shooter de ciencia ficción donde eres el último bastión de la humanidad contra una invasión alienígena implacable. Explora entornos post-apocalípticos, recolecta armas exóticas y utiliza habilidades especiales para repeler a las hordas extraterrestres. Con un sistema de combate dinámico y gráficos impresionantes, Alien Royal te sumerge en una guerra desesperada por el futuro de la Tierra. ¿Serás capaz de resistir el asalto final?',
            titleDescription: 'Un shooter de ciencia ficción apocalíptico: la última esperanza de la humanidad.',
            developer: 'Cosmic Edge Games',
            lunchDate: '25/06/2021',
            numberOfPlayers: '1 jugador',
            rating: '4.5',
            size: '25 GB'
        },
    },
    {
        id: "5",
        name: "Space Wars",
        img: ["/img/space-wars-3.png","/img/space-wars-1.png","/img/space-wars-2.png"],
        stock: 110, 
        price: 1900, 
        info: {
            category: 'Accion',
            clasification: 'T (Teen)',
            console: 'PC',
            description: 'Prepárate para el combate estelar en Space Wars, un juego de acción espacial con batallas épicas entre naves. Pilota tu propia nave de guerra, personaliza su armamento y participa en intensos dogfights en el vacío del espacio. Únete a una facción, completa misiones desafiantes y explora galaxias vastas llenas de asteroides, estaciones espaciales y peligrosos piratas. La supervivencia depende de tu habilidad para maniobrar y disparar con precisión.',
            titleDescription: 'Combate intergaláctico a gran escala. Conviértete en el mejor piloto.',
            developer: 'Nebula Force',
            lunchDate: '10/04/2016',
            numberOfPlayers: '1 jugador',
            rating: '4.3',
            size: '10 GB'
        },
    },
    {
        id: "6",
        name: "Sunny Land Forest Illusion",
        img: ["/img/sunnylandFI-1.png","/img/sunnylandFI-2.png","/img/sunnylandFI-3.png"],
        stock: 180, 
        price: 900, 
        info: {
            category: 'Aventura',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Regresa al mundo encantado de Sunny Land en Forest Illusion, una nueva aventura que explora los misterios del bosque. Sigue a nuestro pequeño héroe mientras descubre ilusiones mágicas y enfrenta desafíos ambientales. Este juego expande el universo de Sunny Land con nuevos personajes, puzles ingeniosos y secretos ocultos, todo ello manteniendo el estilo visual y la jugabilidad adorable que ya conoces. Una expansión perfecta para los fans del original.',
            titleDescription: 'La magia del bosque te espera en esta encantadora expansión de Sunny Land.',
            developer: 'PixelBloom Studios',
            lunchDate: '01/03/2017',
            numberOfPlayers: '1 jugador',
            rating: '4.1',
            size: '3 GB'
        },
    },
    {
        id: "2",
        name: "RPG BATTLE",
        img: ["/img/rpg-battle-1.png","/img/rpg-battle-2.png","/img/notice-6.png"],
        stock: 95, 
        price: 1700, 
        info: {
            category: 'RPG',
            clasification: 'T (Teen)',
            console: 'PC',
            description: 'Sumérgete en el clásico mundo de RPG BATTLE, un juego de rol por turnos que rinde homenaje a los grandes títulos del género. Reúne a un grupo de héroes con habilidades únicas, explora vastos mapas, enfrenta criaturas míticas y desentraña una historia épica llena de traición y heroísmo. Con un sistema de combate profundo y un árbol de habilidades ramificado, RPG BATTLE ofrece cientos de horas de contenido para los amantes del rol más tradicional.',
            titleDescription: 'Un RPG clásico con batallas épicas por turnos y una historia inmersiva.',
            developer: 'RetroQuest Games',
            lunchDate: '20/09/2014',
            numberOfPlayers: '1 jugador',
            rating: '4.4',
            size: '12 GB'
        },
    },
    {
        id: "10",
        name: "Farm Defense",
        img: ["/img/farm-defense-1.jpg","/img/farm-defense-2.png","/img/farm-defense-3.png"],
        stock: 150, 
        price: 700, 
        info: {
            category: 'Estrategia',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'En Farm Defense, tu tranquila granja está bajo ataque de plagas, criaturas y, a veces, incluso ovnis. Construye torres de defensa estratégicamente, planta cultivos especiales que te ayuden en la batalla y mejora tus herramientas para repeler oleadas de enemigos. Es un giro divertido y adictivo en el género de tower defense, donde la gestión de recursos es tan importante como la táctica militar. Defiende tu cosecha a toda costa.',
            titleDescription: 'Defiende tu granja de hordas de enemigos en este divertido juego de tower defense.',
            developer: 'HarvestGuard',
            lunchDate: '10/07/2013',
            numberOfPlayers: '1 jugador',
            rating: '3.8',
            size: '1 GB'
        },
    },
    {
        id: "12",
        name: "Nightfall 2",
        img: ["/img/nightfall-3.jpg","/img/nightfall-1.png","/img/nightfall-2.png"],
        stock: 75, 
        price: 2500, 
        info: {
            category: 'Rol',
            clasification: 'M (Mature 17+)',
            console: 'PC',
            description: 'Nightfall 2 continúa la sombría saga de rol y horror gótico. Despierta en un mundo devastado por una plaga sobrenatural, donde la línea entre la realidad y la pesadilla se difumina. Explora ciudades en ruinas, mazmorras llenas de horrores y páramos desolados. Lucha contra criaturas Lovecraftianas, toma decisiones morales difíciles y desentraña una conspiración que podría llevar a la aniquilación. Un RPG oscuro y atmosférico para los amantes del horror profundo.',
            titleDescription: 'El horror gótico se intensifica en esta secuela de rol que te dejará sin aliento.',
            developer: 'Grimoire Interactive',
            lunchDate: '05/11/2023',
            numberOfPlayers: '1 jugador',
            rating: '4.6',
            size: '30 GB'
        },
    },
    {
        id: "13",
        name: "Mineraft",
        img: ["/img/mineraft-1.png","/img/mineraft-2.jpg","/img/mineraft-3.png"],
        stock: 300, 
        price: 1200, 
        info: {
            category: 'Aventura',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Libera tu creatividad en Mineraft, un juego de construcción y aventura donde las posibilidades son infinitas. Explora un mundo cúbico vasto y generado proceduralmente, recolecta recursos, construye estructuras impresionantes y enfréntate a criaturas nocturnas. Ya sea que quieras construir tu propia ciudad, explorar cuevas profundas o simplemente sobrevivir y crear, Mineraft te ofrece la libertad de jugar a tu manera. Un clásico atemporal para construir sueños.',
            titleDescription: 'Un universo de bloques para construir, explorar y vivir aventuras ilimitadas.',
            developer: 'BlockWorks',
            lunchDate: '08/04/2011',
            numberOfPlayers: '1-8 jugadores (Multijugador online)',
            rating: '4.9',
            size: '5 GB'
        },
    },
    {
        id: "14",
        name: "Poker",
        img: ["/img/poker-1.png","/img/poker-2.jpg","/img/poker-3.jpg"],
        stock: 500, 
        price: 200, 
        info: {
            category: 'Casual',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Pon a prueba tus habilidades de farol y estrategia en Poker, el clásico juego de cartas ahora en tu PC. Juega contra la IA o contra amigos en diferentes modalidades, incluyendo Texas Hold\'em y Omaha. Perfecciona tu estrategia, aprende a leer a tus oponentes y conviértete en un maestro del póker. Con una interfaz sencilla y reglas personalizables, es perfecto para principiantes y veteranos por igual que buscan una partida rápida o un torneo intenso.',
            titleDescription: 'El clásico juego de póker, estrategia y faroles al alcance de tu mano.',
            developer: 'CardSharp Games',
            lunchDate: '01/01/2008',
            numberOfPlayers: '1-6 jugadores',
            rating: '3.5',
            size: '500 MB'
        },
    },
    {
        id: "15",
        name: "Ninja Adventure",
        img: ["/img/notice-1.png","/img/ninja-adventure-2.jpg","/img/ninja-adventure-3.jpg"],
        stock: 130, 
        price: 1100, 
        info: {
            category: 'Aventura',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Conviértete en un sigiloso ninja en Ninja Adventure, un juego de plataformas y acción con énfasis en el sigilo y el combate acrobático. Atraviesa peligrosos dojos, evítales a los guardias y utiliza tus habilidades ninja para superar obstáculos y derrotar a tus enemigos. Recolecta pergaminos secretos y desbloquea nuevas técnicas. Este juego te desafiará con sus puzles ambientales y secuencias de combate rápidas, ofreciendo una experiencia emocionante para los amantes de los ninjas.',
            titleDescription: 'Una emocionante aventura ninja con sigilo, acción y desafíos acrobáticos.',
            developer: 'StealthBlade',
            lunchDate: '10/06/2016',
            numberOfPlayers: '1 jugador',
            rating: '4.0',
            size: '3 GB'
        },
    },
    {
        id: "16",
        name: "Golden Pirates",
        img: ["/img/golden-pirates-1.jpg","/img/notice-4.png","/img/golden-pirates-2.png"],
        stock: 85, 
        price: 1600, 
        info: {
            category: 'Rol',
            clasification: 'T (Teen)',
            console: 'PC',
            description: 'Zarpa hacia el Caribe en Golden Pirates, un RPG de rol de acción y aventura ambientado en la época dorada de la piratería. Conviértete en un capitán pirata, recluta a tu tripulación, personaliza tu barco y navega por vastos océanos en busca de tesoros perdidos y batallas navales épicas. Saquea asentamientos, comercia con islas remotas y enfréntate a criaturas marinas legendarias. La vida de un pirata te espera con oro, gloria y peligros sin fin.',
            titleDescription: 'Conviértete en un legendario pirata en este RPG de aventuras marinas.',
            developer: 'Oceanic Studios',
            lunchDate: '18/07/2020',
            numberOfPlayers: '1 jugador',
            rating: '4.5',
            size: '20 GB'
        },
    },
    {
        id: "18",
        name: "Casino",
        img: ["/img/casino-1.jpg","/img/casino-2.jpg","/img/casino-3.jpg"],
        stock: 400, 
        price: 300, 
        info: {
            category: 'Casual',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Experimenta la emoción de un casino real desde la comodidad de tu hogar con Casino. Este juego ofrece una amplia variedad de los clásicos juegos de casino, incluyendo ruleta, blackjack, tragamonedas y baccarat. Practica tus estrategias, juega con fichas virtuales y siente la adrenalina de una noche de apuestas sin riesgos. Ideal para aprender los juegos o simplemente divertirse en un ambiente simulado de casino.',
            titleDescription: 'Vive la emoción de los juegos de casino clásicos en un entorno virtual.',
            developer: 'LuckSpins Games',
            lunchDate: '05/03/2009',
            numberOfPlayers: '1 jugador',
            rating: '3.7',
            size: '1 GB'
        },
    },
    {
        id: "19",
        name: "CatleMania",
        img: ["/img/castlemania-1.png","/img/castlemania-2.png","/img/castlemania-3.png"],
        stock: 60, 
        price: 2100, 
        info: {
            category: 'RPG',
            clasification: 'T (Teen)',
            console: 'PC',
            description: 'Adéntrate en los misteriosos y peligrosos castillos de CatleMania, un RPG de acción con elementos de Metroidvania. Explora un gigantesco castillo interconectado, descubre pasajes secretos, mejora tus habilidades y enfréntate a hordas de criaturas demoníacas. Cada sala oculta un nuevo desafío, un tesoro legendario o un jefe formidable. El juego te desafía con su dificultad y te recompensa con la exploración y el dominio del combate.',
            titleDescription: 'Un RPG de acción estilo Metroidvania lleno de secretos y peligros en un vasto castillo.',
            developer: 'FortressForge',
            lunchDate: '14/09/2022',
            numberOfPlayers: '1 jugador',
            rating: '4.7',
            size: '22 GB'
        },
    },
    {
        id: "20",
        name: "The Graveyard 3",
        img: ["/img/graveyard-1.jpg","/img/graveyard-2.jpg","/img/graveyard-3.jpg"],
        stock: 55, 
        price: 1400, 
        info: {
            category: 'Estrategia',
            clasification: 'T (Teen)',
            console: 'PC',
            description: 'Gestiona tu propio cementerio y sus "residentes" en The Graveyard 3, un peculiar juego de estrategia y gestión. Tu tarea es expandir tu negocio, atraer a más "clientes", y lidiar con los desafíos de mantener un camposanto en funcionamiento, incluyendo eventos sobrenaturales y visitas inesperadas. Es un juego con humor negro y una jugabilidad estratégica que te hará pensar más allá de la tumba. ¿Serás el mejor empresario funerario?',
            titleDescription: 'Gestiona tu propio cementerio con humor negro y desafíos estratégicos.',
            developer: 'Eternal Rest Studios',
            lunchDate: '20/10/2019',
            numberOfPlayers: '1 jugador',
            rating: '3.9',
            size: '7 GB'
        },
    },
    {
        id: "21",
        name: "Land Monster",
        img:[ "/img/land-monster-1.png", "/img/land-monster-2.png", "/img/land-monster-3.jpg"],
        stock: 70, 
        price: 1350, 
        info: {
            category: 'Estrategia',
            clasification: 'E10+ (Everyone 10+)',
            console: 'PC',
            description: 'Comanda a tus propias criaturas gigantes en Land Monster, un juego de estrategia por turnos donde el campo de batalla son ciudades enteras. Crea y evoluciona a tus monstruos, cada uno con habilidades destructivas únicas, y utilízalos para arrasar bases enemigas y conquistar territorios. Planifica tus movimientos cuidadosamente, explota las debilidades del oponente y domina el mapa para convertirte en el amo de las criaturas gigantes.',
            titleDescription: 'Dirige monstruos gigantes en batallas estratégicas para dominar el mundo.',
            developer: 'GiantBeast Games',
            lunchDate: '15/05/2018',
            numberOfPlayers: '1 jugador',
            rating: '4.0',
            size: '9 GB'
        },
    },
    {
        id: "22",
        name: "Lune Blade",
        img: ["/img/lune-blade-1.jpg","/img/lune-blade-2.jpg","/img/lune-blade-3.jpg"],
        stock: 45, 
        price: 2300, 
        info: {
            category: 'Accion',
            clasification: 'M (Mature 17+)',
            console: 'PlayStation 5',
            description: 'Desenvaina la legendaria Lune Blade en este trepidante juego de acción y combate hack-and-slash. Enfréntate a demonios y criaturas sobrenaturales en un mundo oscuro y estilizado. Domina un sistema de combate fluido con combos devastadores, habilidades mágicas y parrys precisos. Explora vastos niveles llenos de secretos, mejora tu arma y descubre la verdad detrás de la maldición que asola la tierra. Prepárate para una experiencia de combate visceral y desafiante.',
            titleDescription: 'Un frenético hack-and-slash con espadas y magia en un mundo oscuro.',
            developer: 'Crimson Moon Studios',
            lunchDate: '01/02/2024',
            numberOfPlayers: '1 jugador',
            rating: '4.8',
            size: '40 GB'
        },
    },
    {
        id: "23",
        name: "Monster Enemy",
        img: ["/img/monster-enemy-1.webp","/img/monster-enemy-2.webp","/img/monster-enemy-3.webp"],
        stock: 60, 
        price: 1850, 
        info: {
            category: 'Rol',
            clasification: 'T (Teen)',
            console: 'Nintendo Switch',
            description: 'Caza y colecciona monstruos en Monster Enemy, un RPG de aventuras donde te embarcas en un viaje para convertirte en el mejor domador de criaturas. Explora exuberantes paisajes, captura y entrena a más de cien tipos diferentes de monstruos, cada uno con sus propias habilidades. Lucha en batallas por turnos estratégicas, personaliza tus equipos y desvela los secretos del mundo de los monstruos. Una aventura épica para los amantes de la captura y la estrategia.',
            titleDescription: 'Captura, entrena y lucha con monstruos en este extenso RPG de aventura.',
            developer: 'CreatureForge',
            lunchDate: '11/08/2021',
            numberOfPlayers: '1 jugador',
            rating: '4.4',
            size: '15 GB'
        },
    },
    {
        id: "24",
        name: "Oak Woods",
        img: ["/img/oak-woods-1.png","/img/oak-woods-2.png","/img/oak-woods-3.jpg"],
        stock: 90, 
        price: 1000, 
        info: {
            category: 'Estrategia',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Construye y gestiona tu propio asentamiento en el corazón de un bosque antiguo en Oak Woods. Este juego de simulación y estrategia te desafía a recolectar recursos, construir viviendas, desarrollar infraestructura y expandir tu pequeña comunidad. Enfréntate a las estaciones, los desafíos naturales y la creciente población. Un juego relajante pero desafiante para aquellos que disfrutan de la construcción de ciudades y la gestión de recursos.',
            titleDescription: 'Crea tu asentamiento ideal en un bosque sereno en este juego de estrategia y gestión.',
            developer: 'ForestVille',
            lunchDate: '03/04/2017',
            numberOfPlayers: '1 jugador',
            rating: '4.0',
            size: '4 GB'
        },
    },
    {
        id: "25",
        name: "Plane Sprite",
        img: ["/img/plane-sprite-1.jpg","/img/plane-sprite-2.jpg","/img/plane-sprite-3.jpg"],
        stock: 150, 
        price: 600, 
        info: {
            category: 'Casual',
            clasification: 'E (Everyone)',
            console: 'Móvil',
            description: 'Toma el control de un adorable avión de papel en Plane Sprite, un juego casual de estilo endless runner. Maniobra a través de paisajes dibujados a mano, esquiva obstáculos, recolecta potenciadores y establece la puntuación más alta. Con controles intuitivos y un estilo artístico encantador, Plane Sprite es perfecto para sesiones de juego rápidas y relajantes. ¿Hasta dónde puedes volar?',
            titleDescription: 'Un encantador endless runner con un avión de papel y paisajes pintorescos.',
            developer: 'SkyBound Games',
            lunchDate: '07/07/2018',
            numberOfPlayers: '1 jugador',
            rating: '3.6',
            size: '500 MB'
        },
    },
    {
        id: "26",
        name: "Puzzle",
        img: ["/img/puzzle-1.png","/img/puzzle-2.png","/img/puzzle-3.png"],
        stock: 250, 
        price: 400, 
        info: {
            category: 'Casual',
            clasification: 'E (Everyone)',
            console: 'PC',
            description: 'Pon a prueba tu mente con Puzzle, una colección de desafíos lógicos y rompecabezas visuales. Desde intrincados rompecabezas de lógica hasta desafiantes juegos de combinación, esta colección ofrece una gran variedad de formas de ejercitar tu cerebro. Con niveles de dificultad crecientes y una interfaz limpia, Puzzle es la elección perfecta para los amantes de los desafíos mentales que buscan una experiencia casual y gratificante.',
            titleDescription: 'Una colección diversa de rompecabezas para agudizar tu mente.',
            developer: 'BrainTease',
            lunchDate: '12/12/2010',
            numberOfPlayers: '1 jugador',
            rating: '3.8',
            size: '1 GB'
        },
    },
    {
        id: "27",
        name: "Spell Master",
        img: ["/img/spell-master-1.jpg","/img/spell-master-2.jpg","/img/spell-master-3.jpg"],
        stock: 80, 
        price: 1950, 
        info: {
            category: 'RPG',
            clasification: 'T (Teen)',
            console: 'PC',
            description: 'Conviértete en un hechicero legendario en Spell Master, un RPG de acción con un innovador sistema de lanzamiento de hechizos. Aprende y combina cientos de conjuros, invoca criaturas mágicas y domina los elementos para derrotar a tus enemigos. Explora un vasto mundo de fantasía lleno de secretos, completa misiones desafiantes y enfréntate a poderosos magos oscuros. Tus habilidades mágicas son el límite en esta aventura arcanista.',
            titleDescription: 'Domina el arte de la magia en un RPG de acción con un sistema de hechizos único.',
            developer: 'Arcane Arts',
            lunchDate: '07/09/2022',
            numberOfPlayers: '1 jugador',
            rating: '4.6',
            size: '20 GB'
        },
    },

];

export const categories: CategoriesType[] = [
    { name: 'RPG' },
    { name: 'Estrategia' },
    { name: 'Aventura' },
    { name: 'Rol' },
    { name: 'Accion' },
    { name: 'Casual' },
]


    // {
    //     id:'7',
    //     name:`Foto de <a href="https://unsplash.com/es/@igrindphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Evgeniy Smersh</a> en <a href="https://unsplash.com/es/fotos/un-monton-de-videojuegos-encima-de-una-mesa-DtTpaWveIHE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
    //     description:'sisii',
    //     img:'cual no se'
    
    // }
    // {
    //     id:'7',
    //     name:Foto de <a href="https://unsplash.com/es/@kvalifik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kvalifik</a> en <a href="https://unsplash.com/es/fotos/paquete-de-alimentos-con-etiqueta-negra-y-roja-Qp0sNSZhFx4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    
    //     description:'sisii',
    //     img:'cual no se'
    
    // }
    // {
    //     id:'7',
    //     name:Foto de Foto de <a href="https://unsplash.com/es/@guiom_c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Guillaume Coupy</a> en <a href="https://unsplash.com/es/fotos/una-gameboy-azul-y-roja-sentada-encima-de-una-mesa-Zdkn765eMZs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    
    //     description:'sisii',
    //     img:'cual no se'
    
    // }
    // {
    //     id:'7',
    //     name:Foto de <a href="https://unsplash.com/es/@pf91_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick</a> en <a href="https://unsplash.com/es/fotos/mando-de-juegos-de-nintendo-blanco-sobre-superficie-amarilla-fOYg1lkZA7Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    
    
    //     description:'sisii',
    //     img:'cual no se'
    
    // }
