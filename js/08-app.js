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
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre]
        }
    }
}


// Creacion de objetos

const thomas = new Comprador('Thomas')
const pablo = new Comprador('Pablo')
const vendedor = new Vendedor('vendedor de autos')
const subasta = new Subasta('subasta')

// Registro
subasta.registrar(thomas);
subasta.registrar(pablo);
subasta.registrar(vendedor);


vendedor.oferta('Mustang 66', 3300)

thomas.oferta(350, thomas)
pablo.oferta(450, pablo)
thomas.oferta(550, thomas)
pablo.oferta(650, pablo)

vendedor.vendido('Pablo')