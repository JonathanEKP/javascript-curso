class Persona {

    static porObjeto( {nombre, apellido, pais} ) {
        return new Persona( nombre, apellido, pais );
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais  = pais;

    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}


const nombre1 = "Jonathan",
        apeliido1 = "Larios",
        pais1 = "El Salvador";

const fer = {
    nombre: "fernando",
    apellido: "Herrera",
    pais: "Costa Rica"
}

const persona1 = new Persona(nombre1, apeliido1, pais1);
const persona2 = Persona.porObjeto( fer );

persona1.getInfo();
persona2.getInfo();