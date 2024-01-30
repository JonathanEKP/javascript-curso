function Persona (nombre, edad){
    console.log('Se ejecutó esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log( `Nombre: ${ this.nombre } - edad: ${this.edad}` );
    }



}

const maria = new  Persona('Maria', 18);
const jonathan = new Persona ('Jonathan', 23);

jonathan.imprimir();
maria.imprimir();

