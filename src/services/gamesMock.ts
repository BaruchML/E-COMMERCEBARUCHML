
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


const games: GameType[] = [
    {
        id: "1",
        name: "Gothic Dania Town",
        description: 'Lorem',
        img: "/img/goth-1.png",
        category: 'adventure'
    },
    {
        id: "2",
        name: "RPG BATTLE",
        description: 'Lorem',
        img: "/img/rpg-battle-1.png",
        category: 'rpg'

    },
    {
        id: "3",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-2.png",
        category: 'adventure'
    },
    {
        id: "4",
        name: "Alien Royal",
        description: 'Lorem',
        img: "/img/alien-crash-1.png",
        category: 'adventure'
    },
    {
        id: "5",
        name: "Space Wars",
        description: 'Lorem',
        img: "/img/space-wars-1.png",

    },
    {
        id: "6",
        name: "Sunny Land Forest Illusion",
        description: 'Lorem',
        img: "/img/sunnylandFI-1.png",

    },
    {
        id: "7",
        name: "Tiny Swords",
        description: 'Lorem',
        img: "/img/tiny-swords-1.jpeg",

    },
    {
        id: "8",
        name: "Warped",
        description: 'Lorem',
        img: "/img/warped-1.png",

    },
    {
        id: "9",
        name: "World Travel",
        description: 'Lorem',
        img: "/img/world-travel-1.png",

    },
    {
        id: "10",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",

    },
    {
        id: "12",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",

    },
    {
        id: "13",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",

    },
    {
        id: "14",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",

    },
    {
        id: "15",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",

    },
    {
        id: "16",
        name: "Sunny Land",
        description: 'Lorem',
        img: "/img/sunnyland-1.png",

    },

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

export const getLimitedGames = (start:number = 0,large: number): Promise<GameType[]> => {
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


export const getSearchedGames = (query:string=''): Promise<GameType[]> => {
    return new Promise((resolve) => {
        if (query = '') {
            console.log('limpio');
            
            resolve(games)
        }else{

            console.log({query});
            return games.filter((game)=> game.name?.toLocaleLowerCase())
        }
    })
}