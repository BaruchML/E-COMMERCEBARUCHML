
export interface noticeType {
    key?: number,
    id: string,
    name?: string,
    price?: number,
    img?: string,
    description: string,
    category?: string
}


const notices: noticeType[] = [
    {
        id: "1",
        name: "Ninja Adventure",
        description: 'Nuevos personajes disponibles el proximo 30 de Mayo',
        img: "/img/notice-1.png",
        category: 'adventure'
    },
    {
        id: "2",
        name: "SUNNYLAND DLC",
        description: 'Paquete de expansion que te permite conocer zonas inexploradas del mapa Badam',
        img: "/img/sunnyland-1.png",
        category: 'rpg'

    },
    {
        id: "3",
        name: "Burnoutt Recargado",
        description: 'Festejando el dia de Burnoutt se lanzaran nuevos skins ',
        img: "/img/notice-3.png",
        category: 'adventure'
    },
    {
        id: "4",
        name: "Se actualiza Golden Pirates",
        description: '¡GP Studio, acaba de renovar la interfaz! ',
        img: "/img/notice-4.png",
        category: 'adventure'
    },
    {
        id: "5",
        name: "Recompensa en Tiny World",
        description: 'Habla con este personaje para obtener 70 Rupias',
        img: "/img/notice-5.png",

    },
    {
        id: "6",
        name: "RPG BATTLE - SUN PASS",
        description: 'Aprovecha el evento del Sol en RPG Battle. Ademas ten un descuento al comprarlo ya mismo',
        img: "/img/notice-6.png",

    },
   
];


export const getNotices = (): Promise<noticeType[]> => {
    return new Promise((resolve) => {
        resolve(notices)
    })
}

export const getLimitedNotices = (start:number = 0,large: number): Promise<noticeType[]> => {
    return new Promise((resolve => {
        const limitedNotices = []
        for (let i = start; i < large; i++) {
            limitedNotices.push(notices[i])
        }
        resolve(limitedNotices)
    }))
}
// ? pendiente typar // CREO QUE FALTA TIPARLO, DEJE LA NOTA PERO NO SE SI SÍ
export const getNotice = (id: string) => {
    return new Promise((resolve) => {
        resolve(notices.find(item => item.id === id))
    })
}