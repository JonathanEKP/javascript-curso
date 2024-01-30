/**
 * Esta función obtiene el valor de la carta.
 * @param {String} carta Ejemplo: '4C'
 * @returns {Number} Ejemplo: 4
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}