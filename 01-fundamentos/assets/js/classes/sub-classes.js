
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

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
    
}


const spiderman = new Heroe("Peter Parker", "Spiderman", "Spiderman");
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();