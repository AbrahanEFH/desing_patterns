// Factory - Crea objetos basados en ciertas condiciones

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}"`
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {


            default:
                return;
        }
    }
}