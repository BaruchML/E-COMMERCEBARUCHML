const misProductos = [
    {id:"1", nombre: "Mario", stock:10, precio:1500, img: "../img/mariobros.jfif", idCat:"1"},
    {id:"2", nombre: "Luigi", stock:10, precio:1400, img: "../img/luigi.jfif", idCat:"1"},
    {id:"3", nombre: "Wario", stock:10, precio:600, img: "../img/wario.jfif", idCat:"2"},
    {id:"4", nombre: "Bowser",stock:10,  precio:1200, img: "../img/bowser.jfif", idCat:"2"},
    {id:"5", nombre: "Peach",stock:10,  precio:1500, img: "../img/peach.jfif", idCat:"3"},
    {id:"6", nombre: "Rosalina",stock:10,  precio:900, img: "../img/rosalina.jfif", idCat:"3"},
    {id:"7", nombre: "King Boo",stock:10,  precio:900, img: "../img/kingboo.png", idCat:"2"},
    {id:"8", nombre: "Yoshi",stock:10,  precio:1100, img: "../img/yoshi.jfif", idCat:"1"},
    {id:"9", nombre: "Daisy",stock:10,  precio:600, img: "../img/daisy.jfif", idCat:"3"},
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        },500)
    })
}


export const getProductosPorCategoria = (idCatgoria) => {
    return new Promise(resolve => {
            setTimeout(() => {
                const productosCategoria = misProductos.filter(item => item.idCat === idCatgoria)
                resolve(productosCategoria);
            }, 500 )
        }
    )
}