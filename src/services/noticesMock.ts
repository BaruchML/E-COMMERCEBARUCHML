
export interface noticeType {
    key?: number,
    id: string,
    name: string,
    price?: number,
    img?: string,
    description: string,
    category?: string,
    date:string,
    largeDescription:string
    gameId:string
}


const notices: noticeType[] = [
{
  id: "1",
  name: "Ninja Adventure",
  description: "Nuevos personajes disponibles el próximo 30 de Mayo",
  img: "/img/notice-1.png",
  category: "adventure",
  date: "2023-05-25", // Fecha reciente
  largeDescription: `
    ¡Prepárate para una nueva aventura en Ninja Adventure! El próximo 30 de mayo se lanzarán nuevos personajes jugables que
    cambiarán la dinámica del juego. Los ninjas se alistan para enfrentar desafíos aún más difíciles en un mundo lleno de misterios.
    Aprovecha esta nueva actualización para desbloquear habilidades únicas y sumergirte en emocionantes misiones. ¡No te lo puedes perder!
    Esta expansión traerá nuevos niveles, nuevos enemigos y más secretos por descubrir. ¡Actúa rápido y mejora tu equipo antes de la gran actualización!
  `,
  gameId:'15'
},
{
  id: "2",
  name: "SUNNYLAND DLC",
  description: "Paquete de expansión que te permite conocer zonas inexploradas del mapa Badam",
  img: "/img/sunnyland-1.png",
  category: "rpg",
  date: "2023-05-22", // Fecha reciente
  largeDescription: `
    ¡Explora nuevas y emocionantes zonas del mapa Badam con el nuevo paquete de expansión Sunnyland DLC! Este DLC te permitirá
    conocer zonas inexploradas, llenas de secretos y sorpresas. El mundo de Sunnyland te ofrece nuevas ciudades, criaturas exóticas
    y misterios por resolver. ¿Estás listo para expandir tus horizontes en este RPG épico?
    Además, Sunnyland trae consigo nuevas misiones, enemigos y un sinfín de aventuras por descubrir. ¡Atrévete a adentrarte en este
    nuevo capítulo y conquista los territorios más desconocidos de Badam!
  `,
  gameId:'3'
},
{
  id: "3",
  name: "Burnoutt Recargado",
  description: "Festejando el Día de Burnoutt se lanzarán nuevos skins",
  img: "/img/notice-3.png",
  category: "adventure",
  date: "2023-05-23", // Fecha reciente
  largeDescription: `
    ¡El Día de Burnoutt está aquí! Para celebrar esta fecha tan especial, el juego Burnoutt ha lanzado una serie de nuevos skins
    para personalizar a tus personajes favoritos. Estos skins son una mezcla de estilos únicos y temáticos, ¡perfectos para los fans
    más acérrimos de Burnoutt!
    Además de los skins, también se han añadido nuevas características y mejoras para que tu experiencia de juego sea aún más
    emocionante. No pierdas la oportunidad de obtener estos exclusivos skins y personalizar tu aventura como nunca antes. ¡Corre
    con estilo y haz que todos te vean en la pista!
  `,
  gameId:'17'
},
   {
  id: "4",
  name: "Se actualiza Golden Pirates",
  description: "¡GP Studio acaba de renovar la interfaz!",
  img: "/img/notice-4.png",
  category: "adventure",
  date: "2023-05-24", // Fecha reciente
  largeDescription: `
    ¡Golden Pirates vuelve renovado! GP Studio ha lanzado una gran actualización que no solo mejora la jugabilidad, sino que también
    ha renovado por completo la interfaz de usuario. Esta nueva actualización proporciona una experiencia más fluida, moderna y
    visualmente atractiva.
    Los piratas ahora tienen una nueva forma de navegar por los mares del Caribe, con un mapa interactivo, misiones más dinámicas y
    un sistema de recompensas mejorado. La nueva interfaz te permitirá disfrutar de la aventura con controles más intuitivos y
    gráficos mejorados. ¡Es el momento perfecto para zarpar nuevamente y explorar los océanos en busca de tesoros!
  `,
  gameId:'16'
},
 {
  id: "5",
  name: "Recompensa en Tiny Swords",
  description: "Habla con este personaje para obtener 70 Rupias",
  img: "/img/notice-5.png",
  category: "rpg",
  date: "2023-05-21", // Fecha reciente
  largeDescription: `
    ¡Gran recompensa en Tiny World! Ahora puedes obtener 70 Rupias simplemente hablando con un personaje especial dentro del juego.
    Este evento limitado solo estará disponible por tiempo limitado, así que no pierdas la oportunidad de hacer crecer tu inventario
    y mejorar tus habilidades con estas monedas extra.
    Las Rupias son esenciales para comprar objetos únicos, mejorar tus armas y acceder a nuevas áreas del mundo. Aprovecha esta
    oportunidad para ganar algo extra antes de que termine el evento. ¡Habla con el personaje ahora y aprovecha las recompensas!
  `,
  gameId:'7'
},
{
  id: "6",
  name: "RPG BATTLE - SUN PASS",
  description: "Aprovecha el evento del Sol en RPG Battle. Además, ten un descuento al comprarlo ya mismo",
  img: "/img/notice-6.png",
  category: "rpg",
  date: "2023-05-20", // Fecha reciente
  largeDescription: `
    ¡La batalla por el sol ha comenzado en RPG Battle! Aprovecha el evento especial *Sun Pass* para obtener descuentos exclusivos
    en artículos y personajes dentro del juego. Este evento único ofrece recompensas increíbles para aquellos que se atrevan a
    enfrentarse a los desafíos que el sol trae consigo.
    Además de las recompensas, los jugadores que adquieran el Sun Pass tendrán acceso a contenido exclusivo, incluyendo skins,
    armas y personajes especiales. ¡No pierdas la oportunidad de obtener un descuento en tu compra y aprovechar todas las ventajas
    que ofrece este evento limitado!
  ` , gameId:'2'
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