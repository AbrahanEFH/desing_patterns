// Constructor Pattern

class Persona {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa, telefono) {
        super(nombre, email, telefono)
        this.empresa = empresa;
    }
}

const cliente2 = new Cliente('Marcos', 'Correo@mail.com', 'Indra', 12131244)

console.log(cliente2)

class Trabajador extends Cliente {
    constructor(nombre, email, empresa, telefono, direccion) {
        super(nombre, email, empresa, telefono);
        this.direccion = direccion;
    }

}

const trabajador = new Trabajador('Thomas', 'correo@correo', 'Indra', 123414124, 'Madrid')
const trabajador2 = new Trabajador('Luis', 'correo@correo', 'Indra', 123235432, 'Madrid')


console.log(trabajador)
console.log(trabajador2)