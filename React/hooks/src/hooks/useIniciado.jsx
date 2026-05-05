import globalContext from "./globalContext"
import { useState, useContext } from "react"
/**
 * Provider del contexto global para el estado de inicio del cronometro
 */
export const IniciadoProvider = ({ children }) => {
    const [isRunning, setIsRunning] = useState(false)
    const [reset, setReset] = useState(false)

    return (
        <globalContext.Provider value={{ isRunning, setIsRunning, reset, setReset }}>
            {children}
        </globalContext.Provider>
    )
    
}


export function useIniciado() {
    const estaIniciado = useContext(globalContext)

    if (!estaIniciado) {
        throw new Error('useIniciado debe ser usado dentro de un IniciadoProvider')
    }

    return estaIniciado
}