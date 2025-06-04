import { crearCartaHTML, pedirCarta, valorCarta } from "./index.js";

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos de la computadora
 * @param {HTMLElement} puntosHTML elementos HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se muestran las cartas de la computadora
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {
    if (!puntosMinimos) throw new Error('puntosMinimos es necesario');
    if (!puntosHTML) throw new Error('puntosHTML es necesario');
    if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck');
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
