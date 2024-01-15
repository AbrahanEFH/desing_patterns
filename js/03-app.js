// Singleton 
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Pepe', 'Correo@correo.com')

console.log(persona)