
/**
 * Esta función elimina una carta del deck
 * y la retorna
 * @param {Array<String>} deck Egjemplo: ['2C', '3D', 'AS', '10H']
 * @returns {String} retorna la carta que se ha sacado del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}