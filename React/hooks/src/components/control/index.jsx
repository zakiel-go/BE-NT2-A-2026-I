import { useIniciado } from "../../hooks/useIniciado"

const Control = () => {
  const { isRunning, setIsRunning, reset, setReset } = useIniciado()

  // estos metodos que cambien estados del padre esta bueno hacer la logica en el padre, es decir en el provider y no en el componente
  //entonces no hace falta este metodo y directamente lo importamos del provider, y lo utilizamos directamente en el onClick
  const handleStartPause = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setReset(!reset);
    if (isRunning) {
      setIsRunning(false)
    }
  }

  return (
    <div className="control card">
      <button type="button" onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Control