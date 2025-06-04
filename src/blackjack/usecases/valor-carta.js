/**
 * Esta función recibe una carta y retorna su valor
 * @param {string} carta Ejemplo: '2C', '3D', 'AS', '10H'
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}