/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['4C','2D','6H','3S','A','J']
 * @returns {String} retorna una carta del deck, ejemplo: '4C'
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}