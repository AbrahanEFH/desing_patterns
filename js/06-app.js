// Mixin Pattern

class Persona {
    constructor(nombre, email, tlf) {
        this.nombre = nombre;
        this.email = email;
        this.tlf = tlf;
    }
}

const persona1 = new Persona('thomas', 'correo@correo.com', 21231)

console.log(persona1)