// Mixin Pattern

class Persona {
    constructor(nombre, email, tlf) {
        this.nombre = nombre;
        this.email = email;
        this.tlf = tlf;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;

    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email} Tlf: ${this.tlf}`)
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

// Añadir funcionesPersona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona)
Object.assign(Cliente.prototype, funcionesPersona)

const cliente = new Persona('Thomas', 'correo@correo.com', 123124124)

console.log(cliente)
cliente.mostrarInformacion()
cliente.mostrarNombre()

const cliente2 = new Cliente('cliente', 'correo')
console.log(cliente2)