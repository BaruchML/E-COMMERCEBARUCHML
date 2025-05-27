import { games} from "../services/gamesMock"
import { FullProductType, GameShowCardType } from "../types/componentTypes"


export const getGames = (): Promise<GameShowCardType[]> => {
    return new Promise((resolve) => {
        resolve(games)
    })
}

export const getLimitedGames = (start: number = 0, large: number): Promise<GameShowCardType[]> => {
    return new Promise((resolve => {
        const limitedGames = []
        for (let i = start; i < large; i++) {
            limitedGames.push(games[i])
        }
        resolve(limitedGames)
    }))
}
// ? pendiente typar // CREO QUE FALTA TIPARLO, DEJE LA NOTA PERO NO SE SI SÍ
export const getGame = (id: string):Promise<FullProductType> => {
    return new Promise((resolve,reject) => {
        const game = games.find(item => item.id === id)
          if (!game) {
      return reject(new Error('Producto no encontrado'));
    }
    resolve(game);
        
        resolve(game)
    })
}


export const getSearchedGames = (query: string = '', category: string | null = null): Promise<GameShowCardType[]> => {
    if (!category) {
        
        return new Promise((resolve) => {
            if (query === '') {
                console.log('function searched');
                resolve(games)
            } else {
                const gamesFiltred = games.filter((game) => game.name?.toLowerCase().includes(query.toLowerCase()))
                console.log({ category });
                resolve(gamesFiltred)
            }
            
        })
        
    } else {

        return new Promise((resolve) => {
            if (query != '') {
                const gamesFiltred = games.filter((game) => game.name?.toLowerCase().includes(query.toLowerCase()))
                console.log({ category });
                resolve(gamesFiltred)
            }else if (category) {
                
                const gamesFiltred = games.filter((game) => game.info.category?.toLowerCase().includes(category.toLowerCase()))
                console.log({ category });
  
                resolve(gamesFiltred)
            }
            
            
        })
        
    }
}

// export const getCategoryGames = (category: string): Promise<GameShowCardType[]> => {
//     return new Promise((resolve) => {
//         if (category === null) {
//             resolve(games)
//         } else {
//             const gamesFiltred = games.filter((game) => game.category?.toLowerCase().includes(category.toLowerCase()))
//             resolve(gamesFiltred)
//         }
        
//     })
// }