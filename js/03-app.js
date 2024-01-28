// Singleton 

let instancia = null;


class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Pepe', 'Correo@correo.com')
const persona2 = new Persona('Llee', 'Correo@correo.com')

console.log(persona)
