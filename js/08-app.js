// Patron de diseno Mediador

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`)
    },
    vendido: comprador => {
        console.log(`vendido a ${comprador}`)
    }
}

function Comprador(nombre) {

}

function Subasta() {

}


// Creacion de objetos

const thomas = new Comprador('Thomas')
const pablo = new Comprador('Pablo')
const vendedor = new Vendedor('vendedor de autos')
const subasta = new Subasta('subasta')

vendedor.oferta('Mustang 66', 33)
vendedor.vendido('Pablo')