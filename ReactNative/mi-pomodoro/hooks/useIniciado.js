import { useState, useContext, createContext } from "react";

const cronometroContext = createContext();

export const IniciadoProvider = ({ children }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [reset, setReset] = useState(false)
    const [isWorkTime, setIsWorkTime] = useState(true);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }

    const toggleReset = () => {
        setReset(!reset);
    }

    const toggleWorkTime = () => {
        setIsWorkTime(!isWorkTime);
        setTime(nextIsWork ? constants.WORK_TIME : constants.BREAK_TIME);
    }

    return (
        <cronometroContext.Provider value={{ isRunning, reset, isWorkTime, toggleRunning, toggleReset, toggleWorkTime }}>
        {children}
        </cronometroContext.Provider>
    )
}

export function useIniciado(){
    const estaIniciado = useContext(cronometroContext);

    if (!estaIniciado){
        throw new Error('useIniciado debe ser usado dentro de un IniciadoProvider')
    }

    return estaIniciado;
}