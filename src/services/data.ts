// import { tinySkills as tiny } from "./skills"

export interface GameType{
    key?:number,
    id: string,
    name: string,
    description:string
    img: string,
    // gitImage: string,
    // git: string,
    // icons? : string[]
}


const games: GameType[] = [
    {
        id: "1",
        name: "Luigis Mansion",
        description: 'Lorem',
        // description:"Utilizando Node.js, Express, habdlbars, MongoDB entre otras dependencias, fue que realice este proyecto backend de un e-commerce, contiene Log-In y Registro, autorizaciones de usuario, chat en tiempo real, productos en tiempo real, carrito de compras conectado a la base de datos, entre otras funciones utiles",
        img: "../../public/img/luigis-mansion.jpeg",
        // gitImage: tiny.github,
        // git: "https://github.com/BaruchML/BACKEND-FINALPROYECT",
        // icons : [tiny.js, tiny.express,tiny.mongo,tiny.node,tiny.git]
    },
    {
        id: "2",
        name: "Mario Kart World",
        description: 'Lorem',
        // description:"Proyecto FRONT-END de un e-commerce con tematica de Nintendo. \nlas herramientas que utilice fueron React con Vite, Desplegado con Vercel, usando Bootstrap para el estilo y Firebase",
        img: "../../public/img/mario-kart.jpeg",
        // gitImage: tiny.github,
        // git: "https://github.com/BaruchML/E-COMMERCEBARUCHML",
        // icons : [tiny.js, tiny.react,tiny.vite,tiny.bootstrap,tiny.git]

    },
    {
        id: "3",
        name: "Devil May Cry",
        description: 'Lorem',
        // description:"Un pequeño proyecto de cuando comenzaba a profundizar en este maravilloso mundo de la programación y de JS",
        img: "../../public/img/devil-may-cry.jpg",
        // gitImage: tiny.github,
        // git: "https://github.com/BaruchML/JSProyectoFinalMendivil",
        // icons : [tiny.ts, tiny.react,tiny.next,tiny.tailwind,tiny.git]

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

    //*Pendiente agregar mas proyectos de los que me acuerdo (financeApp y Practicas)
]

export const getGames = ():Promise<GameType[]>=> {

   return new Promise((resolve) => {
    resolve(games)
   })
}
// ? pendiente typar
export const getProject = (id:string)=> {
    return new Promise((resolve) => {
        resolve(games.find(item => item.id === id))
    })
}