
class Persona {
    
    static _conteo = 0;

    static get Conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log("Hola a todos, soy un mensaje");
    }
    //Los metodos y propiedas estaticas no pueden usar los valores de abajo, porque no están siendo instanciadas por un objeto nuevo
    // sino son usadas directamente de la clase
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = "Sin nombre", codigo = "Sin codigo", frase = "Sin frase"){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}


const spiderman = new Persona("Peter Parker", "Spiderman", "Spiderman");
// const ironman = new Persona("Tony Stark", "Ironman", "Mi frase");

// spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza';
/* Si hacemos lo siguiente es valido, creara una propiedad pero no es correcto hacerlo. También
    es posible setear una nueva comida si no es privada la propiedad
*/
//spiderman.nemesis = 'Duende verde';
//spiderman.comida = 'Duende verde';


// console.log(spiderman.getComidaFavorita);
// console.log( spiderman )


// ironman.quienSoy();
// ironman.miFrase();
// Persona._conteo = 2;

console.log('Conteo statico', Persona._conteo);
console.log(Persona.Conteo);
Persona.mensaje();

Persona.propiedadExterna = "Hola";

console.log(Persona.propiedadExterna);
console.log(Persona);