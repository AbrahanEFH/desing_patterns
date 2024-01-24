// Mixin Pattern

class Persona {
    constructor(nombre, email, tlf) {
        this.nombre = nombre;
        this.email = email;
        this.tlf = tlf;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`)
    }
}

const cliente = new Persona('Thomas', 'correo@correo.com', 123124124)

console.log(cliente)