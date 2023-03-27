import * as images from './pages/Images'
const products = [{
    id: '1',
    name: 'SKMEI Reloj Digital Pulcera',
    price: 1000.00,
    marca: 'SKMEI',
    src: images.IMG1 ,
    description: 'Reloj Tactico Militar Bluetooth Digital 1251 Sumergible 50 metros Deportivo',
    stock: 20,
    count: 0
},
{
    id: '2',
    name: 'Reloj Tommy Hilfiger Layla Rosé',
    price: 1000.00,
    marca: 'Tommy Hilfiger',
    src: images.IMG2 ,
    description: 'Reloj elegante de la marca Tommy Hilfiger',
    stock: 15,
    count: 0
},
{
    id: '3',
    name: 'Reloj Swatch New Gent',
    price: 1500.00,
    marca: 'New Gent',
    src: images.IMG3 ,
    description: 'Este reloj Swatch New Gent artístico conmemora el cuadro más famoso de Piet Mondrian, Composition en Rouge, Bleu et Blanc II.',
    stock: 25,
    count: 0
},
{
    id: '4',
    name: 'SKMEI Reloj Digital Pulcera',
    price: 1000.00,
    marca: 'SKMEI',
    src: images.IMG1 ,
    description: 'Reloj Tactico Militar Bluetooth Digital 1251 Sumergible 50 metros Deportivo',
    stock: 20,
    count: 0
},
{
    id: '5',
    name: 'Reloj Tommy Hilfiger Layla Rosé',
    price: 1000.00,
    marca: 'Tommy Hilfiger',
    src: images.IMG2 ,
    description: 'Reloj elegante de la marca Tommy Hilfiger',
    stock: 15,
    count: 0
},
{
    id: '6',
    name: 'Reloj Swatch New Gent',
    price: 1500.00,
    marca: 'New Gent',
    src: images.IMG3 ,
    description: 'Este reloj Swatch New Gent artístico conmemora el cuadro más famoso de Piet Mondrian, Composition en Rouge, Bleu et Blanc II.',
    stock: 25,
    count: 0
}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (marcaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.marca === marcaId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)

    })
}

export const addCountCart = (productId, cantidad) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let producto = getProductById(productId);
                producto.count = cantidad;
            }, 1000)
    
        })


}