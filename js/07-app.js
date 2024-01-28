// Namespace
// Para organizar codigo

// comienza como un objeto vacio que iremos llenando

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Arepa',
        precio: 15
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    }
]

// Escribir restaurantApp en la consola y mostrara el arreglo 

restaurantApp.funciones = {
    mostrarMenu: () => {
        console.log(`Bienvenidos a nuestro menú`)
    }
}

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu()