import { useState, useEffect } from "react"
import { useIniciado } from "../../hooks/useIniciado"

const Cronometro = () => {
    const { isRunning, reset } = useIniciado()
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (isRunning) {
            // hay q guardar el id del interval para limpiarlo cuando se pause el crono
            // prevTime tmb puede ser prev 
            const interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isRunning]);
    
    useEffect(() => {
        setTime(0);
    }, [reset])

    return (
        <div className="cronometro card">
            <h1>{time}</h1>
        </div>
    )
}


export default Cronometro