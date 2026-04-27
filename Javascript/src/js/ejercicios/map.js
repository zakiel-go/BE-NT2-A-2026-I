
// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
import { EDAD_MINIMA, personas } from "./personas.js";
/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique 
 * si puede entrar o no en un casino
 */


function agregarFiltroCasino(personas){
    return personas.map(
        persona => {
            return(
                {
                    ...persona,
                    allowed: persona.age >= EDAD_MINIMA
                }
            )
        }
    )
    }

console.log(agregarFiltroCasino(personas)); 

