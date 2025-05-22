
export interface GameType {
    key?: number,
    id: string,
    name?: string,
    price?: number,
    img?: string,
    stock?: number
    description: string,
    category?: string
}

export const categories = [
    'RPG',
    'Estrategia',
    'Aventura',
    'Rol',
    'Accion',
    'Casual',
]
const games: GameType[] = [
    {
        id: "1",
        name: "Gothic Dania Town",
        description: 'Lorem',
        img: "/img/goth-1.png",
        category: 'Aventura'
    },
    {
        id: "28",
        name: "Tech Dungeon",
        description: 'Lorem',
        img: "/img/tech-dungeon-1.png",
        category:'RPG'

    },
    {
        id: "17",
        name: "Burnoutt",
        description: 'Lorem',
        img: "/img/burnoutt-1.jpg",
        category:'Accion'

    },
       {
        id: "8",
        name: "Warped",
        description: 'Lorem',
        img: "/img/warped-1.png",
        category: 'RPG'

    },
   
    {
        id: "3",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",
        category: 'Aventura'
    }, 
    {
        id: "7",
        name: "Tiny Swords",
        description: 'Lorem',
        img: "/img/tiny-swords-1.png",
        category: 'Rol'

    },
 
    {
        id: "9",
        name: "World Travel",
        description: 'Lorem',
        img: "/img/world-travel-1.png",
        category: 'Estrategia'

    },
    {
        id: "4",
        name: "Alien Royal",
        description: 'Lorem',
        img: "/img/alien-crash-1.jpg",
        category: 'Accion'
    },
    {
        id: "5",
        name: "Space Wars",
        description: 'Lorem',
        img: "/img/space-wars-3.png",
        category: 'Accion'

    },
    {
        id: "6",
        name: "Sunny Land Forest Illusion",
        description: 'Lorem',
        img: "/img/sunnylandFI-1.png",
        category: 'Aventura'

    },
   
     {
        id: "2",
        name: "RPG BATTLE",
        description: 'Lorem',
        img: "/img/rpg-battle-1.png",
        category: 'RPG'

    },
    {
        id: "10",
        name: "Farm Defense",
        description: 'Lorem',
        img: "/img/farm-defense-1.jpg",
        category:'Estrategia'

    },
    {
        id: "12",
        name: "Nightfall 2",
        description: 'Lorem',
        img: "/img/nightfall-3.jpg",
        category:'Rol'

    },
    {
        id: "13",
        name: "Mineraft",
        description: 'Lorem',
        img: "/img/mineraft-1.png",
        category:'Aventura'

    },
    {
        id: "14",
        name: "Poker",
        description: 'Lorem',
        img: "/img/poker-1.png",
        category: 'Casual'

    },
    {
        id: "15",
        name: "Ninja Adventure",
        description: 'Lorem',
        img: "/img/notice-1.png",
        category:'Aventura'

    },
    {
        id: "16",
        name: "Golden Pirates",
        description: 'Lorem',
        img: "/img/golden-pirates-1.jpg",
        category:'Rol'

    },

    {
        id: "18",
        name: "Casino",
        description: 'Lorem',
        img: "/img/casino-1.jpg",
        category:'Casual'

    },
    {
        id: "19",
        name: "CatleMania",
        description: 'Lorem',
        img: "/img/castlemania-1.png",
        category:'RPG'

    },
    {
        id: "20",
        name: "The Graveyard 3",
        description: 'Lorem',
        img: "/img/graveyard-1.jpg",
        category:'Estrategia'

    },
    {
        id: "21",
        name: "Land Monster",
        description: 'Lorem',
        img: "/img/land-monster-1.png",
        category:'Estrategia'
    },
    {
        id: "22",
        name: "Lune Blade",
        description: 'Lorem',
        img: "/img/lune-blade-1.jpg",
        category:'Accion'

    },
    {
        id: "23",
        name: "Monster Enemy",
        description: 'Lorem',
        img: "/img/monster-enemy-1.webp",
        category:'Rol'

    },
    {
        id: "24",
        name: "Oak Woods",
        description: 'Lorem',
        img: "/img/oak-woods-1.png",
        category:'Estrategia'

    },
    {
        id: "25",
        name: "Plane Sprite",
        description: 'Lorem',
        img: "/img/plane-sprite-1.jpg",
        category:'Casual'

    },
    {
        id: "26",
        name: "Puzzle",
        description: 'Lorem',
        img: "/img/puzzle-1.png",
        category:'Casual'

    },
    {
        id: "27",
        name: "Spell Master",
        description: 'Lorem',
        img: "/img/spell-master-1.jpg",
        category:'RPG'

    },

    // {
    //     id: "17",
    //     name: "Burnoutt",
    //     description: 'Lorem',
    //     img: "/img/golden-pirate-1.png",

    // },

    // {
    //     id: "4",
    //     name: "Next Finance App",
    //     description: 'Lorem',
    //     // description:"Un pequeño proyecto de cuando comenzaba a profundizar en este maravilloso mundo de la programación y de JS",
    //     img: "./img/ship-it.svg",
    //     gitImage: tiny.github,
    //     git: "https://github.com/BaruchML/JSProyectoFinalMendivil",
    //     icons : [tiny.js, tiny.react,tiny.next,tiny.tailwind,tiny.git,tiny.zod,tiny.supabase]
    // },
    // {
    //     id: "5",
    //     name: "Next Finance App",
    //     description: 'Lorem',
    //     // description:"Un pequeño proyecto de cuando comenzaba a profundizar en este maravilloso mundo de la programación y de JS",
    //     img: "./img/ship-it.svg",
    //     gitImage: tiny.github,
    //     git: "https://github.com/BaruchML/JSProyectoFinalMendivil",
    //     icons : [tiny.js, tiny.react,tiny.next,tiny.tailwind,tiny.git,tiny.zod,tiny.supabase]
    // },
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

];

const news = [];
const imageResources = []

export const getGames = (): Promise<GameType[]> => {
    return new Promise((resolve) => {
        resolve(games)
    })
}

export const getLimitedGames = (start: number = 0, large: number): Promise<GameType[]> => {
    return new Promise((resolve => {
        const limitedGames = []
        for (let i = start; i < large; i++) {
            limitedGames.push(games[i])
        }
        resolve(limitedGames)
    }))
}
// ? pendiente typar // CREO QUE FALTA TIPARLO, DEJE LA NOTA PERO NO SE SI SÍ
export const getGame = (id: string) => {
    return new Promise((resolve) => {
        resolve(games.find(item => item.id === id))
    })
}


export const getSearchedGames = (query: string = ''): Promise<GameType[]> => {
    return new Promise((resolve) => {
        if (query === '') {
            resolve(games)
        } else {
            const gamesFiltred = games.filter((game) => game.name?.toLowerCase().includes(query.toLowerCase()))
            resolve(gamesFiltred)
        }

    })
}

export const getCategoryGames = (category:string): Promise<GameType[]> => {
    return new Promise((resolve) => {
        if (category === null) {
            resolve(games)
        } else {
            const gamesFiltred = games.filter((game) => game.category?.toLowerCase().includes(category.toLowerCase()))
            resolve(gamesFiltred)
        }

    })
}